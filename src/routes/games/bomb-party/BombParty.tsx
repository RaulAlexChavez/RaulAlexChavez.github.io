import React, { useEffect } from 'react';
import { englishGrams } from './dicts/englishGrams';
import { spanishGrams } from './dicts/spanishGrams';
import { frenchGrams } from './dicts/frenchGrams';

interface BombPartyProps {
    something?: string;
}

type LastWord = {
    word: string;
    languages: string[];
}

const BombParty: React.FC<BombPartyProps> = ({
    something = "default value",
}) => {
    const [usedAlphabet, setUsedAlphabet] = React.useState<Record<string, boolean>>({});
    const alphabet: string = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const [points, setPoints] = React.useState<number>(0);
    const [alphabetClears, setAlphabetClears] = React.useState<number>(0);
    const [currentWord, setCurrentWord] = React.useState<string>("");
    const [currentGram, setCurrentGram] = React.useState<string>("");
    const [currentLanguages, setCurrentLanguages] = React.useState<Record<string, boolean>>({
        "english": true,
        "español": true,
        "français": true,
        // "deucth": true,
        // "italian": true,
        // "japanese": true
    });
    const [availableGrams, setAvailableGrams] = React.useState<string[]>([]);
    const [lastWord, setLastWord] = React.useState<LastWord | null>(null);

    useEffect(() => {
        const grams = getGrams();
        "ABCDEFGHIJKLMNOPQRSTUVWYZ".split("").forEach((letter) => {
            setUsedAlphabet((prev) => ({ ...prev, [letter]: false }));
        });

        setAvailableGrams(grams);
        generateRandomGram(grams);
    }, []);

    function getGrams(): string[] {
        let grams: string[] = [];

        if (currentLanguages.english) {
            grams.push(...englishGrams.bigrams, ...englishGrams.trigrams);
        }
        if (currentLanguages.español) {
            grams.push(...spanishGrams.bigrams, ...spanishGrams.trigrams);
        }
        if (currentLanguages.français) {
            grams.push(...frenchGrams.bigrams, ...frenchGrams.trigrams);
        }

        return grams;
    }

    useEffect(() => {
        const grams = getGrams();
        setAvailableGrams(grams);
        generateRandomGram(grams);
    }, [currentLanguages]);

    const languageSelector = () => {
        return (
            <div style={{ margin: "16px 0" }}>
                <strong>Selecciona idiomas:</strong>
                <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
                    {Object.entries(currentLanguages).map(([lang, enabled]) => (
                        <label key={lang} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            <input
                                type="checkbox"
                                checked={enabled}
                                onChange={() => {
                                    // Si solo queda uno seleccionado y se intenta desmarcar, no hacer nada
                                    const selectedCount = Object.values(currentLanguages).filter(Boolean).length;
                                    if (enabled && selectedCount === 1) return;
                                    setCurrentLanguages(prev => ({
                                        ...prev,
                                        [lang]: !enabled
                                    }));
                                }}
                            />
                            {lang}
                        </label>
                    ))}
                </div>
            </div>
        );
    }

    const gramView = () => {
        return (
            <div style={{
                margin: "24px 0",
                marginBottom: "-30px",
                padding: "16px",
                borderRadius: "8px",
                textAlign: "center",
                fontSize: "2em",
                fontWeight: "bold",
                letterSpacing: "2px"
            }}>
                {currentGram || "?"}
            </div>
        );
    }

    function handleWordSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
        e.preventDefault();
        const word = currentWord.trim().toUpperCase();

        let newLastWord: LastWord = {
            word: word,
            languages: []
        }

        // TODO: Use letterValues to calculate points
        // Helper to normalize word: remove accents, special chars, lowercase
        function normalize(str: string) {
            return str
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "") // Remove accents
                .replace(/ñ/g, "n") // Replace ñ with n
                .replace(/ç/g, "c") // Replace ç with c
                .toLowerCase();
        }

        let validLanguages = 0;
        const normalizedWord = normalize(word);

        console.log("Word submitted:", word);
        // Verificar si la palabra contiene el gram actual
        if (!normalizedWord.includes(normalize(currentGram.toUpperCase()))) {
            setCurrentWord("");
            return;
        }
        console.log("Word contains current gram:", currentGram);

        if (currentLanguages.english) {
            if (englishGrams.words.includes(normalizedWord)) {
                validLanguages++;
                newLastWord.languages.push("English");
            }
        }
        if (currentLanguages.español) {
            if (spanishGrams.words_normalized.includes(normalizedWord)) {
                validLanguages++;
                newLastWord.languages.push("Español");
            }
        }
        if (currentLanguages.français) {
            if (frenchGrams.words_normalized.includes(normalizedWord)) {
                validLanguages++;
                newLastWord.languages.push("Français");
            }
        }
        if (validLanguages === 0) {
            setCurrentWord("");
            return;
        }
        console.log("Valid languages count:", validLanguages);

        setPoints(points + word.length * validLanguages);
        generateRandomGram(availableGrams);

        // Verificar si la palabra contiene letras del alfabeto usado
        let lastUsedAlphabet: Record<string, boolean> = { ...usedAlphabet };
        for (const letter of word) {
            if (!lastUsedAlphabet[letter]) {
                lastUsedAlphabet[letter] = true;
                setUsedAlphabet((prev) => ({ ...prev, [letter]: true }));
            }
        }

        if (Object.values(lastUsedAlphabet).every(Boolean)) {
            setAlphabetClears(alphabetClears + 1);
            setUsedAlphabet(prev => {
                const reset = { ...prev };
                Object.keys(reset).forEach(letter => {
                    reset[letter] = false;
                });
                return reset;
            });
        }

        setLastWord(newLastWord);
        setCurrentWord("");
    }

    const typeSpace = () => {
        return (
            <div style={{ margin: "24px 0" }}>
                <input
                    type="text"
                    value={currentWord}
                    onKeyDown={e => {
                        e.preventDefault();
                        if (e.key === "Backspace") {
                            setCurrentWord(prev => prev.slice(0, -1));
                            return;
                        }
                        if (e.key.length == 1) {
                            if (!alphabet.includes(e.key.toUpperCase())) {
                                return;
                            }
                            setCurrentWord(prev => prev + e.key.toUpperCase());
                            return;
                        }
                        if (e.key === "Enter") {
                            handleWordSubmit(e);
                        }
                    }}
                    placeholder="Type your word..."
                    style={{
                        width: "100%",
                        padding: "12px",
                        fontSize: "1.2em",
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        outline: "none",
                        boxSizing: "border-box",
                        background: "transparent",
                        color: "#FFF",
                        alignContent: "center",
                        textAlign: "center",
                    }}
                    autoFocus
                />
            </div>
        );
    }

    const availableLetters = () => {
        return (
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "8px",
                margin: "16px 0"
            }}>
                {Object.entries(usedAlphabet).map(([letter, used]) => (
                    <div
                        key={letter}
                        style={{
                            background: used ? "#ccc" : "#2196f3",
                            color: used ? "#666" : "#fff",
                            borderRadius: "4px",
                            padding: "12px",
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "1.2em",
                            transition: "background 0.2s"
                        }}
                    >
                        {letter}
                    </div>
                ))}
            </div>
        );
    }

    const generateRandomGram = (grams: string[]) => {
        if (grams.length === 0) return "?";
        const randomIndex = Math.floor(Math.random() * grams.length);
        setCurrentGram(grams[randomIndex]);
    }

    const pointsView = () => {
        return (
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "16px 0"
            }}>
                <div style={{
                    fontWeight: "bold",
                    fontSize: "1.2em"
                }}>
                    Points: {points}
                </div>
            </div>
        );
    }

    const lastWordView = () => {
        if (!lastWord) return null;
        return (
            <div style={{
                margin: "16px 0",
                padding: "12px",
                borderRadius: "6px",
                background: "#333",
                color: "#fff",
                textAlign: "center"
            }}>
                <div>
                    <strong>Last valid word:</strong> {lastWord.word}
                </div>
                <div style={{ marginTop: "8px" }}>
                    {lastWord.languages.join(", ")}
                </div>
            </div>
        );
    }

    const skipGram = () => {
        return (
            <button
                onClick={() => generateRandomGram(availableGrams)}
                style={{
                    padding: "8px 16px",
                    background: "#f44336",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "1em"
                }}
            >
                Skip Gram
            </button>
        );
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            width: "100vw",
        }}>
            <div style={{
                padding: "20px",
                maxWidth: "80%",
                width: "800px",
            }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "-50px" }}>
                    <div>
                        {pointsView()}
                        {lastWordView()}
                    </div>
                    <div>
                        {languageSelector()}
                        {skipGram()}
                    </div>

                </div>
                {gramView()}
                {typeSpace()}
                {availableLetters()}
            </div>
        </div>
    );
};

export default BombParty;
export type { BombPartyProps };