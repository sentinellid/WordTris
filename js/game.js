const LEVEL_CONFIG = [
    { 
        level: 1, 
        rows: 10,                   // Parte con 14 righe
        columns: 8,                 // E 8 colonne
        startDropInterval: 1000,    // VelocitÃ  di caduta iniziale
        scoreToComplete: 5000,      // Punti per completare
        syls1LetterProb: 0.05,      // ProbabilitÃ  sillabe da 1 lettera (vocali)
        syls3LetterProb: 0.15,      // ProbabilitÃ  sillabe da 3 lettere
        vowelJokerProb: 0.20,       // ProbabilitÃ  jolly vocale
        consonantJokerProb: 0.10,    // ProbabilitÃ  jolly consonante
        // NUOVA AGGIUNTA: Tema del livello
        music: "audio/music1.mp3",
        background: "img/background1.jpg"
    },
    { 
        level: 2, 
        rows: 10, 
        columns: 8, 
        startDropInterval: 900, 
        scoreToComplete: 7000,
        syls1LetterProb: 0.15,
        syls3LetterProb: 0.18,
        vowelJokerProb: 0.25,
        consonantJokerProb: 0.15,
        // NUOVA AGGIUNTA: Tema del livello
        music: "audio/music2.mp3",
        background: "img/background2.jpg"
    },
    { 
        level: 3, 
        rows: 10, 
        columns: 8, 
        startDropInterval: 800, 
        scoreToComplete: 10000,
        syls1LetterProb: 0.15,
        syls3LetterProb: 0.20,
        vowelJokerProb: 0.25,
        consonantJokerProb: 0.15,
        // NUOVA AGGIUNTA: Tema del livello
        music: "audio/music3.mp3",
        background: "img/background3.jpg"
    },
    { 
        level: 4, 
        rows: 10, 
        columns: 8, 
        startDropInterval: 750, 
        scoreToComplete: 12000,
        syls1LetterProb: 0.15,
        syls3LetterProb: 0.20,
        vowelJokerProb: 0.30,
        consonantJokerProb: 0.20,
        // NUOVA AGGIUNTA: Tema del livello
        music: "audio/music4.mp3",
        background: "img/background4.jpg"
    },
    { 
        level: 5, 
        rows: 10, 
        columns: 8, 
        startDropInterval: 700, 
        scoreToComplete: 15000,
        syls1LetterProb: 0.15,
        syls3LetterProb: 0.25,
        vowelJokerProb: 0.30,
        consonantJokerProb: 0.20,
        // NUOVA AGGIUNTA: Tema del livello
        music: "audio/music5.mp3",
        background: "img/background5.jpg"
    },
    { 
        level: 6, 
        rows: 10, 
        columns: 8, 
        startDropInterval: 650, 
        scoreToComplete: 20000,
        syls1LetterProb: 0.15,
        syls3LetterProb: 0.25,
        vowelJokerProb: 0.35,
        consonantJokerProb: 0.25,
        // NUOVA AGGIUNTA: Tema del livello
        music: "audio/music6.mp3",
        background: "img/background6.jpg"
    },
    { 
        level: 7, 
        rows: 10, 
        columns: 8, 
        startDropInterval: 600, 
        scoreToComplete: 28000,
        syls1LetterProb: 0.15,
        syls3LetterProb: 0.30,
        vowelJokerProb: 0.35,
        consonantJokerProb: 0.25,
        // NUOVA AGGIUNTA: Tema del livello
        music: "audio/music7.mp3",
        background: "img/background7.jpg"
    },
    { 
        level: 8, 
        rows: 10, 
        columns: 8, 
        startDropInterval: 550, 
        scoreToComplete: 30000,
        syls1LetterProb: 0.15,
        syls3LetterProb: 0.30,
        vowelJokerProb: 0.35,
        consonantJokerProb: 0.25,
        // NUOVA AGGIUNTA: Tema del livello
        music: "audio/music8.mp3",
        background: "img/background8.jpg"
    },
    { 
        level: 9, 
        rows: 10, 
        columns: 8, 
        startDropInterval: 500, 
        scoreToComplete: 35000,
        syls1LetterProb: 0.15,
        syls3LetterProb: 0.35,
        vowelJokerProb: 0.40,
        consonantJokerProb: 0.30,
        // NUOVA AGGIUNTA: Tema del livello
        music: "audio/music9.mp3",
        background: "img/background9.jpg"
    },
    { 
        level: 10, 
        rows: 10, 
        columns: 8, 
        startDropInterval: 450, 
        scoreToComplete: 40000,
        syls1LetterProb: 0.15,
        syls3LetterProb: 0.35,
        vowelJokerProb: 0.40,
        consonantJokerProb: 0.30,
        // NUOVA AGGIUNTA: Tema del livello
        music: "audio/music10.mp3",
        background: "img/background10.jpg"
    }
    // Puoi aggiungere piÃ¹ livelli se necessario
];

// Variabili iniziali (saranno aggiornate in base al livello)
let ROWS = LEVEL_CONFIG[0].rows;
let COLS = LEVEL_CONFIG[0].columns;
let START_DROP = LEVEL_CONFIG[0].startDropInterval;
const VOWEL_TIMEOUT = 3000;
const ANIMATION_CLEAR_DURATION = 500;

// --- Dati di gioco ---
const VOWELS = ["A", "E", "I", "O", "U"];
const CONSONANTS = ["B", "C", "D", "F", "G", "H", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "Z"];
let SYLS_1_LETTER = ["A", "E", "I", "O", "U"]; 
let SYLS_2_LETTERS = []; 
let SYLS_3_LETTERS = []; 

// Queste variabili verranno impostate dal livello corrente
let PROB_ONE_LETTER_SYL = LEVEL_CONFIG[0].syls1LetterProb; 
let PROB_THREE_LETTER_SYL = LEVEL_CONFIG[0].syls3LetterProb;
let VOWEL_CHOICE_PROBABILITY = LEVEL_CONFIG[0].vowelJokerProb;
let CONSONANT_CHOICE_PROBABILITY = LEVEL_CONFIG[0].consonantJokerProb;

// Numero di consonanti da mostrare alla volta per la selezione
const NUM_CONSONANT_CHOICES = 5;

const DICT = new Set();
let dizionarioPronto = false;
let gameElement = document.getElementById("game");

// MODIFICATO: Funzione di utilitÃ  per selezionare celle dinamicamente
let $ = function(q) { 
    return document.querySelectorAll("#game .cell")[q];
};

const idx = (x, y) => (y * COLS + x);

let board, cur, gameLoopTimer, choiceTimerId, score = 0, words = 0, pieces = 0, gameIsOver = false, isChoiceActive = false;
let isVowelChoice = false; // true per vocali, false per consonanti
let choiceCellInfo = null;
let isAnimatingClear = false; 
let pendingBoardUpdateAfterAnimation = false;
let isNextPieceBomb = false; 
let bombPower = 0;      
let currentDropInterval = START_DROP; 
let chainCount = 0;     
let currentChainMultiplier = 1.0;  
let isHurryUpPlaying = false;  
let timerInterval = null;

// Variabili per i livelli
let currentLevel = 1;
let levelStartScore = 0;
let scoreToCompleteLevel = LEVEL_CONFIG[0].scoreToComplete;

// Variabile per gestire la pausa
let gamePaused = false;

// Le consonanti attualmente disponibili per la scelta
let availableConsonants = [];

// Riferimenti UI - AGGIORNATI per i nuovi modal
const ui = { 
    s: document.getElementById("score"), 
    w: document.getElementById("words"), 
    p: document.getElementById("pieces"), 
    lastWordVal: document.getElementById("last-word-val"),
    
    // Modali
    vowelModal: document.getElementById("vowel-modal"),
    consonantModal: document.getElementById("consonant-modal"),
    vowelTimer: document.getElementById("vowel-timer"),
    consonantTimer: document.getElementById("consonant-timer"),
    consonantButtons: document.getElementById("consonant-buttons"),
    
    // Riferimenti per la pausa
    pauseButton: document.getElementById("pause-button"),
    pauseOverlay: document.getElementById("pause-overlay"),
    resumeButton: document.getElementById("resume-button"),
    restartButton: document.getElementById("restart-button"),
    
    // Riferimenti per il livello
    levelIndicator: document.getElementById("level-indicator"),
    levelVal: document.getElementById("level"),
    levelProgressBar: document.getElementById("level-progress-bar"),
    
    // Riferimenti per overlay completamento livello
    levelCompleteOverlay: document.getElementById("level-complete-overlay"),
    currentLevelComplete: document.getElementById("current-level-complete"),
    levelScore: document.getElementById("level-score"),
    levelWords: document.getElementById("level-words"),
    nextLevelButton: document.getElementById("next-level-button"),
    
    // Riferimenti per la selezione della lingua
    gameDescription: document.getElementById("game-description"),
    startButton: document.getElementById("start-game-button")
};

// MODIFICA 1: Aggiunta funzione per ripristinare il focus sulla griglia
function restoreGameFocus() {
    // Rimuove il focus da qualsiasi elemento attivo
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
    }
    
    // Focalizza sulla griglia di gioco
    const gameElement = document.getElementById('game');
    if (gameElement) {
        // Rende la griglia focusable se non lo è già
        if (!gameElement.hasAttribute('tabindex')) {
            gameElement.setAttribute('tabindex', '0');
        }
        gameElement.focus();
    }
}

// NUOVA AGGIUNTA: Funzione per cambiare musica e sfondo del livello
function applyLevelTheme(levelConfig) {
    // Cambia la musica di sottofondo
    const backgroundMusic = document.getElementById('background-music');
    if (backgroundMusic && backgroundMusic.src !== levelConfig.music) {
        backgroundMusic.src = levelConfig.music;
        backgroundMusic.load();
        backgroundMusic.play().catch(error => console.log("La riproduzione automatica è stata bloccata dal browser.", error));
    }

    // Cambia l'immagine di sfondo del body
    document.body.style.backgroundImage = `url('${levelConfig.background}')`;
}


