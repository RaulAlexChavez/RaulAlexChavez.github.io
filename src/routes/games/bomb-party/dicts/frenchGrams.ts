import { words_french } from "./french";
import { words_french_normalized } from "./french-normalized"

const bigrams: string[] = ["DE", "LE", "RE", "EN", "NT", "ER", "ON", "ES", "ET", "AN", "TE", "IL", "SE", "NE", "OU", "AI", "IN", "ME", "TI", "LA", "CE", "ST", "QU", "EL", "UR", "AR", "CH", "CO", "OR", "LI", "UN", "SA", "RA", "RI", "AU", "AL", "EU", "IS", "TO", "NO", "ND", "VE", "NA", "TR", "MA", "RO", "SO", "IT", "DI", "LL", "EM", "EI", "AS", "PA", "DA", "ED", "MO", "CI", "TU", "EA", "LO", "IO", "AM", "BO", "AT", "BA", "FO", "LE", "TA", "PR", "US", "VA", "VI", "OS", "HE", "PE", "PO", "GE", "DO", "GU", "GA", "FA", "VO", "GO", "BE", "SI", "FI", "CA", "BU", "FE", "MI", "JE", "AB", "BL", "BR", "CR", "DR", "FR", "GR", "PL", "TR"];

const trigrams: string[] = ["ENT", "TIO", "DES", "LES", "CON", "TER", "UNE", "QUE", "ION", "ANT", "EUR", "OUR", "ESE", "OUS", "LLE", "NTE", "MEN", "QUI", "EUR", "ERS", "IEN", "RES", "AIT", "EST", "POR", "TRE", "AIS", "PRE", "AIN", "REP", "ENG", "ESS", "AUT", "TOU", "VER", "TIE", "MET", "OUV", "MON", "PAR", "SUR", "ERO", "MIS", "GRA", "MAI", "SER", "RAI", "INT", "TRA", "COM", "VOU", "EXP", "ACE", "ORT", "REG", "VEL", "VEU", "VEI", "ROU", "ECO", "GUI", "ISE", "ICE", "ITE", "ROI", "SOI", "TOI", "LOI", "CHA", "CHE", "CHI", "CHO", "CHU", "ART", "ESC", "SOC", "SOL", "CAR", "COR", "COU", "DER", "JOU", "PLA", "PLU", "PRO", "TEM", "TEN", "HAB", "HOM", "SAV", "TAB", "VAL", "VEN", "VIT", "LOR", "FER"];

const alphabetLetters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"];

const alphabet: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const letterValues: Record<number, string[]> = {
	1: ["e", "a", "i", "s", "n", "r", "t", "o", "l", "u"],  // Más comunes en francés
	2: ["d", "c", "p", "m"],                                 // Comunes
	3: ["v", "g", "f", "b", "h"],                           // Moderadamente comunes
	4: ["j", "q", "z"],                                     // Menos comunes
	5: ["à", "é", "è", "ç", "ù", "â", "ê", "î", "ô", "û", "ë", "ï", "ü", "ÿ"], // Acentos franceses
	8: ["k", "w", "x"],                                     // Raras en francés
	10: ["y"]                                               // Muy rara
}

// Diccionario para convertir letras acentuadas a letras normales
const accentMap: Record<string, string> = {
	"à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a",
	"è": "e", "é": "e", "ê": "e", "ë": "e",
	"ì": "i", "í": "i", "î": "i", "ï": "i",
	"ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o",
	"ù": "u", "ú": "u", "û": "u", "ü": "u",
	"ç": "c", "ñ": "n",
	"ÿ": "y",
	"æ": "ae", "œ": "oe"
}

export const frenchGrams = {
	bigrams,
	trigrams,
	letterValues,
	accentMap,
	words: words_french,
	words_normalized: words_french_normalized
};
