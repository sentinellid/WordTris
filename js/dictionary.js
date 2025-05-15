// Sistema di gestione dizionario
const DictionarySystem = {
    // Lingua corrente
    currentLanguage: 'ita',
    
    // Dati del dizionario per lingua
    dictionaries: {
        ita: {
            words: new Set(),           // Parole complete
            syllabified: new Map(),     // Mappatura parola -> sillabe
            syllables: new Set(),       // Tutte le sillabe
            syllableStats: new Map(),   // Statistiche sillabe (frequenza)
            syllableByLength: {         // Sillabe organizzate per lunghezza
                1: [],
                2: [],
                3: []
            }
        },
        eng: {
            words: new Set(),
            syllabified: new Map(),
            syllables: new Set(),
            syllableStats: new Map(),
            syllableByLength: {
                1: [],
                2: [],
                3: []
            }
        }
    },
    
    // Carica il dizionario per la lingua specificata
    async loadDictionary(language) {
        try {
            // Inizializza la struttura se non esiste
            if (!this.dictionaries[language]) {
                this.dictionaries[language] = {
                    words: new Set(),
                    syllabified: new Map(),
                    syllables: new Set(),
                    syllableStats: new Map(),
                    syllableByLength: {
                        1: [],
                        2: [],
                        3: []
                    }
                };
            }
            
            // Riferimenti più brevi
            const dict = this.dictionaries[language];
            
            // Resetta le strutture dati
            dict.words.clear();
            dict.syllabified.clear();
            dict.syllables.clear();
            dict.syllableStats.clear();
            dict.syllableByLength = { 1: [], 2: [], 3: [] };
            
            // Carica il dizionario sillabato
            const response = await fetch(`data/dictionary_${language}.txt`);
            
            // Se non trova il dizionario sillabato, prova con quello normale
            if (!response.ok) {
                return await this.loadLegacyDictionary(language);
            }
            
            const text = await response.text();
            const lines = text.trim().split(/\r?\n/);
            
            // Processa ogni riga nel formato "parola [sil-sil-sil]"
            for (const line of lines) {
                const match = line.match(/^([^\s]+)\s+\[([^\]]+)\]$/);
                
                if (match) {
                    const word = match[1].toUpperCase();
                    const syllablesStr = match[2];
                    const syllables = syllablesStr.split('-').map(s => s.trim().toUpperCase());
                    
                    // Aggiungi al set di parole
                    dict.words.add(word);
                    
                    // Salva la sillabazione
                    dict.syllabified.set(word, syllables);
                    
                    // Aggiorna statistiche sillabe
                    syllables.forEach(syl => {
                        // Aggiungi al set di sillabe
                        dict.syllables.add(syl);
                        
                        // Incrementa frequenza
                        dict.syllableStats.set(syl, (dict.syllableStats.get(syl) || 0) + 1);
                        
                        // Aggiungi alla lista corrispondente alla lunghezza
                        const len = syl.length;
                        if (len >= 1&&len <= 3&&!dict.syllableByLength[len].includes(syl)) {
                            dict.syllableByLength[len].push(syl);
                        }
                    });
                }
            }
            
            // Aggiorna le liste globali di sillabe (solo per la lingua corrente)
            if (language === this.currentLanguage) {
                this.updateGlobalSyllableLists();
            }
            
            console.log(`Dizionario sillabato ${language} caricato: ${dict.words.size} parole, ${dict.syllables.size} sillabe uniche`);
            return true;
            
        } catch (error) {
            console.error(`Errore caricamento dizionario ${language}:`, error);
            return false;
        }
    },
    
    // Carica il dizionario in formato legacy (solo elenco di parole)
    async loadLegacyDictionary(language) {
        try {
            const dict = this.dictionaries[language];
            
            // Carica il dizionario normale
            const filename = language === 'ita' ? 'dizionario.txt' : `dictionary_${language}.txt`;
            const response = await fetch(`data/${filename}`);
            
            if (!response.ok) {
                throw new Error(`Dizionario non trovato: ${filename}`);
            }
            
            const text = await response.text();
            const words = text.trim().split(/\r?\n/);
            
            for (const word of words) {
                const cleanWord = word.trim().toUpperCase();
                if (cleanWord) {
                    dict.words.add(cleanWord);
                }
            }
            
            // In questo caso non abbiamo informazioni sulle sillabe
            console.log(`Dizionario standard ${language} caricato: ${dict.words.size} parole, 0 sillabe`);
            return true;
            
        } catch (error) {
            console.error(`Errore caricamento dizionario legacy ${language}:`, error);
            return false;
        }
    },
    
    // Cambia la lingua corrente e carica il relativo dizionario
    async changeLanguage(language) {
        if (language === this.currentLanguage) return true;
        
        const success = await this.loadDictionary(language);
        if (success) {
            this.currentLanguage = language;
            this.updateGlobalSyllableLists();
            return true;
        }
        return false;
    },
    
    // Verifica se una parola è valida
    isValidWord(word) {
        const dict = this.dictionaries[this.currentLanguage];
        return dict.words.has(word.toUpperCase());
    },
    
    // Ottieni la lista delle sillabe per una parola
    getSyllables(word) {
        const dict = this.dictionaries[this.currentLanguage];
        return dict.syllabified.get(word.toUpperCase()) || null;
    },
    
    // Aggiorna le liste globali con le sillabe della lingua corrente
    updateGlobalSyllableLists() {
        // Ignora completamente le sillabe generate dal dizionario
        // e usa invece liste predefinite e verificate di sillabe italiane
        
        SYLS_1_LETTER = ["A", "E", "I", "O", "U"];
        
        SYLS_2_LETTERS = [
                            "RA",
                            "RE",
                            "RI",
                            "CO",
                            "CA",
                            "TA",
                            "TO",
                            "TE",
                            "TI",
                            "MA",
                            "ME",
                            "MI",
                            "NO",
                            "NE",
                            "LA"
                            ];
                                    
        SYLS_3_LETTERS = [
                            "PRE",
                            "PRO",
                            "TRA",
                            "CON",
                            "PER",
                            "MEN",
                            "TRO",
                            "TER",
                            "PAR",
                            "COR",
                            "CAR",
                            "POR",
                            "STA",
                            "FOR",
                            "CEN"
                        ];
        
        console.log("Liste globali sillabe aggiornate con sillabe autentiche italiane");
    },
    
    // Ottieni le sillabe più comuni
    getMostCommonSyllables(count = 20) {
        const dict = this.dictionaries[this.currentLanguage];
        
        // Ordina le sillabe per frequenza (decrescente)
        const sortedEntries = [...dict.syllableStats.entries()]
            .sort((a, b) => b[1] - a[1]);
        
        // Ritorna le prime 'count' sillabe
        return sortedEntries.slice(0, count).map(entry => entry[0]);
    },
    
    // Ottieni statistiche per debugging
    getStats() {
        const dict = this.dictionaries[this.currentLanguage];
        return {
            language: this.currentLanguage,
            totalWords: dict.words.size,
            totalSyllables: dict.syllables.size,
            syllablesByLength: {
                1: dict.syllableByLength[1].length,
                2: dict.syllableByLength[2].length,
                3: dict.syllableByLength[3].length
            },
            mostCommonSyllables: this.getMostCommonSyllables(10)
        };
    }
};