function randSyl() {
    const rand = Math.random();
    
    if (rand < PROB_ONE_LETTER_SYL) {
        return SYLS_1_LETTER[Math.floor(Math.random() * SYLS_1_LETTER.length)];
    }
    else if (rand < PROB_ONE_LETTER_SYL + PROB_THREE_LETTER_SYL) {
        if (SYLS_3_LETTERS.length > 0) {
            return SYLS_3_LETTERS[Math.floor(Math.random() * SYLS_3_LETTERS.length)];
        }
    }
    
    if (SYLS_2_LETTERS.length > 0) {
        return SYLS_2_LETTERS[Math.floor(Math.random() * SYLS_2_LETTERS.length)];
    } else if (SYLS_3_LETTERS.length > 0) { 
        return SYLS_3_LETTERS[Math.floor(Math.random() * SYLS_3_LETTERS.length)];
    } else if (SYLS_1_LETTER.length > 0) {
        return SYLS_1_LETTER[Math.floor(Math.random() * SYLS_1_LETTER.length)];
    } else {
        console.error("ERRORE: Tutte le liste di sillabe sono vuote!");
        return "??"; 
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function selectRandomConsonants() {
    // Crea una copia delle consonanti e mischiala
    const shuffledConsonants = shuffleArray([...CONSONANTS]);
    
    // Scegli le prime NUM_CONSONANT_CHOICES consonanti
    return shuffledConsonants.slice(0, NUM_CONSONANT_CHOICES);
}

function setupConsonantSelection() {
    // Seleziona le consonanti casuali
    availableConsonants = selectRandomConsonants();
    
    // Ottieni il container per i pulsanti delle consonanti
    const buttonsContainer = ui.consonantButtons;
    
    // Rimuovi tutti i pulsanti esistenti
    while (buttonsContainer.firstChild) {
        buttonsContainer.removeChild(buttonsContainer.firstChild);
    }
    
    // Crea i nuovi pulsanti con le consonanti selezionate
    availableConsonants.forEach(consonant => {
        const button = document.createElement('button');
        button.className = 'selection-button consonant-button';
        button.setAttribute('data-consonant', consonant);
        button.textContent = consonant;
        button.addEventListener('click', e => {
            if (isChoiceActive&&!isVowelChoice) {
                resolveChoice(e.target.getAttribute('data-consonant'));
            }
        });
        buttonsContainer.appendChild(button);
    });
}

// Aggiungi event listener ai pulsanti delle vocali
document.querySelectorAll('.vowel-button').forEach(button => {
    button.addEventListener('click', e => {
        if (isChoiceActive&&isVowelChoice) {
            resolveChoice(e.target.getAttribute('data-vowel'));
        }
    });
});

function newPiece() {
    if (isNextPieceBomb) {
        isNextPieceBomb = false; 
        pieces++; ui.p.textContent = pieces;
        // CORREZIONE: Usa l'emoji corretta della bomba
        return { x: COLS >> 1, y: -1, h: 1, txt: ["💣"], isBomb: true, power: bombPower };
    }
    const r = Math.random(), h_normal = r < .3 ? 1 : r < .75 ? 2 : 3; 
    const txt = [];
    while(txt.length < h_normal) { 
        const s = randSyl(); 
        if (!txt.includes(s)) txt.push(s); 
    }
    pieces++; ui.p.textContent = pieces;
    
    if (txt.length > 0) {
        const sylIndexToMakeJoker = txt.length - 1; 
        const originalSyl = txt[sylIndexToMakeJoker];
        
        if (/[AEIOU]$/.test(originalSyl)&&originalSyl.length > 1&&Math.random() < VOWEL_CHOICE_PROBABILITY) { 
            txt[sylIndexToMakeJoker] = originalSyl.slice(0, -1) + "*";
        }
        else if (VOWELS.includes(originalSyl)&&Math.random() < CONSONANT_CHOICE_PROBABILITY) {
            txt[sylIndexToMakeJoker] = "*" + originalSyl;
        }
    }
    
    return { x: COLS >> 1, y: -h_normal, h: txt.length, txt, isBomb: false };
}

function canMove(p, dx, dy) {
    if (!p || isAnimatingClear) return false;
    for (let i = 0; i < p.h; i++) {
        const nx = p.x + dx, ny = p.y + i + dy;
        if (nx < 0 || nx >= COLS || ny >= ROWS || (ny >= 0&&board[ny][nx]&&board[ny][nx] !== 'CLEARING_PLACEHOLDER')) return false;
    }
    return true;
}

function lockCurrentPiece() { 
    if (!dizionarioPronto || isAnimatingClear) return;
    clearInterval(gameLoopTimer); 

    if (typeof playSound === 'function') {
        playSound('drop');
    }

    if (cur && cur.isBomb) {
        console.log("Locking bomb piece at position:", cur.x, cur.y);
        
        // Trova la riga dove atterrerà effettivamente la bomba
        let landingRow = cur.y;
        
        // La bomba ha altezza 1, quindi atterrerà a cur.y
        // Ma dobbiamo verificare che non sia sotto il livello del terreno
        if (landingRow < 0) landingRow = 0;
        if (landingRow >= ROWS) landingRow = ROWS - 1;
        
        cur.power = 1;
        
        console.log("Bomb will detonate at row:", landingRow, "with power:", cur.power);
        
        detonateBomb(landingRow, cur.power, cur.x); 
        cur = null;
        
        // Dopo la detonazione, continua con il processing normale
        setTimeout(() => {
            if (!gameIsOver) {
                processBoardAfterLock(); 
            }
        }, 100);
        return; 
    }

    // Resto del codice per pezzi normali...
    let needsVowelChoice = false;
    let needsConsonantChoice = false;
    choiceCellInfo = null;
    
    if (cur) {
        for (let i = 0; i < cur.h; i++) {
            const r_lock = cur.y + i, c_lock = cur.x;
            if (r_lock < 0) { draw(); handleGameOver(); return; }
            board[r_lock][c_lock] = cur.txt[i];
        }
        
        for (let i = 0; i < cur.h; i++) {
            const r_check = cur.y + i, c_check = cur.x;
            if (r_check >= 0) {
                const cellContent = cur.txt[i];
                
                if (cellContent.endsWith("*")) {
                    needsVowelChoice = true;
                    isVowelChoice = true;
                    choiceCellInfo = { r: r_check, c: c_check, prefix: cellContent.slice(0, -1) };
                    break;
                }
                else if (cellContent.startsWith("*")&&cellContent.length > 1) {
                    needsConsonantChoice = true;
                    isVowelChoice = false;
                    choiceCellInfo = { r: r_check, c: c_check, suffix: cellContent.slice(1) };
                    
                    setupConsonantSelection();
                    break;
                }
            }
        }
    }
    
    cur = null; 
    draw(); 
    
    if (needsVowelChoice || needsConsonantChoice) {
        if (typeof AudioSystem !== 'undefined' && AudioSystem.playHurryUp) {
            AudioSystem.playHurryUp();
        }
        isHurryUpPlaying = true;
        
        isChoiceActive = true;
        
        if (needsVowelChoice) {
            ui.vowelModal.style.display = "block";
            startTimer(true);
            document.addEventListener('keydown', handleVowelKeyboardChoice);
        } else {
            ui.consonantModal.style.display = "block";
            startTimer(false);
            document.addEventListener('keydown', handleConsonantKeyboardChoice);
        }
        
        clearTimeout(choiceTimerId);
        choiceTimerId = setTimeout(() => resolveChoice(null), VOWEL_TIMEOUT);
    } else {
        processBoardAfterLock();
    }
}

function startTimer(isVowel) {
    const timer = isVowel ? ui.vowelTimer : ui.consonantTimer;
    
    timer.style.width = "100%";
    timer.style.transition = `width ${VOWEL_TIMEOUT/1000}s linear`;
    
    void timer.offsetWidth; // Forza reflow
    
    timer.style.width = "0%";
}

function stopTimers() {
    // Nascondi entrambi i modali
    ui.vowelModal.style.display = "none";
    ui.consonantModal.style.display = "none";
    
    // Resetta i timer
    ui.vowelTimer.style.transition = "none";
    ui.vowelTimer.style.width = "100%";
    
    ui.consonantTimer.style.transition = "none";
    ui.consonantTimer.style.width = "100%";
}

function detonateBomb(bombHitRow, numRowsToClear, bombCol) {
    console.log(`Bomb detonating at row ${bombHitRow}, column ${bombCol}, power ${numRowsToClear}`);
    
    if (numRowsToClear <= 0) return;
    
    // Riproduci il suono della bomba
    if (typeof AudioSystem !== 'undefined' && AudioSystem.playBomb) {
        AudioSystem.playBomb();
    }
    
    let actualRowsCleared = 0;
    let totalCellsCleared = 0;
    
    // Pulisci le righe partendo da quella dove è atterrata la bomba
    for (let i = 0; i < numRowsToClear; i++) {
        const rowToClear = bombHitRow - i; 
        if (rowToClear >= 0 && rowToClear < ROWS) {
            // Conta le celle piene prima di pulirle
            let cellsInThisRow = 0;
            for (let c = 0; c < COLS; c++) {
                if (board[rowToClear][c] && board[rowToClear][c] !== 'CLEARING_PLACEHOLDER') {
                    cellsInThisRow++;
                }
                board[rowToClear][c] = null; 
            }
            totalCellsCleared += cellsInThisRow;
            actualRowsCleared++; 
            
            // Punteggio progressivo per ogni riga (la prima riga dà più punti)
            const rowScore = 50 * (numRowsToClear - i + 1);
            score += rowScore;
            
            console.log(`Cleared row ${rowToClear}: ${cellsInThisRow} cells, ${rowScore} points`);
        } else {
            break; 
        }
    }
    
    // Bonus per il numero totale di celle distrutte
    const bonusScore = totalCellsCleared * 10;
    score += bonusScore;
    
    console.log(`Bomb cleared ${actualRowsCleared} rows, ${totalCellsCleared} cells, total points: ${50 * actualRowsCleared + bonusScore}`);
    
    // Aggiorna l'UI
    updateScore();
    
    // Messaggio di feedback
    ui.lastWordVal.innerHTML = `<span style="color:orange;font-weight:bold;">💥 ESPLOSIONE! ${actualRowsCleared} righe distrutte!</span>`;
}

function handleVowelKeyboardChoice(e) {
    if (!isChoiceActive || !isVowelChoice) return;
    const keyPressed = e.key.toUpperCase();
    if (VOWELS.includes(keyPressed)) {
        e.preventDefault();
        resolveChoice(keyPressed);
    }
}

function handleConsonantKeyboardChoice(e) {
    if (!isChoiceActive || isVowelChoice) return;
    const keyPressed = e.key.toUpperCase();
    if (availableConsonants.includes(keyPressed)) {
        e.preventDefault();
        resolveChoice(keyPressed);
    }
}

function resolveChoice(chosenLetter) {
    if (!isChoiceActive) return;
    clearTimeout(choiceTimerId);
    
    if (isVowelChoice) {
        document.removeEventListener('keydown', handleVowelKeyboardChoice);
    } else {
        document.removeEventListener('keydown', handleConsonantKeyboardChoice);
    }
    
    isChoiceActive = false;
    stopTimers();
    
    if (isHurryUpPlaying) {
        AudioSystem.stopHurryUp();
        isHurryUpPlaying = false;
    }
    
    if (!chosenLetter&&choiceCellInfo) {
        AudioSystem.playExplode();
        
        const { r, c } = choiceCellInfo;
        
        if (r >= 0&&r < ROWS&&c >= 0&&c < COLS&&board[r]&&board[r][c]) {
            const cellContent = board[r][c];
            const isJollyVowel = cellContent.endsWith("*");
            const isJollyConsonant = cellContent.startsWith("*");
            
            if (isJollyVowel || isJollyConsonant) {
                isAnimatingClear = true;
                
                const cellElement = $(idx(c, r));
                if (cellElement) {
                    cellElement.classList.add('clearing');
                    board[r][c] = 'CLEARING_PLACEHOLDER';
                    
                    const jollyType = isJollyVowel ? "VOCALE" : "CONSONANTE";
                    ui.lastWordVal.innerHTML = `<span style="color:#f55">JOLLY ${jollyType} DISINTEGRATO!</span>`;
                    
                    setTimeout(() => {
                        if (board[r]&&board[r][c] === 'CLEARING_PLACEHOLDER') board[r][c] = null;
                        if (cellElement) {
                            cellElement.classList.remove('clearing');
                            cellElement.textContent = "";
                            cellElement.className = "cell";
                        }
                        isAnimatingClear = false;
                        processBoardAfterLock();
                    }, ANIMATION_CLEAR_DURATION);
                }
            } else {
                processBoardAfterLock();
            }
        } else {
            processBoardAfterLock();
        }
    } else if (chosenLetter&&choiceCellInfo) {
        if (isVowelChoice) {
            const { r, c, prefix } = choiceCellInfo;
            if (r >= 0&&r < ROWS&&c >= 0&&c < COLS&&board[r]&&board[r][c] === prefix + "*") {
                board[r][c] = prefix + chosenLetter;
            }
        } else { // Consonant choice
            const { r, c, suffix } = choiceCellInfo;
            if (r >= 0&&r < ROWS&&c >= 0&&c < COLS&&board[r]&&board[r][c] === "*" + suffix) {
                board[r][c] = chosenLetter + suffix;
            }
        }
        
        choiceCellInfo = null;
        draw();
        processBoardAfterLock();
    } else {
        choiceCellInfo = null;
        draw();
        processBoardAfterLock();
    }
}

function processBoardAfterLock() {
    if (!dizionarioPronto || gameIsOver) return; 
    if (isAnimatingClear) return; 
    
    pendingBoardUpdateAfterAnimation = false;
    let iterations = 0; const MAX_ITERATIONS = ROWS * COLS; 
    let stabilityReached = false;
    let wordFoundThisOverallPBALCycle = false;

    while (iterations < MAX_ITERATIONS&&!stabilityReached&&!gameIsOver&&!isAnimatingClear) {
        iterations++;
        if (gameIsOver) break;
        collapse(); draw();
        if (isAnimatingClear) break; 

        let wordFoundThisScanPass = false; 
        if (scanAndClearHorizontalWords()) { wordFoundThisScanPass = true; wordFoundThisOverallPBALCycle = true; }
        if (isAnimatingClear || gameIsOver) break;

        if (scanAndClearVerticalWords()) { wordFoundThisScanPass = true; wordFoundThisOverallPBALCycle = true; }
        if (isAnimatingClear || gameIsOver) break;

        if (!wordFoundThisScanPass) stabilityReached = true; 
    } 
    
    if (!isAnimatingClear && !gameIsOver) {
        // Aggiorna l'UI e verifica avanzamento livello
        updateScore();
        
        // CORREZIONE: Se non c'è un pezzo corrente (per esempio dopo uno scambio), creane uno
        if (!cur) {
            cur = newPiece(); 
            
            if (cur.isBomb) { 
                currentDropInterval = Math.floor(START_DROP / 3);
            } else { 
                currentDropInterval = START_DROP;
            }
    
            if (!canMove(cur, 0, 0)) { 
                draw(); 
                handleGameOver(); 
                return; 
            }
        }
        
        draw();
        
        // CORREZIONE: Riprendi sempre il game loop se il gioco non è in pausa
        if (!gameIsOver && !gamePaused && !isChoiceActive) {
            clearInterval(gameLoopTimer); 
            gameLoopTimer = setInterval(gameStep, currentDropInterval); 
        }
    }
}

// Funzione per aggiornare punteggio e verificare avanzamento livello
function updateScore() {
    ui.s.textContent = score;
    ui.w.textContent = words;
    
    // Calcola il progresso del livello
    const levelProgress = Math.min(100, ((score - levelStartScore) / scoreToCompleteLevel) * 100);
    
    // Aggiorna la barra di progresso
    ui.levelProgressBar.style.width = `${levelProgress}%`;
    
    // Verifica se il livello Ã¨ stato completato
    if (score >= (levelStartScore + scoreToCompleteLevel)) {
        // Livello completato!
        handleLevelComplete();
    }
}

// Gestione del livello completato
function handleLevelComplete() {
    if (gameIsOver || isAnimatingClear) return;
    
    // Pausa il gioco
    gamePaused = true;
    clearInterval(gameLoopTimer);
    
    // Suono livello completato
    AudioSystem.playLevelUp();
    
    // Aggiorna l'UI dell'overlay
    ui.currentLevelComplete.textContent = currentLevel;
    ui.levelScore.textContent = score;
    ui.levelWords.textContent = words;
    
    // Mostra l'overlay
    ui.levelCompleteOverlay.style.display = "flex";
}

// Passa al livello successivo
function startNextLevel() {
    if (currentLevel >= LEVEL_CONFIG.length) {
        // Hai completato tutti i livelli!
        alert("Congratulazioni! Hai completato tutti i livelli del gioco!");
        loadDictionaryAndInitGame(); // Ricomincia dal livello 1
        return;
    }
    
    currentLevel++;
    const levelConfig = LEVEL_CONFIG[currentLevel - 1];
    
    // Nascondi l'overlay
    ui.levelCompleteOverlay.style.display = "none";
    
    // MODIFICATO: Applica musica e sfondo del nuovo livello
    applyLevelTheme(levelConfig);

    // Aggiorna le variabili del livello
    ROWS = levelConfig.rows;
    COLS = levelConfig.columns;
    START_DROP = levelConfig.startDropInterval;
    currentDropInterval = START_DROP;
    
    // Aggiorna le probabilitÃ 
    PROB_ONE_LETTER_SYL = levelConfig.syls1LetterProb;
    PROB_THREE_LETTER_SYL = levelConfig.syls3LetterProb;
    VOWEL_CHOICE_PROBABILITY = levelConfig.vowelJokerProb;
    CONSONANT_CHOICE_PROBABILITY = levelConfig.consonantJokerProb;
    
    // Salva il punteggio attuale come inizio del nuovo livello
    levelStartScore = score;
    scoreToCompleteLevel = levelConfig.scoreToComplete;
    
    // Aggiorna l'UI del livello
    ui.levelVal.textContent = currentLevel;
    ui.levelIndicator.textContent = `Livello ${currentLevel}`;
    ui.levelProgressBar.style.width = "0%";
    
    // Ricrea la griglia con le nuove dimensioni
    recreateGameGrid();
    
    // Ricrea il board con le nuove dimensioni
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    
    // Aggiorna la funzione di selezione celle in base alle nuove dimensioni
    $ = function(q) { 
        return document.querySelectorAll("#game .cell")[q];
    };
    
    // Ricrea un pezzo e riprendi il gioco
    cur = newPiece();
    draw();
    
    gamePaused = false;
    gameLoopTimer = setInterval(gameStep, currentDropInterval);
}
function clearCurrentPieceWithAnimation() {
    if (!cur) return Promise.resolve();
    
    return new Promise((resolve) => {
        // Ferma il game loop
        clearInterval(gameLoopTimer);
        
        // Applica l'effetto clearing alle celle del pezzo corrente
        const pieceCells = [];
        for (let i = 0; i < cur.h; i++) {
            const r_cur = cur.y + i;
            if (r_cur >= 0 && r_cur < ROWS) {
                const cellElement = $(idx(cur.x, r_cur));
                if (cellElement && (!board[r_cur] || !board[r_cur][cur.x] || board[r_cur][cur.x] === 'CLEARING_PLACEHOLDER')) {
                    cellElement.classList.add('clearing');
                    pieceCells.push({ element: cellElement, row: r_cur, col: cur.x });
                }
            }
        }
        
        // Riproduci suono di clearing
        if (typeof playSound === 'function') {
            playSound('word');
        }
        
        // Dopo l'animazione, rimuovi gli effetti e elimina il pezzo
        setTimeout(() => {
            pieceCells.forEach(cell => {
                cell.element.classList.remove('clearing');
                cell.element.textContent = '';
                cell.element.className = 'cell';
            });
            
            // Elimina il pezzo corrente
            cur = null;
            draw();
            resolve();
        }, ANIMATION_CLEAR_DURATION);
    });
}
function createNewPieceAfterPowerup() {
    if (gameIsOver || gamePaused) return;
    
    // Crea un nuovo pezzo
    cur = newPiece();
    
    // Verifica che possa essere posizionato
    if (!canMove(cur, 0, 0)) {
        draw();
        handleGameOver();
        return;
    }
    
    // Aggiorna l'intervallo di caduta
    if (cur.isBomb) {
        currentDropInterval = Math.floor(START_DROP / 3);
    } else {
        currentDropInterval = START_DROP;
    }
    
    draw();
    
    // Riprendi il game loop se non siamo in animazione
    if (!isAnimatingClear && !isChoiceActive) {
        clearInterval(gameLoopTimer);
        gameLoopTimer = setInterval(gameStep, currentDropInterval);
    }
}
// Funzione per ricreare la griglia di gioco
function recreateGameGrid() {
    // Svuota il contenitore
    gameElement.innerHTML = '';
    
    // Aggiorna lo stile CSS per le nuove dimensioni
    gameElement.style.gridTemplateColumns = `repeat(${COLS}, 38px)`;
    
    // Crea le nuove celle
    for (let i = 0; i < ROWS * COLS; i++) {
        const d = document.createElement("div");
        d.className = "cell";
        gameElement.appendChild(d);
    }
}
function scanAndClearHorizontalWords() {
    if (gameIsOver || isAnimatingClear) return false; let clearedAny = false;
    for (let r = 0; r < ROWS; r++) {
        let currentRun = [];
        for (let c = 0; c < COLS; c++) {
            const cellContent = board[r][c];
            // Modifica per escludere sia i jolly di vocale che quelli di consonante
            if (cellContent&&!cellContent.endsWith("*")&&!cellContent.startsWith("*")&&cellContent !== 'CLEARING_PLACEHOLDER') {
                currentRun.push({syl: cellContent, c: c });
            } else { 
                if (currentRun.length >= 2&&processRunForWords(currentRun, r, true)) clearedAny = true;
                currentRun = []; 
            }
            if (isAnimatingClear) break; 
        }
        if (isAnimatingClear) break;
        if (currentRun.length >= 2&&processRunForWords(currentRun, r, true)) clearedAny = true;
    }
    return clearedAny;
}

function scanAndClearVerticalWords() {
    if (gameIsOver || isAnimatingClear) return false; let clearedAny = false;
    for (let c = 0; c < COLS; c++) {
        let currentRun = [];
        for (let r = 0; r < ROWS; r++) {
            const cellContent = board[r][c];
            // Modifica per escludere sia i jolly di vocale che quelli di consonante
            if (cellContent&&!cellContent.endsWith("*")&&!cellContent.startsWith("*")&&cellContent !== 'CLEARING_PLACEHOLDER') {
                currentRun.push({syl: cellContent, r: r });
            } else { 
                if (currentRun.length >= 2&&processRunForWords(currentRun, c, false)) clearedAny = true; 
                currentRun = []; 
            }
            if (isAnimatingClear) break;
        }
        if (isAnimatingClear) break;
        if (currentRun.length >= 2&&processRunForWords(currentRun, c, false)) clearedAny = true;
    }
    return clearedAny;
}

function processRunForWords(run, fixedCoord, isHorizontal) {
    if (gameIsOver || isAnimatingClear) return false;
    for (let len = run.length; len >= 2; len--) {
        for (let i = 0; i <= run.length - len; i++) {
            const subRun = run.slice(i, i + len); 
            const wordAttempt = subRun.map(item => item.syl).join("");
            
            // MODIFICATO: Usa il nuovo sistema per verificare le parole
            if (DICT.has(wordAttempt) || DictionarySystem.isValidWord(wordAttempt)) {
                let cellsAreValid = true;
                for(const item of subRun) { 
                    const r_val = isHorizontal ? fixedCoord : item.r; 
                    const c_val = isHorizontal ? item.c : fixedCoord; 
                    if(!board[r_val] || board[r_val][c_val] !== item.syl || board[r_val][c_val] === 'CLEARING_PLACEHOLDER') { 
                        cellsAreValid = false; 
                        break; 
                    }
                }
                
                if(cellsAreValid) {
                    // Riproduci il suono quando trovi una parola
                    playSound('word');
                    
                    isAnimatingClear = true; clearInterval(gameLoopTimer);
                    const cellsToAnimate = [];
                    for (const item of subRun) { const r_anim = isHorizontal ? fixedCoord : item.r; const c_anim = isHorizontal ? item.c : fixedCoord; const cellElement = $(idx(c_anim, r_anim)); if (cellElement) { cellElement.classList.add('clearing'); cellsToAnimate.push({ r:r_anim, c:c_anim }); board[r_anim][c_anim] = 'CLEARING_PLACEHOLDER'; }}
                    
                    const numberOfSyllablesInGrid = subRun.length;
                    let bombaAttivataQuestoTurno = false;
                    
                    // RIPRISTINATO: Bomba solo per parole di 3+ sillabe
                    if (numberOfSyllablesInGrid >= 3&&!isNextPieceBomb) { 
                        isNextPieceBomb = true;
                        bombPower = numberOfSyllablesInGrid - 2;
                        bombaAttivataQuestoTurno = true;
                    }
                    
                    // MODIFICATO: Punti in base alla lunghezza della parola, moltiplicati per il livello attuale
                    const wordScore = wordAttempt.length * 10 * currentLevel;
                    score += wordScore;
                    words++;
                    
                    if (bombaAttivataQuestoTurno) {
                        ui.lastWordVal.innerHTML = wordAttempt + `<br><span style="color:orange;font-weight:bold;">BOMBA PRONTA! (${bombPower} righe)</span>`;
                    } else {
                        ui.lastWordVal.textContent = wordAttempt;
                    }
                    
                    setTimeout(() => {
                        cellsToAnimate.forEach(cellCoords => { if (board[cellCoords.r]&&board[cellCoords.r][cellCoords.c] === 'CLEARING_PLACEHOLDER') board[cellCoords.r][cellCoords.c] = null; const el = $(idx(cellCoords.c, cellCoords.r)); if (el) { el.classList.remove('clearing'); el.textContent = ""; el.className = "cell"; }});
                        isAnimatingClear = false; pendingBoardUpdateAfterAnimation = true;
                        if (!gameIsOver) processBoardAfterLock(); else draw(); 
                    }, ANIMATION_CLEAR_DURATION);
                    return true; 
                }
            }
        }
    }
    return false;
}

function collapse() {
    if (gameIsOver || isAnimatingClear) return;
    for (let c = 0; c < COLS; c++) {
        let emptyRow = ROWS - 1;
        for (let r = ROWS - 1; r >= 0; r--) {
            const cellContent = board[r][c];
            if (cellContent&&cellContent !== 'CLEARING_PLACEHOLDER') {
                if (r !== emptyRow) { board[emptyRow][c] = board[r][c]; board[r][c] = null; }
                emptyRow--;
            }
        }
    }
}

function draw() {
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const cellElement = $(idx(c, r));
            if (cellElement) {
                const s_board = board[r][c];
                if (s_board === 'CLEARING_PLACEHOLDER') { 
                    if(!cellElement.classList.contains('clearing')) {} 
                    continue; 
                }
                cellElement.textContent = s_board || "";
                if (s_board) {
                    // CORREZIONE: Verifica corretta per la bomba
                    if (s_board === "💣") { 
                        cellElement.className = "cell bomb-cell";
                    } else if (s_board.endsWith("*")) {
                        cellElement.className = "cell joker-cell";
                    } else if (s_board.startsWith("*")) {
                        cellElement.className = "cell consonant-joker-cell";
                    } else {
                        cellElement.className = "cell filled";
                    }
                } else {
                    cellElement.className = "cell";
                }
            }
        }
    }
    
    if (cur&&!gameIsOver&&!isAnimatingClear) {
        cur.txt.forEach((s_cur, i) => {
            const r_cur = cur.y + i;
            if (r_cur >= 0&&r_cur < ROWS) {
                const cellElement = $(idx(cur.x, r_cur));
                if (cellElement) { 
                    if (board[r_cur]&&board[r_cur][cur.x] === 'CLEARING_PLACEHOLDER') return;
                    cellElement.textContent = s_cur; 
                    if (cur.isBomb) { 
                        cellElement.className = "cell bomb-cell";
                    } else if (s_cur.endsWith("*")) { 
                        cellElement.className = "cell joker-cell";
                    } else if (s_cur.startsWith("*")) {
                        cellElement.className = "cell consonant-joker-cell";
                    } else { 
                        cellElement.className = "cell filled";
                    }
                }
            }
        });
    }
}

