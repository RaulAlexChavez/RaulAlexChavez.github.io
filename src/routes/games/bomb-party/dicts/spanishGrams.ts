import { words_spanish } from "./spanish";
import { words_spanish_normalized } from "./spanish-normalized";

const bigrams: string[] = ["DE", "LA", "EL", "EN", "ES", "UN", "DA", "TE", "RE", "LE", "SE", "AN", "ME", "AL", "NE", "ON", "DO", "TA", "AR", "ER", "NT", "OS", "CO", "AS", "TO", "LO", "PA", "NA", "TI", "CA", "RA", "CI", "MA", "OR", "QU", "NO", "IO", "SA", "LI", "SO", "RI", "RO", "PE", "ST", "MI", "ND", "IL", "AD", "MO", "IC", "LO", "PO", "NI", "AB", "TR", "LL", "HA", "AC", "UE", "DI", "SU", "PR", "VA", "CH", "IE", "SI", "TU", "IM", "VI", "GU", "OI", "CE", "IT", "TH", "FI", "IN", "BA", "RR", "BR", "SC", "PL", "SP", "CT", "HE", "UR", "RS", "OL", "UP", "UT", "OM", "UN", "US", "IR", "IS", "ET", "FE", "LE", "OD", "UL", "CR", "LU", "GR", "CL", "DR", "FR", "FL", "BL"];

const trigrams: string[] = ["QUE", "ENT", "EST", "DEL", "CON", "ADE", "PAR", "POR", "COM", "IÓN", "CIÓ", "ERA", "TER", "RES", "DOS", "MEN", "IEN", "STO", "LOS", "LAS", "UNA", "TAR", "HER", "PER", "ING", "HAB", "TEN", "SER", "VER", "TRA", "PRO", "SUS", "MOV", "TIC", "INO", "MOS", "CHA", "ERO", "IDA", "IMA", "TOR", "REP", "MAN", "GEN", "IVA", "ESE", "EME", "ARS", "ESP", "CAS", "MIE", "ORO", "ESA", "INE", "OSO", "ABA", "ESO", "ARO", "AMO", "ALA", "UER", "USO", "RON", "SAN", "REG", "RAM", "GAR", "HOR", "GUA", "URO", "TUD", "ADO", "MOD", "REL", "CUE", "RAN", "ENE", "MAR", "REA", "TEL", "TED", "SOB", "SOL", "GAN", "CAN", "MIS", "TAS", "TOS", "CAR", "COR", "DOR", "FOR", "GOR", "HAS", "VOS", "MER", "SER", "NAD", "BAJ", "BAR", "SAB", "VAL", "VIA", "SIM", "SIN", "CER", "PER"];

const alphabetLetters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v"];

const alphabet: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const letterValues: Record<number, string[]> = {
	1: ["a", "e", "o", "s", "r", "n", "i", "l", "t", "d"],  // Más comunes
	2: ["u", "c", "m"],                                      // Comunes
	3: ["p", "b", "h", "g", "f", "y"],                     // Moderadamente comunes
	4: ["v", "ñ", "j"],                                     // Menos comunes
	5: ["z", "ó", "í", "á", "é", "ú"],                     // Acentos y z
	8: ["k", "w"],                                          // Raras en español
	10: ["x", "q"]                                          // Muy raras
}

// Diccionario para convertir letras acentuadas a letras normales
const accentMap: Record<string, string> = {
	"á": "a", "à": "a", "ä": "a", "â": "a",
	"é": "e", "è": "e", "ë": "e", "ê": "e",
	"í": "i", "ì": "i", "ï": "i", "î": "i",
	"ó": "o", "ò": "o", "ö": "o", "ô": "o",
	"ú": "u", "ù": "u", "ü": "u", "û": "u",
	"ñ": "n"
}

export const spanishGrams = {
	bigrams,
	trigrams,
	letterValues,
	accentMap,
	words: words_spanish,
	words_normalized: words_spanish_normalized
};