function gameStep() {
    if (isChoiceActive || gameIsOver || !cur || !dizionarioPronto || isAnimatingClear || gamePaused) return;
    if (canMove(cur, 0, 1)) cur.y++; else lockCurrentPiece(); 
    if (cur&&!gameIsOver&&!isAnimatingClear) draw();
}

function handleMove(direction) {
    if (isChoiceActive || gameIsOver || !cur || !dizionarioPronto || isAnimatingClear || gamePaused) return;
    
    let moved = false;
    const currentPieceCells = [];
    
    if (cur.isBomb) { 
        if (direction === 'left'&&canMove(cur, -1, 0)) { cur.x--; moved = true; }
        else if (direction === 'right'&&canMove(cur, 1, 0)) { cur.x++; moved = true; }
        else if (direction === 'down'&&canMove(cur, 0, 1)) { cur.y++; moved = true; }
    } else { 
        if (direction === 'left'&&canMove(cur, -1, 0)) { cur.x--; moved = true; }
        else if (direction === 'right'&&canMove(cur, 1, 0)) { cur.x++; moved = true; }
        else if (direction === 'down'&&canMove(cur, 0, 1)) { cur.y++; moved = true; } 
        else if (direction === 'rotate'&&cur.txt.length > 1) { cur.txt.unshift(cur.txt.pop()); moved = true; }
    }

    if(moved&&!gameIsOver&&!isAnimatingClear) {
        cur.txt.forEach((s_cur, i) => { 
            const r_cur = cur.y + i; 
            if (r_cur >= 0&&r_cur < ROWS) { 
                const cellElement = $(idx(cur.x, r_cur)); 
                if (cellElement&&(!board[r_cur] || board[r_cur][cur.x] !== 'CLEARING_PLACEHOLDER')) 
                    currentPieceCells.push(cellElement); 
            }
        });
        
        currentPieceCells.forEach(el => el.classList.add('piece-moved-feedback'));
        draw();
        setTimeout(() => currentPieceCells.forEach(el => el.classList.remove('piece-moved-feedback')), 100);
    }
}

// Gestione pause
function togglePause() {
    // Non mettere in pausa se siamo in una scelta jolly
    if (isChoiceActive) return;
    
    gamePaused = !gamePaused;
    
    if (gamePaused) {
        // Metti in pausa il gioco
        clearInterval(gameLoopTimer);
        ui.pauseOverlay.style.display = 'flex';
        
        // Ferma l'audio di hurry-up se in riproduzione
        if (isHurryUpPlaying) {
            AudioSystem.stopHurryUp();
        }
    } else {
        // Riprendi il gioco
        ui.pauseOverlay.style.display = 'none';
        
        if (!gameIsOver&&!isAnimatingClear&&cur) {
            gameLoopTimer = setInterval(gameStep, currentDropInterval);
            
            // Riprendi l'audio di hurry-up se era in riproduzione
            if (isHurryUpPlaying) {
                AudioSystem.playHurryUp();
            }
        }
    }
}

function setupTouchControls() {
    document.body.addEventListener('touchmove', (e) => {
        if (e.target.closest('#touch-controls')) {
            e.preventDefault();
        }
    }, { passive: false });
    
    document.getElementById('touch-left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleMove('left');
        startRepeatMove('left');
    });
    
    document.getElementById('touch-right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleMove('right');
        startRepeatMove('right');
    });
    
    document.getElementById('touch-down').addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleMove('down');
        startRepeatMove('down');
    });
    
    document.getElementById('touch-rotate').addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleMove('rotate');
    });
    
    const touchButtons = document.querySelectorAll('.touch-button');
    touchButtons.forEach(button => {
        button.addEventListener('touchend', stopRepeatMove);
        button.addEventListener('touchcancel', stopRepeatMove);
    });
}

let repeatMoveTimer = null;

function startRepeatMove(direction) {
    stopRepeatMove();
    repeatMoveTimer = setInterval(() => {
        handleMove(direction);
    }, 150);
}

function stopRepeatMove() {
    if (repeatMoveTimer) {
        clearInterval(repeatMoveTimer);
        repeatMoveTimer = null;
    }
}

document.addEventListener("keydown", function(e) {
    // CORREZIONE: Non cattura l'evento keydown quando si seleziona o interagisce con controlli audio
    // Questo blocco previene che le frecce controllino i pezzi quando si interagisce con i controlli
    if (e.target&&e.target.tagName&&(
        e.target.tagName.toLowerCase() === 'input' || 
        e.target.tagName.toLowerCase() === 'button' || 
        e.target.id === 'toggle-music'
    )) {
        // Se l'utente sta interagendo con un input o un button, 
        // lascia che l'evento sia gestito normalmente
        return;
    }
    
    // Gestione tasto P per pausa
    if (e.code === "KeyP" || e.code === "Escape") {
        togglePause();
        return;
    }
    
    // Non permettere movimenti quando in pausa
    if (gamePaused) return;
    
    if (e.code === "ArrowLeft") {
        e.preventDefault(); // Previene lo scroll della pagina
        handleMove('left');
    }
    else if (e.code === "ArrowRight") {
        e.preventDefault();
        handleMove('right');
    }
    else if (e.code === "ArrowDown") {
        e.preventDefault();
        handleMove('down');
    }
    else if (e.code === "ArrowUp") {
        e.preventDefault();
        handleMove('rotate');
    }
});

function applyDeviceSpecificOptimizations() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const pixelRatio = window.devicePixelRatio || 1;
    
    // Rileva iPhone di nuova generazione
    const isNewIPhone = 
        (window.screen.height === 844&&window.screen.width === 390) || // iPhone 12, 13
        (window.screen.height === 926&&window.screen.width === 428) || // iPhone 12 Pro Max, 13 Pro Max
        (window.screen.height === 812&&window.screen.width === 375) || // iPhone X, XS, 11 Pro
        (window.screen.height === 896&&window.screen.width === 414);   // iPhone XR, XS Max, 11
    
    if (isNewIPhone) {
        document.body.classList.add('iphone-optimized');
        
        // Regola i margini e spaziature per iPhone recenti
        const statsCol = document.querySelector('.stats-column');
        if (statsCol) {
            statsCol.style.marginBottom = '8px';
        }
        
        // Aumenta un po' i pulsanti touch per adattarli meglio all'iPhone
        const touchButtons = document.querySelectorAll('.touch-button');
        touchButtons.forEach(button => {
            button.style.width = '55px';
            button.style.height = '55px';
        });
    }
    
    // Rileva dispositivi specifici problematici
    const isSmallOlderDevice = 
        (screenWidth <= 375&&screenHeight <= 667) || // iPhone 8/7/6
        (screenWidth <= 360&&screenHeight <= 640) || // Samsung vecchi modelli
        (screenWidth <= 320);                          // Dispositivi molto piccoli
    
    // Rileva specificamente Galaxy Watch Active 3 e simili
    const isGalaxyWatchActive = 
        (screenWidth <= 360&&screenHeight <= 360)&&(navigator.userAgent.includes('SM-R') || // Identificatore tipico dei Galaxy Watch
        (screenWidth === screenHeight));        // Schermo quadrato/rotondo
    
    if (isGalaxyWatchActive) {
        document.body.classList.add('galaxy-watch-optimized');
        
        // Ottimizzazioni estreme per smartwatch
        const gameElement = document.getElementById("game");
        if (gameElement) {
            gameElement.style.gridTemplateColumns = "repeat(10, 20px)";
            gameElement.style.gridAutoRows = "20px";
        }
    }
    else if (isSmallOlderDevice) {
        // Applica class speciale al body per CSS mirato
        document.body.classList.add('small-device-optimized');
        
        // Regolazioni dinamiche minime solo per i dispositivi problematici
        const gameElement = document.getElementById("game");
        if (gameElement) {
            // Riduci leggermente la dimensione della griglia solo su questi dispositivi
            const cellSize = screenWidth <= 320 ? 22 : 24;
            gameElement.style.gridTemplateColumns = `repeat(10, ${cellSize}px)`;
            gameElement.style.gridAutoRows = `${cellSize}px`;
        }
        
        // Compatta lo spazio delle statistiche solo se necessario
        const statsColumn = document.querySelector(".stats-column");
        if (statsColumn) {
            statsColumn.style.padding = "3px";
            statsColumn.style.gap = "3px";
        }
    }
}

function initializeActualGame() {
    if (!dizionarioPronto) { console.error("InitializeActualGame: Dizionario non pronto."); return; }
    
    // Azzera tutte le variabili
    gameIsOver = false; 
    isChoiceActive = false; 
    isVowelChoice = false; 
    isAnimatingClear = false; 
    pendingBoardUpdateAfterAnimation = false;
    isNextPieceBomb = false; 
    bombPower = 0; 
    chainCount = 0; 
    currentChainMultiplier = 1.0; 
    isHurryUpPlaying = false;
    gamePaused = false;
    
    // NUOVO: Inizializza il livello
    currentLevel = 1;
    const levelConfig = LEVEL_CONFIG[currentLevel - 1];

    // MODIFICATO: Applica musica e sfondo del primo livello
    applyLevelTheme(levelConfig);
    
    // Aggiorna le dimensioni
    ROWS = levelConfig.rows;
    COLS = levelConfig.columns;
    START_DROP = levelConfig.startDropInterval;
    
    // Aggiorna le probabilità
    PROB_ONE_LETTER_SYL = levelConfig.syls1LetterProb;
    PROB_THREE_LETTER_SYL = levelConfig.syls3LetterProb;
    VOWEL_CHOICE_PROBABILITY = levelConfig.vowelJokerProb;
    CONSONANT_CHOICE_PROBABILITY = levelConfig.consonantJokerProb;
    
    // Aggiorna l'UI del livello
    ui.levelVal.textContent = currentLevel;
    ui.levelIndicator.textContent = `Livello ${currentLevel}`;
    ui.levelProgressBar.style.width = "0%";
    
    levelStartScore = 0;
    scoreToCompleteLevel = levelConfig.scoreToComplete;

    stopTimers();

    // Nascondi overlay di pausa se visibile
    ui.pauseOverlay.style.display = 'none';
    
    // Nascondi overlay di livello completato se visibile
    ui.levelCompleteOverlay.style.display = 'none';

    clearTimeout(choiceTimerId);
    if (document.activeElement&&typeof document.activeElement.blur === 'function') document.activeElement.blur();
    document.removeEventListener('keydown', handleVowelKeyboardChoice);
    document.removeEventListener('keydown', handleConsonantKeyboardChoice);
    
    // Ricrea la griglia con le nuove dimensioni
    recreateGameGrid();
    
    // Inizializza il board
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    
    // Aggiorna la funzione di selezione celle in base alle nuove dimensioni
    $ = function(q) { 
        return document.querySelectorAll("#game .cell")[q];
    };
    
    score = 0; words = 0; pieces = 0; 
    ui.s.textContent = 0; 
    ui.w.textContent = 0; 
    ui.p.textContent = 0; 
    ui.lastWordVal.textContent = "---";
    
    cur = newPiece(); 
    if (cur.isBomb) { 
        currentDropInterval = Math.floor(START_DROP / 3);
    } else { 
        currentDropInterval = START_DROP;
    }
    
    draw();
    clearInterval(gameLoopTimer);
    if (!isAnimatingClear&&!gameIsOver) { 
        gameLoopTimer = setInterval(gameStep, currentDropInterval); 
    }
    
    AudioSystem.initialize();
    setupTouchControls();
}

function handleGameOver() {
    if (gameIsOver) return; gameIsOver = true; 
    clearInterval(gameLoopTimer); clearTimeout(choiceTimerId);
    
    stopTimers();
    
    if (isHurryUpPlaying) {
        AudioSystem.stopHurryUp();
        isHurryUpPlaying = false;
    }
    
    if (isChoiceActive) { 
        document.removeEventListener('keydown', handleVowelKeyboardChoice);
        document.removeEventListener('keydown', handleConsonantKeyboardChoice);
        isChoiceActive = false;
    }
    draw(); 
    setTimeout(() => { 
        alert(`GAME OVER\nLivello: ${currentLevel}\nPunti ${score}\nParole ${words}\nPezzi ${pieces}`); 
        loadDictionaryAndInitGame(); 
    }, 100 + (isAnimatingClear ? ANIMATION_CLEAR_DURATION : 0) );
}

// Funzione di caricamento del dizionario nel gioco principale
async function loadDictionaryAndInitGame() {
    gameIsOver = false; isAnimatingClear = false; pendingBoardUpdateAfterAnimation = false; clearInterval(gameLoopTimer);
    DICT.clear();
    dizionarioPronto = false; 
    
    ui.lastWordVal.textContent = "CARICAMENTO...";
    
    try {
        // Carica il dizionario usando il nuovo sistema
        const success = await DictionarySystem.loadDictionary(DictionarySystem.currentLanguage);
        
        if (success) {
            // Copia tutte le parole nel DICT globale per compatibilità con il codice esistente
            DictionarySystem.dictionaries[DictionarySystem.currentLanguage].words.forEach(word => {
                DICT.add(word);
            });
            
            // Logga alcune statistiche
            console.log(DictionarySystem.getStats());
            
            dizionarioPronto = true;
            ui.lastWordVal.textContent = "---"; 
            initializeActualGame();
        } else {
            throw new Error(`Impossibile caricare il dizionario per la lingua ${DictionarySystem.currentLanguage}`);
        }
    } catch (error) { 
        console.error("Errore caricamento dizionario:", error); 
        alert("Errore caricamento dizionario: " + error.message + "\nControlla console."); 
        ui.lastWordVal.textContent = "ERRORE DIZIONARIO"; 
    }
}

// Funzione per cambiare lingua
async function changeLanguage(language) {
    if (dizionarioPronto) {
        // Se il gioco è già iniziato, metti in pausa
        const wasPaused = gamePaused;
        if (!gamePaused) togglePause();
        
        // Cambia lingua
        const success = await DictionarySystem.changeLanguage(language);
        
        if (success) {
            // Aggiorna la UI
            document.querySelectorAll('.language-option').forEach(option => {
                option.classList.toggle('active', option.value === language);
            });
            
            // Ricarica il dizionario e il gioco
            loadDictionaryAndInitGame();
            
            // Se il gioco era in pausa, mantienilo in pausa
            if (!wasPaused) togglePause();
        } else {
            alert(`Impossibile cambiare la lingua in ${language}`);
        }
    } else {
        // Se il gioco non è ancora iniziato, cambia solo l'opzione
        DictionarySystem.currentLanguage = language;
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.toggle('active', option.value === language);
        });
        
        // Aggiorna i testi dell'interfaccia
        updateUITexts(language);
    }
}

// Funzione per aggiornare i testi dell'interfaccia utente nella lingua selezionata
function updateUITexts(language) {
    // Testi multilingua
    const texts = {
        ita: {
            description: "Un gioco di parole ispirato a Tetris. Componi parole italiane usando le sillabe che cadono!",
            startButton: "Inizia"
        },
        eng: {
            description: "A word game inspired by Tetris. Create English words using the falling syllables!",
            startButton: "Start"
        }
    };
    
    // Aggiorna i testi in base alla lingua
    if (texts[language]) {
        ui.gameDescription.textContent = texts[language].description;
        ui.startButton.textContent = texts[language].startButton;
    }
}

// Gestione pausa automatica quando la pagina va in background
document.addEventListener('visibilitychange', () => {
    if (document.hidden&&!gameIsOver&&!gamePaused&&dizionarioPronto) {
        // Metti in pausa quando l'utente lascia la pagina
        togglePause();
    }
});

// Event listener per i pulsanti di pausa
ui.pauseButton.addEventListener('click', togglePause);
ui.resumeButton.addEventListener('click', togglePause);
ui.restartButton.addEventListener('click', () => {
    gamePaused = false;
    ui.pauseOverlay.style.display = 'none';
    loadDictionaryAndInitGame();
});

// Event listener per il pulsante passa al livello successivo
ui.nextLevelButton.addEventListener('click', startNextLevel);

// Event listeners per i pulsanti di selezione lingua
document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function() {
        const lang = this.value;
        changeLanguage(lang);
    });
});

// Event listener per il pulsante di avvio
document.getElementById('start-game-button').addEventListener('click', function() {
    document.getElementById('audio-start-overlay').style.display = 'none';
    
    AudioSystem.backgroundMusicActive = true;
    AudioSystem.initialize();
    
    // Applica ottimizzazioni specifiche per il dispositivo
    applyDeviceSpecificOptimizations();
    setupGameDimensions();
    
    loadDictionaryAndInitGame();
});

function setupGameDimensions() {
    // Utilizza rilevamento dinamico per determinare se siamo su iPhone di nuova generazione
    const isNewIPhone = 
        (window.screen.height === 844&&window.screen.width === 390) || // iPhone 12, 13
        (window.screen.height === 926&&window.screen.width === 428) || // iPhone 12 Pro Max, 13 Pro Max
        (window.screen.height === 812&&window.screen.width === 375) || // iPhone X, XS, 11 Pro
        (window.screen.height === 896&&window.screen.width === 414);   // iPhone XR, XS Max, 11
    
    if (isNewIPhone) {
        document.body.classList.add('iphone-optimized');
        
        // Regola i margini e spaziature per iPhone recenti
        const statsCol = document.querySelector('.stats-column');
        if (statsCol) {
            statsCol.style.marginBottom = '8px';
        }
        
        // Aumenta un po' i pulsanti touch per adattarli meglio all'iPhone
        const touchButtons = document.querySelectorAll('.touch-button');
        touchButtons.forEach(button => {
            button.style.width = '55px';
            button.style.height = '55px';
        });
    }
}
const PowerUpSystem = {
    costs: {
        bomb: 0,
        swap: 0,
        spaceinvaders: 0,
        shuffle: 0
    },
    
    activeStates: {
        swap: false,
        spaceinvaders: false,
        shuffle: false
    },
    
    swapSelection: [],
    cannonPosition: 0,
    paddlePosition: 0,
    
    // NUOVO: Variabili per Space Invaders migliorato
    spaceInvadersShip: null,
    spaceInvadersLasers: [],
    spaceInvadersInterval: null,
    spaceInvadersElement: null,
    
    canAfford(powerupType) {
        return score >= this.costs[powerupType];
    },
    
    updateButtonStates() {
        Object.keys(this.costs).forEach(powerupType => {
            const button = document.getElementById(`${powerupType}-powerup`);
            if (button) {
                button.disabled = !this.canAfford(powerupType);
            }
        });
    },
    
    // SOSTITUISCI completamente il metodo activatePowerUp nel tuo PowerUpSystem con questo:

    activatePowerUp(powerupType) {
        if (!this.canAfford(powerupType)) {
            playSound('drop');
            setTimeout(() => restoreGameFocus(), 100);
            return false;
        }
        
        // PRE-POWERUP: Rimuovi il pezzo corrente con animazione clearing
        if (cur) {
            clearInterval(gameLoopTimer);
            
            // Applica effetto clearing alle celle del pezzo corrente
            for (let i = 0; i < cur.h; i++) {
                const r_cur = cur.y + i;
                if (r_cur >= 0 && r_cur < ROWS) {
                    const cellElement = $(idx(cur.x, r_cur));
                    if (cellElement && (!board[r_cur] || !board[r_cur][cur.x] || board[r_cur][cur.x] === 'CLEARING_PLACEHOLDER')) {
                        cellElement.classList.add('clearing');
                    }
                }
            }
            
            // Dopo l'animazione, pulisci e elimina il pezzo
            setTimeout(() => {
                if (cur) {
                    for (let i = 0; i < cur.h; i++) {
                        const r_cur = cur.y + i;
                        if (r_cur >= 0 && r_cur < ROWS) {
                            const cellElement = $(idx(cur.x, r_cur));
                            if (cellElement) {
                                cellElement.classList.remove('clearing');
                                cellElement.textContent = '';
                                cellElement.className = 'cell';
                            }
                        }
                    }
                }
                cur = null;
                draw();
            }, ANIMATION_CLEAR_DURATION);
        }
        
        // Pausa il gioco normale
        if (gameLoopTimer) {
            clearInterval(gameLoopTimer);
        }

        score -= this.costs[powerupType];
        ui.s.textContent = score;
        
        playSound('word');
        
        const button = document.getElementById(`${powerupType}-powerup`);
        if (button) {
            button.classList.add('powerup-activated');
            setTimeout(() => button.classList.remove('powerup-activated'), 500);
        }
        
        // ESEGUI IL POWERUP SPECIFICO
        switch(powerupType) {
            case 'bomb':
                // Per la bomba, crea subito il pezzo bomba e fallo cadere
                setTimeout(() => {
                    cur = { 
                        x: COLS >> 1, 
                        y: -1, 
                        h: 1, 
                        txt: ["💣"], 
                        isBomb: true, 
                        power: 3 
                    };
                    
                    ui.lastWordVal.innerHTML = '<span style="color:orange;font-weight:bold;">💣 BOMBA LANCIATA!</span>';
                    
                    currentDropInterval = Math.floor(START_DROP / 3);
                    draw();
                    
                    if (!gameIsOver && !isAnimatingClear && !gamePaused) {
                        clearInterval(gameLoopTimer);
                        gameLoopTimer = setInterval(gameStep, currentDropInterval);
                    }
                }, ANIMATION_CLEAR_DURATION + 50);
                break;
            case 'swap':
                this.activateSwap();
                break;
            case 'spaceinvaders':
                this.activateSpaceInvaders();
                break;
            case 'shuffle':
                this.activateShuffle();
                break;
        }
        
        this.updateButtonStates();

        setTimeout(() => {
            if (powerupType !== 'swap' || !this.activeStates.swap) {
                restoreGameFocus();
            }
        }, 200);
        return true;
    },
    activateBomb() {
        // Sostituisci il pezzo corrente con una bomba
        cur = { 
            x: COLS >> 1, 
            y: -1, 
            h: 1, 
            txt: ["💣"], 
            isBomb: true, 
            power: 3 
        };
        
        ui.lastWordVal.innerHTML = '<span style="color:orange;font-weight:bold;">💣 BOMBA LANCIATA!</span>';
        
        // Riprendi il gioco così la bomba cade
        PowerUpFreezeSystem.unfreezeCurrentPiece();

        restoreGameFocus();
    },
    activateSwap() {
        if (this.activeStates.swap) return;
        
        // NUOVO: Conta le celle piene sulla griglia
        let filledCellsCount = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r] && board[r][c] && board[r][c] !== 'CLEARING_PLACEHOLDER') {
                    filledCellsCount++;
                }
            }
        }
        
        // Se ci sono meno di 2 celle piene, non attivare lo scambio
        if (filledCellsCount < 2) {
            ui.lastWordVal.innerHTML = '<span style="color:red;">Servono almeno 2 sillabe sulla griglia per usare lo Scambio!</span>';
            playSound('drop'); // Suono di errore
            setTimeout(() => {
                if (!gameIsOver && !cur) {
                    cur = newPiece();
                    
                    // Verifica che il pezzo possa essere posizionato
                    if (!canMove(cur, 0, 0)) {
                        draw();
                        handleGameOver();
                        return;
                    }
                    
                    // Imposta l'intervallo di caduta corretto
                    if (cur.isBomb) {
                        currentDropInterval = Math.floor(START_DROP / 3);
                    } else {
                        currentDropInterval = START_DROP;
                    }
                    
                    draw();
                    
                    // Riprendi il game loop
                    if (!isAnimatingClear && !isChoiceActive && !gamePaused) {
                        clearInterval(gameLoopTimer);
                        gameLoopTimer = setInterval(gameStep, currentDropInterval);
                    }
                    
                    restoreGameFocus();
                }
            }, ANIMATION_CLEAR_DURATION + 100);

            return;
        }
        
        this.activeStates.swap = true;
        ui.lastWordVal.innerHTML = '<span style="color:cyan;font-weight:bold;">SCAMBIO ATTIVO! Clicca due celle adiacenti.</span>';
        
        document.getElementById('game').classList.add('swap-mode');
    
        // Salva la funzione bindata una sola volta
        if (!this.boundHandleSwapClick) {
            this.boundHandleSwapClick = this.handleSwapClick.bind(this);
        }
        document.addEventListener('click', this.boundHandleSwapClick);
        
        setTimeout(() => {
            if (this.activeStates.swap) {
                this.deactivateSwap();
                ui.lastWordVal.innerHTML = '<span style="color:red;">Modalità scambio scaduta.</span>';
                // NUOVO: Riprendi il gioco dopo il timeout
                this.resumeGameAfterSwap();
            }
        }, 5000);
    },    
    resumeGameAfterSwap() {
        // NUOVO: Assicurati che il gioco riprenda correttamente
        if (!gameIsOver && !isAnimatingClear && !gamePaused) {
            // Se non c'è un pezzo corrente, creane uno nuovo
            if (!cur) {
                cur = newPiece();
                if (!canMove(cur, 0, 0)) {
                    draw();
                    handleGameOver();
                    return;
                }
            }
            
            // Riprendi il game loop
            clearInterval(gameLoopTimer);
            gameLoopTimer = setInterval(gameStep, currentDropInterval);
            
            draw();
            console.log('Game resumed after swap operation');
        }
    },   
    handleSwapClick(event) {
        if (!this.activeStates.swap) return;
        
        const cell = event.target.closest('.cell');
        if (!cell) return;
        
        const cells = Array.from(document.querySelectorAll('#game .cell'));
        const cellIndex = cells.indexOf(cell);
        const row = Math.floor(cellIndex / COLS);
        const col = cellIndex % COLS;
        
        // CORREZIONE: Verifica più rigorosa delle celle valide
        if (row < 0 || row >= ROWS || col < 0 || col >= COLS || 
            !board[row] || !board[row][col] || 
            board[row][col] === 'CLEARING_PLACEHOLDER') {
            
            ui.lastWordVal.innerHTML = '<span style="color:red;">Seleziona una cella con contenuto!</span>';
            return;
        }
        
        if (this.swapSelection.length === 0) {
            this.swapSelection.push({row, col, cell});
            cell.classList.add('swap-selected');
            ui.lastWordVal.innerHTML = '<span style="color:cyan;">Prima cella selezionata. Scegli una cella adiacente.</span>';
        } else if (this.swapSelection.length === 1) {
            const first = this.swapSelection[0];
            
            const isSameCell = (row === first.row && col === first.col);
            const rowDiff = Math.abs(row - first.row);
            const colDiff = Math.abs(col - first.col);
            const isAdjacent = !isSameCell && rowDiff <= 1 && colDiff <= 1;
            
            if (isAdjacent) {
                // Esegui lo scambio
                const temp = board[first.row][first.col];
                board[first.row][first.col] = board[row][col];
                board[row][col] = temp;
                
                ui.lastWordVal.innerHTML = '<span style="color:lime;">Scambio completato!</span>';
                draw();
                
                // CORREZIONE: Disattiva lo scambio PRIMA di processare il board
                this.deactivateSwap();
                
                // Dai un momento per vedere il risultato, poi processa
                setTimeout(() => {
                    processBoardAfterLock();
                }, 500);
            } else {
                ui.lastWordVal.innerHTML = '<span style="color:red;">Le celle devono essere adiacenti!</span>';
                // Reset selezione per permettere una nuova scelta
                first.cell.classList.remove('swap-selected');
                this.swapSelection = [];
            }
        }
    },
    deactivateSwap() {
        this.activeStates.swap = false;
        document.getElementById('game').classList.remove('swap-mode');
    
        if (this.boundHandleSwapClick) {
            document.removeEventListener('click', this.boundHandleSwapClick);
        }
        
        document.querySelectorAll('.swap-selected').forEach(cell => {
            cell.classList.remove('swap-selected');
        });
        this.swapSelection = [];
        
        // NUOVO: Assicurati sempre che PowerUpFreezeSystem venga sbloccato
        PowerUpFreezeSystem.unfreezeCurrentPiece();
    },
    handleSpaceInvadersKeyboard(event) {
        // CORREZIONE: Verifica lo stato prima di processare l'evento
        if (!this.activeStates.spaceinvaders) {
            console.log('Space Invaders not active, ignoring keyboard input');
            return;
        }
        
        console.log(`Key pressed: ${event.code}, current position: ${this.cannonPosition}`);
        
        switch(event.code) {
            case 'ArrowLeft':
                event.preventDefault();
                event.stopPropagation();
                this.moveSpaceShip(-1);
                break;
            case 'ArrowRight':
                event.preventDefault();
                event.stopPropagation();
                this.moveSpaceShip(1);
                break;
            case 'Space':
            case 'ArrowDown':
                event.preventDefault();
                event.stopPropagation();
                this.fireSpaceInvadersLaser();
                break;
        }
    },
       
    // MIGLIORATO: Space Invaders completamente rivisto
    activateSpaceInvaders() {
        if (this.activeStates.spaceinvaders) return;
                
        this.activeStates.spaceinvaders = true;
        this.cannonPosition = Math.floor(COLS / 2);
        this.spaceInvadersLasers = [];
        
        let filledCellsCount = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r] && board[r][c] && board[r][c] !== 'CLEARING_PLACEHOLDER') {
                    filledCellsCount++;
                }
            }
        }
        
        // Se ci sono meno di 2 celle piene, non attivare lo scambio
        if (filledCellsCount < 1) {
            ui.lastWordVal.innerHTML = '<span style="color:red;">Servono almeno 1 sillabe sulla griglia per usare lo Space invaders!</span>';
            playSound('drop'); // Suono di errore
            setTimeout(() => {
                if (!gameIsOver && !cur) {
                    cur = newPiece();
                    
                    // Verifica che il pezzo possa essere posizionato
                    if (!canMove(cur, 0, 0)) {
                        draw();
                        handleGameOver();
                        return;
                    }
                    
                    // Imposta l'intervallo di caduta corretto
                    if (cur.isBomb) {
                        currentDropInterval = Math.floor(START_DROP / 3);
                    } else {
                        currentDropInterval = START_DROP;
                    }
                    
                    draw();
                    
                    // Riprendi il game loop
                    if (!isAnimatingClear && !isChoiceActive && !gamePaused) {
                        clearInterval(gameLoopTimer);
                        gameLoopTimer = setInterval(gameStep, currentDropInterval);
                    }
                    
                    restoreGameFocus();
                }
            }, ANIMATION_CLEAR_DURATION + 100);

            return;
        }

        // NUOVO: Rimuovi l'effetto freeze dalle celle prima di iniziare
        PowerUpFreezeSystem.unfreezeBoard();
        
        ui.lastWordVal.innerHTML = '<span style="color:lime;font-weight:bold;">🚀 SPACE INVADERS! Frecce ←→ per muoversi, SPAZIO/↓ per sparare</span>';
        
        // Crea l'elemento grafico dell'astronave
        this.createSpaceShip();
        
        // CORREZIONE: Crea un handler bound una sola volta e salvalo
        this.spaceInvadersKeyboardHandler = (event) => {
            this.handleSpaceInvadersKeyboard(event);
        };
        
        // Aggiungi event listener
        document.addEventListener('keydown', this.spaceInvadersKeyboardHandler);
        
        // Per i controlli touch
        this.setupSpaceInvadersTouchControls();
        
        // Avvia l'animazione dei laser
        this.spaceInvadersInterval = setInterval(() => {
            this.updateSpaceInvadersLasers();
        }, 100);
        
        // Timeout per disattivare
        setTimeout(() => {
            if (this.activeStates.spaceinvaders) {
                this.deactivateSpaceInvaders();
            }
        }, 5000);
    },
    createSpaceShip() {
        // Rimuovi astronave esistente se presente
        if (this.spaceInvadersElement) {
            this.spaceInvadersElement.remove();
            this.spaceInvadersElement = null;
        }
        
        // Crea l'elemento dell'astronave
        this.spaceInvadersElement = document.createElement('div');
        this.spaceInvadersElement.className = 'space-invaders-ship';
        this.spaceInvadersElement.innerHTML = '▼';
        
        // Posiziona l'astronave sopra la griglia
        const gameElement = document.getElementById('game');
        
        this.spaceInvadersElement.style.cssText = `
            position: absolute;
            font-size: 24px;
            z-index: 1000;
            top: -40px;
            left: 0px;
            transition: left 0.15s ease;
            pointer-events: none;
            text-shadow: 0 0 10px #00ff00;
        `;
        
        gameElement.style.position = 'relative';
        gameElement.appendChild(this.spaceInvadersElement);
        
        this.updateSpaceShipPosition();
    },
    
    updateSpaceShipPosition() {
        if (!this.spaceInvadersElement || !this.activeStates.spaceinvaders) return;
        
        // Calcolo semplice e diretto
        const cellWidth = 38;
        const leftPosition = this.cannonPosition * cellWidth + (cellWidth / 2) - 8;
        
        // CORREZIONE: Assicurati che solo l'astronave si muova, non le celle
        this.spaceInvadersElement.style.left = `${leftPosition}px`;
        this.spaceInvadersElement.style.position = 'absolute';
        this.spaceInvadersElement.style.zIndex = '1000';
        
        // Debug
        console.log(`Ship at column ${this.cannonPosition}, pixel position: ${leftPosition}px`);
    },
    setupSpaceInvadersTouchControls() {
        // Salva i controlli originali
        this.originalTouchControls = {
            left: document.getElementById('touch-left').onclick,
            right: document.getElementById('touch-right').onclick,
            down: document.getElementById('touch-down').onclick
        };
        
        // Modifica temporaneamente i controlli touch
        const touchLeft = document.getElementById('touch-left');
        const touchRight = document.getElementById('touch-right');
        const touchDown = document.getElementById('touch-down');
        
        if (touchLeft) {
            touchLeft.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.moveSpaceShip(-1);
            };
            touchLeft.innerHTML = '←';
        }
        
        if (touchRight) {
            touchRight.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.moveSpaceShip(1);
            };
            touchRight.innerHTML = '→';
        }
        
        if (touchDown) {
            touchDown.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.fireSpaceInvadersLaser();
            };
            touchDown.innerHTML = '🔫';
        }
    },
    
    moveSpaceShip(direction) {
        if (!this.activeStates.spaceinvaders) {
            console.log('Cannot move ship: Space Invaders not active');
            return;
        }
        
        const oldPosition = this.cannonPosition;
        const newPosition = this.cannonPosition + direction;
        
        // Verifica che la nuova posizione sia valida
        if (newPosition >= 0 && newPosition < COLS) {
            this.cannonPosition = newPosition;
            this.updateSpaceShipPosition();
            console.log(`Ship moved from ${oldPosition} to ${this.cannonPosition}`);
        } else {
            console.log(`Cannot move to column ${newPosition}, out of bounds (0-${COLS-1})`);
        }
    },
    fireSpaceInvadersLaser() {
        if (!this.activeStates.spaceinvaders) return;
        
        const laser = {
            col: this.cannonPosition,
            row: -0.5,
            element: this.createLaserElement()
        };
        
        this.positionLaserElement(laser);
        this.spaceInvadersLasers.push(laser);
        playSound('word');
        
        console.log(`Laser fired from column ${this.cannonPosition}`);
    },
    positionLaserElement(laser) {
        if (!laser.element) return;
        
        const cellWidth = 38;
        const cellHeight = 38;
        
        const leftPosition = laser.col * cellWidth + (cellWidth / 2) - 1;
        const topPosition = laser.row * cellHeight + 15;
        
        laser.element.style.left = `${leftPosition}px`;
        laser.element.style.top = `${topPosition}px`;
    },
    
    createLaserElement() {
        const laserElement = document.createElement('div');
        laserElement.className = 'space-invaders-laser';
        laserElement.style.cssText = `
            position: absolute;
            width: 2px;
            height: 20px;
            background: linear-gradient(to bottom, #00ff00, #ffffff);
            box-shadow: 0 0 6px #00ff00;
            z-index: 999;
            pointer-events: none;
        `;
        
        const gameElement = document.getElementById('game');
        gameElement.appendChild(laserElement);
        
        return laserElement;
    },
    
    updateSpaceInvadersLasers() {
        if (!this.activeStates.spaceinvaders) return;
        
        this.spaceInvadersLasers = this.spaceInvadersLasers.filter(laser => {
            laser.row += 1.0;
            
            this.positionLaserElement(laser);
            
            const boardRow = Math.floor(laser.row);
            if (boardRow >= 0 && boardRow < ROWS && 
                board[boardRow] && board[boardRow][laser.col] && 
                board[boardRow][laser.col] !== 'CLEARING_PLACEHOLDER') {
                
                // CORREZIONE: Crea prima gli effetti visivi, poi pulisci la cella
                this.createExplosionEffect(laser.col, boardRow);
                
                // Rimuovi la sillaba dalla griglia
                board[boardRow][laser.col] = null;
                
                // Aggiungi punti
                score += 25;
                ui.s.textContent = score;
                
                // Aggiorna immediatamente la visualizzazione della cella
                const cellElement = $(idx(laser.col, boardRow));
                if (cellElement) {
                    cellElement.textContent = "";
                    cellElement.className = "cell";
                }
                
                // Rimuovi il laser
                if (laser.element && laser.element.parentNode) {
                    laser.element.remove();
                }
                
                return false; // Rimuovi questo laser dall'array
            }
            
            // Se il laser esce dalla griglia dal basso
            if (laser.row >= ROWS + 1) {
                if (laser.element && laser.element.parentNode) {
                    laser.element.remove();
                }
                return false;
            }
            
            return true; // Mantieni questo laser
        });
        
        // Ridisegna la griglia per assicurarsi che tutto sia aggiornato
        draw();
        
        // Fai collassare le sillabe dopo che i laser hanno fatto il loro effetto
        collapse();
        
        // Ridisegna di nuovo dopo il collapse
        draw();
    },
    createExplosionParticles(col, row) {
        const gameElement = document.getElementById('game');
        const cellWidth = 38;
        const cellHeight = 38;
        
        // Crea 6 particelle che si irradiano dal centro
        const particles = ['✨', '⭐', '💫', '✨', '⭐', '💫'];
        const angles = [0, 60, 120, 180, 240, 300]; // Angoli in gradi
        
        particles.forEach((particle, index) => {
            const particleElement = document.createElement('div');
            particleElement.innerHTML = particle;
            particleElement.className = 'explosion-particle';
            
            const centerX = col * cellWidth + (cellWidth / 2);
            const centerY = row * cellHeight + (cellHeight / 2);
            
            const angle = angles[index] * (Math.PI / 180); // Converti in radianti
            const distance = 40; // Distanza di movimento della particella
            
            const finalX = centerX + Math.cos(angle) * distance;
            const finalY = centerY + Math.sin(angle) * distance;
            
            particleElement.style.cssText = `
                position: absolute;
                font-size: 12px;
                z-index: 1000;
                left: ${centerX}px;
                top: ${centerY}px;
                pointer-events: none;
                animation: particle-burst-${index} 0.8s ease-out forwards;
                opacity: 1;
            `;
            
            gameElement.appendChild(particleElement);
            
            // Crea animazione dinamica per ogni particella
            const style = document.createElement('style');
            style.textContent = `
                @keyframes particle-burst-${index} {
                    0% {
                        transform: translate(0, 0) scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: translate(${finalX - centerX}px, ${finalY - centerY}px) scale(1.2);
                        opacity: 0.8;
                    }
                    100% {
                        transform: translate(${finalX - centerX}px, ${finalY - centerY}px) scale(0.5);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);

            if (typeof AudioSystem !== 'undefined' && AudioSystem.playBomb) {
                AudioSystem.playBomb();
            }
            
            // Rimuovi particella e stile dopo l'animazione
            setTimeout(() => {
                if (particleElement && particleElement.parentNode) {
                    particleElement.remove();
                }
                if (style && style.parentNode) {
                    style.remove();
                }
            }, 800);
        });
    },
    createExplosionEffect(col, row) {
        // Crea l'elemento esplosione
        const explosion = document.createElement('div');
        explosion.innerHTML = '💥';
        explosion.className = 'space-invaders-explosion';
        
        // Calcolo corretto della posizione centrata
        const cellWidth = 38;
        const cellHeight = 38;
        const explosionSize = 24; // Dimensione del simbolo esplosione
        
        // Centra l'esplosione nella cella target
        const leftPosition = col * cellWidth + (cellWidth / 2) - (explosionSize / 2);
        const topPosition = row * cellHeight + (cellHeight / 2) - (explosionSize / 2);
        
        explosion.style.cssText = `
            position: absolute;
            font-size: 24px;
            z-index: 1001;
            left: ${leftPosition}px;
            top: ${topPosition}px;
            pointer-events: none;
            animation: space-explosion 0.6s ease-out forwards;
            text-shadow: 0 0 10px #ff6600, 0 0 20px #ff3300;
        `;
        
        const gameElement = document.getElementById('game');
        gameElement.appendChild(explosion);
        
        // Crea effetto di particelle aggiuntive
        this.createExplosionParticles(col, row);
        
        // Suono esplosione più appropriato
        if (typeof playSound === 'function') {
            playSound('word'); // o crea un suono specifico per l'esplosione
        }
        
        // Rimuovi dopo l'animazione
        setTimeout(() => {
            if (explosion && explosion.parentNode) {
                explosion.remove();
            }
        }, 600);
    }, 
    restoreTouchControls() {
        const touchLeft = document.getElementById('touch-left');
        const touchRight = document.getElementById('touch-right');
        const touchDown = document.getElementById('touch-down');
        
        if (touchLeft && this.originalTouchControls) {
            touchLeft.onclick = this.originalTouchControls.left;
            touchLeft.innerHTML = '←';
        }
        
        if (touchRight && this.originalTouchControls) {
            touchRight.onclick = this.originalTouchControls.right;
            touchRight.innerHTML = '→';
        }
        
        if (touchDown && this.originalTouchControls) {
            touchDown.onclick = this.originalTouchControls.down;
            touchDown.innerHTML = '↓';
        }
        
        this.originalTouchControls = null;
    },
    
    deactivateSpaceInvaders() {
        console.log('Deactivating Space Invaders...');
        
        this.activeStates.spaceinvaders = false;
        
        // CORREZIONE: Rimuovi correttamente l'event listener
        if (this.spaceInvadersKeyboardHandler) {
            document.removeEventListener('keydown', this.spaceInvadersKeyboardHandler);
            this.spaceInvadersKeyboardHandler = null;
        }
        
        // Pulisci interval
        if (this.spaceInvadersInterval) {
            clearInterval(this.spaceInvadersInterval);
            this.spaceInvadersInterval = null;
        }
        
        // Rimuovi elementi grafici
        if (this.spaceInvadersElement) {
            this.spaceInvadersElement.remove();
            this.spaceInvadersElement = null;
        }
        
        // Rimuovi tutti i laser
        this.spaceInvadersLasers.forEach(laser => {
            if (laser.element) {
                laser.element.remove();
            }
        });
        this.spaceInvadersLasers = [];
        
        // Ripristina controlli touch
        this.restoreTouchControls();
        
        ui.lastWordVal.innerHTML = '<span style="color:gray;">Space Invaders disattivato.</span>';
        
        // CORREZIONE: Crea un nuovo pezzo se non esiste, come fanno gli altri powerup
        if (!gameIsOver && !cur) {
            cur = newPiece();
            
            // Verifica che il pezzo possa essere posizionato
            if (!canMove(cur, 0, 0)) {
                draw();
                handleGameOver();
                return;
            }
            
            // Imposta l'intervallo di caduta corretto
            if (cur.isBomb) {
                currentDropInterval = Math.floor(START_DROP / 3);
            } else {
                currentDropInterval = START_DROP;
            }
            
            draw();
        }
        
        // Riprendi il gioco normale
        if (!gameIsOver && !isAnimatingClear && cur && !gamePaused && !isChoiceActive) {
            clearInterval(gameLoopTimer);
            gameLoopTimer = setInterval(gameStep, currentDropInterval);
        }
        
        // NUOVO: Ripristina il focus sulla griglia di gioco
        setTimeout(() => restoreGameFocus(), 100);
    },
    activateShuffle() {
        if (this.activeStates.shuffle) return;
        
        // Conta le sillabe presenti sulla griglia
        const filledCells = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r] && board[r][c] && 
                    board[r][c] !== 'CLEARING_PLACEHOLDER' && 
                    !board[r][c].endsWith("*") && 
                    !board[r][c].startsWith("*")) {
                    filledCells.push({
                        row: r,
                        col: c,
                        content: board[r][c]
                    });
                }
            }
        }
        
        // Se ci sono meno di 3 sillabe, non ha senso mescolare
        if (filledCells.length < 3) {
            ui.lastWordVal.innerHTML = '<span style="color:red;">Servono almeno 3 sillabe sulla griglia per usare la Mischia!</span>';
            playSound('drop');
            
            // CORREZIONE COMPLETA: Il powerup fallisce, quindi dobbiamo creare un nuovo pezzo
            // e riprendere il gioco come se il powerup non fosse mai stato attivato
            
            // Crea un nuovo pezzo immediatamente
            setTimeout(() => {
                if (!gameIsOver && !cur) {
                    cur = newPiece();
                    
                    // Verifica che il pezzo possa essere posizionato
                    if (!canMove(cur, 0, 0)) {
                        draw();
                        handleGameOver();
                        return;
                    }
                    
                    // Imposta l'intervallo di caduta corretto
                    if (cur.isBomb) {
                        currentDropInterval = Math.floor(START_DROP / 3);
                    } else {
                        currentDropInterval = START_DROP;
                    }
                    
                    draw();
                    
                    // Riprendi il game loop
                    if (!isAnimatingClear && !isChoiceActive && !gamePaused) {
                        clearInterval(gameLoopTimer);
                        gameLoopTimer = setInterval(gameStep, currentDropInterval);
                    }
                    
                    restoreGameFocus();
                }
            }, ANIMATION_CLEAR_DURATION + 100);
            
            return;
        }
        
        this.activeStates.shuffle = true;
        
        // Applica effetto visivo di "congelamento" alle celle che verranno mescolate
        filledCells.forEach(cell => {
            const cellElement = $(idx(cell.col, cell.row));
            if (cellElement) {
                cellElement.classList.add('shuffle-preparing');
            }
        });
        
        ui.lastWordVal.innerHTML = '<span style="color:purple;font-weight:bold;">🔀 MISCHIA ATTIVATA! Preparazione...</span>';
        
        // Dopo un breve delay per l'effetto visivo, esegui la mischia
        setTimeout(() => {
            this.executeShuffleAnimation(filledCells);
        }, 800);
    },
    
    // 3. Funzione che esegue l'animazione e la logica della mischia
    executeShuffleAnimation(filledCells) {
        // Estrae tutti i contenuti delle celle
        const contents = filledCells.map(cell => cell.content);
        
        // Mischia l'array dei contenuti usando Fisher-Yates shuffle
        for (let i = contents.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [contents[i], contents[j]] = [contents[j], contents[i]];
        }
        
        // Applica l'animazione di "shuffle" a tutte le celle interessate
        filledCells.forEach(cell => {
            const cellElement = $(idx(cell.col, cell.row));
            if (cellElement) {
                cellElement.classList.remove('shuffle-preparing');
                cellElement.classList.add('shuffle-active');
                
                // Durante l'animazione, mostra un simbolo di shuffle
                cellElement.textContent = '🔀';
            }
        });
        
        ui.lastWordVal.innerHTML = '<span style="color:purple;font-weight:bold;">🔀 MISCHIANDO...</span>';
        
        // Suono di shuffle
        if (typeof playSound === 'function') {
            playSound('word');
        }
        
        // Dopo l'animazione, applica i nuovi valori
        setTimeout(() => {
            // Assegna i contenuti mescolati alle posizioni originali
            filledCells.forEach((cell, index) => {
                board[cell.row][cell.col] = contents[index];
                
                const cellElement = $(idx(cell.col, cell.row));
                if (cellElement) {
                    cellElement.classList.remove('shuffle-active');
                    cellElement.textContent = contents[index];
                    
                    // Breve effetto "pop" per evidenziare il cambiamento
                    cellElement.classList.add('shuffle-complete');
                    setTimeout(() => {
                        cellElement.classList.remove('shuffle-complete');
                    }, 300);
                }
            });
            
            ui.lastWordVal.innerHTML = '<span style="color:lime;">🔀 Mischia completata!</span>';
            
            // Ridisegna la griglia per assicurarsi che tutto sia corretto
            draw();
            
            // Dopo la mischia, processa il board per eventuali nuove parole formate
            setTimeout(() => {
                this.deactivateShuffle();
                
                // Processa il board per cercare nuove combinazioni di parole
                processBoardAfterLock();
            }, 500);
            
        }, 1000); // Durata dell'animazione di shuffle
    },
    
    // 4. Funzione per deattivare il powerup shuffle
    deactivateShuffle() {
        this.activeStates.shuffle = false;
        
        // Rimuovi eventuali classi CSS rimaste
        document.querySelectorAll('.shuffle-preparing, .shuffle-active, .shuffle-complete').forEach(element => {
            element.classList.remove('shuffle-preparing', 'shuffle-active', 'shuffle-complete');
        });
        
        // Riprendi il gioco normale se non ci sono altri powerup attivi
        if (!gameIsOver && !isAnimatingClear && !gamePaused && cur && !isChoiceActive) {
            clearInterval(gameLoopTimer);
            gameLoopTimer = setInterval(gameStep, currentDropInterval);
        }
    }
};
const PowerUpFreezeSystem = {
    isFrozen: false,
    frozenCells: new Set(),
    
    // Applica l'effetto freeze a tutte le sillabe sulla griglia
    freezeBoard() {
        if (this.isFrozen) return;
        
        this.isFrozen = true;
        this.frozenCells.clear();
        
        // Trova tutte le celle con contenuto e applicagli l'effetto freeze
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const cellContent = board[r][c];
                if (cellContent && cellContent !== 'CLEARING_PLACEHOLDER') {
                    const cellElement = $(idx(c, r));
                    if (cellElement) {
                        cellElement.classList.add('powerup-frozen');
                        this.frozenCells.add(idx(c, r));
                    }
                }
            }
        }
        
        console.log(`Frozen ${this.frozenCells.size} cells`);
    },
    freezeCurrentPiece() {
        if (!cur || this.currentPieceFrozen) return;
        
        console.log('Freezing current piece...');
        
        this.currentPieceFrozen = true;
        
        // Salva la posizione corrente del pezzo
        this.frozenPiecePosition = {
            x: cur.x,
            y: cur.y,
            h: cur.h,
            txt: [...cur.txt], // Copia dell'array
            isBomb: cur.isBomb
        };
        
        // Applica l'effetto visivo freeze alle celle del pezzo corrente
        for (let i = 0; i < cur.h; i++) {
            const r_cur = cur.y + i;
            if (r_cur >= 0 && r_cur < ROWS) {
                const cellElement = $(idx(cur.x, r_cur));
                if (cellElement) {
                    cellElement.classList.add('powerup-frozen');
                    console.log(`Applied freeze effect to piece cell at ${cur.x}, ${r_cur}`);
                }
            }
        }
        
        // Ferma il timer del gameLoop per impedire al pezzo di cadere
        if (gameLoopTimer) {
            clearInterval(gameLoopTimer);
            console.log('Game loop timer stopped for piece freeze');
        }
    },
    unfreezeCurrentPiece() {
        if (!this.currentPieceFrozen || !this.frozenPiecePosition) return;
        
        console.log('Unfreezing current piece...');
        
        // Rimuovi l'effetto visivo freeze dalle celle del pezzo
        if (cur) {
            for (let i = 0; i < cur.h; i++) {
                const r_cur = cur.y + i;
                if (r_cur >= 0 && r_cur < ROWS) {
                    const cellElement = $(idx(cur.x, r_cur));
                    if (cellElement) {
                        cellElement.classList.remove('powerup-frozen');
                        console.log(`Removed freeze effect from piece cell at ${cur.x}, ${r_cur}`);
                    }
                }
            }
        }
        
        this.currentPieceFrozen = false;
        this.frozenPiecePosition = null;
        
        // Riprendi il gameLoop solo se il gioco non è in pausa o terminato
        if (!gameIsOver && !isAnimatingClear && cur && !gamePaused && !isChoiceActive) {
            clearInterval(gameLoopTimer);
            gameLoopTimer = setInterval(gameStep, currentDropInterval);
            console.log('Game loop timer restarted after piece unfreeze');
        }
        
        // Ridisegna per assicurarsi che tutto sia visivamente corretto
        draw();
    },
    // Rimuove l'effetto freeze da tutte le celle
    unfreezeBoard() {
        if (!this.isFrozen) return;
        
        this.frozenCells.forEach(cellIndex => {
            const cellElement = document.querySelectorAll("#game .cell")[cellIndex];
            if (cellElement) {
                cellElement.classList.remove('powerup-frozen');
            }
        });
        
        this.frozenCells.clear();
        this.isFrozen = false;
        
        console.log('Board unfrozen');
        
        // Ridisegna la griglia per assicurarsi che tutto sia aggiornato
        draw();
    },
    
    // Aggiorna l'effetto freeze dopo che le celle sono cambiate
    updateFreezeEffect() {
        if (!this.isFrozen) return;
        
        // Rimuovi l'effetto dalle celle che non esistono più
        const cellsToRemove = [];
        this.frozenCells.forEach(cellIndex => {
            const r = Math.floor(cellIndex / COLS);
            const c = cellIndex % COLS;
            
            if (!board[r] || !board[r][c] || board[r][c] === 'CLEARING_PLACEHOLDER') {
                const cellElement = document.querySelectorAll("#game .cell")[cellIndex];
                if (cellElement) {
                    cellElement.classList.remove('powerup-frozen');
                }
                cellsToRemove.push(cellIndex);
            }
        });
        
        cellsToRemove.forEach(index => this.frozenCells.delete(index));
        
        // Applica l'effetto alle nuove celle che hanno contenuto
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const cellContent = board[r][c];
                const cellIndex = idx(c, r);
                
                if (cellContent && cellContent !== 'CLEARING_PLACEHOLDER' && !this.frozenCells.has(cellIndex)) {
                    const cellElement = $(cellIndex);
                    if (cellElement) {
                        cellElement.classList.add('powerup-frozen');
                        this.frozenCells.add(cellIndex);
                    }
                }
            }
        }
    }
};

PowerUpSystem.spaceInvadersKeyboardHandler = null;
    
// Applica ottimizzazioni quando la pagina viene caricata
document.addEventListener('DOMContentLoaded', function() {
    // Inizializza la lingua all'avvio
    updateUITexts(DictionarySystem.currentLanguage);
});

// Gestisci gli adattamenti anche durante il ridimensionamento
window.addEventListener('resize', function() {
    // Riapplica le ottimizzazioni in caso di cambio orientamento
    if (!document.getElementById('audio-start-overlay').style.display === 'none') {
        applyDeviceSpecificOptimizations();
        setupGameDimensions();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const logoVideo = document.getElementById('logo-video');
    
    // Precarica il video
    if (logoVideo) {
        logoVideo.load();
        
        // Assicurati che il video sia visibile e pronto
        logoVideo.addEventListener('loadeddata', function() {
            logoVideo.style.opacity = '1';
        });
        
        // Gestisci eventuali errori di caricamento
        logoVideo.addEventListener('error', function() {
            console.error('Errore nel caricamento del video logo');
            // Se il video non può essere caricato, mostra l'immagine fallback
            const fallbackImg = document.createElement('img');
            fallbackImg.src = 'img/logo.png';
            fallbackImg.alt = 'WordTris Logo';
            fallbackImg.className = 'start-logo';
            logoVideo.parentNode.replaceChild(fallbackImg, logoVideo);
        });
    }
});

document.getElementById('bomb-powerup').addEventListener('click', () => {
    PowerUpSystem.activatePowerUp('bomb');
});

document.getElementById('swap-powerup').addEventListener('click', () => {
    PowerUpSystem.activatePowerUp('swap');
});

document.getElementById('spaceinvaders-powerup').addEventListener('click', () => {
    PowerUpSystem.activatePowerUp('spaceinvaders');
});

document.getElementById('shuffle-powerup').addEventListener('click', () => {
    PowerUpSystem.activatePowerUp('shuffle');
});