// js/audio.js

// Sistema audio semplificato
const AudioSystem = {
    audioContext: null,
    backgroundMusic: document.getElementById('background-music'),
    hurryUpSound: document.getElementById('hurry-up-sound'),
    explodeSound: document.getElementById('explode-sound'),
    bombSound: document.getElementById('bomb-sound'),
    levelUpSound: document.getElementById('level-up-sound'),
    wordSound: document.getElementById('word-sound'),
    sfxGainNode: null,
    backgroundMusicActive: true,
    backgroundMusicLoaded: false,
    
    // Impostazioni suoni per la sintesi
    sounds: {
        word: {
            freqs: [440, 523.25, 659.25],
            durations: [0.1, 0.1, 0.2]
        },
        move: {
            freqs: [300, 350],
            durations: [0.05, 0.05]
        },
        rotate: {
            freqs: [350, 400],
            durations: [0.05, 0.05]
        },
        drop: {
            freqs: [300, 250, 200],
            durations: [0.05, 0.05, 0.1]
        },
        lock: {
            freqs: [400, 300],
            durations: [0.05, 0.1]
        },
        clear: {
            freqs: [440, 494, 523, 587, 659, 698, 784],
            durations: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.2]
        },
        gameOver: {
            freqs: [400, 350, 300, 250, 200, 150, 100],
            durations: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.3]
        }
    },
    
    initialize() {
        try {
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                
                // Crea il nodo di guadagno per effetti sonori
                this.sfxGainNode = this.audioContext.createGain();
                this.sfxGainNode.gain.value = 0.7; // Volume SFX al 70%
                this.sfxGainNode.connect(this.audioContext.destination);
                
                // Gestione della musica di sottofondo
                this.initBackgroundMusic();
                
                // Inizializza i controlli dell'interfaccia
                this.setupUIControls();
            }
            console.log("Sistema audio inizializzato");
        } catch (e) {
            console.error("Errore inizializzazione audio:", e);
        }
    },
    
    setupUIControls() {
        // Toggle musica
        const musicToggle = document.getElementById('toggle-music');
        if (musicToggle) {
            musicToggle.addEventListener('click', () => {
                this.toggleBackgroundMusic();
                musicToggle.textContent = this.backgroundMusicActive ? 'Musica: ON' : 'Musica: OFF';
                musicToggle.className = this.backgroundMusicActive ? 'active' : '';
            });
        }
    },
    
    initBackgroundMusic() {
        if (!this.backgroundMusic) {
            console.error("Elemento audio per la musica di sottofondo non trovato");
            return;
        }
        
        // Mostra indicatore di caricamento
        const loadingIndicator = document.getElementById('audio-loading');
        
        // Imposta il volume a un valore più basso (20%)
        this.backgroundMusic.volume = 0.2;
        
        // Gestisci eventi di caricamento audio
        this.backgroundMusic.addEventListener('canplaythrough', () => {
            console.log("Musica di sottofondo caricata");
            this.backgroundMusicLoaded = true;
            
            if (loadingIndicator) {
                loadingIndicator.classList.add('hidden');
            }
            
            // Avvia la riproduzione se attivo
            if (this.backgroundMusicActive) {
                this.playBackgroundMusic();
            }
        });
        
        this.backgroundMusic.addEventListener('error', (e) => {
            console.error("Errore caricamento musica di sottofondo:", e);
            if (loadingIndicator) {
                loadingIndicator.textContent = "Errore caricamento musica";
                setTimeout(() => {
                    loadingIndicator.classList.add('hidden');
                }, 3000);
            }
        });
        
        // Gestione dell'aggiornamento dell'elemento audio
        if (this.backgroundMusic.networkState === 1) {
            // Già caricato
            this.backgroundMusicLoaded = true;
            if (loadingIndicator) loadingIndicator.classList.add('hidden');
            if (this.backgroundMusicActive) this.playBackgroundMusic();
        }
    },
    
    playBackgroundMusic() {
        if (!this.backgroundMusic || !this.backgroundMusicLoaded) return;
        
        const playPromise = this.backgroundMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.warn("Errore riproduzione musica di sottofondo:", error);
            });
        }
    },
    
    stopBackgroundMusic() {
        if (!this.backgroundMusic) return;
        this.backgroundMusic.pause();
    },
    
    toggleBackgroundMusic() {
        this.backgroundMusicActive = !this.backgroundMusicActive;
        
        if (this.backgroundMusicActive) {
            this.playBackgroundMusic();
        } else {
            this.stopBackgroundMusic();
        }
    },
    
    playHurryUp() {
        if (!this.hurryUpSound) {
            console.error("Elemento audio per il suono hurry-up non trovato");
            return;
        }
        
        try {
            // Resetta il suono se stava già suonando
            this.hurryUpSound.pause();
            this.hurryUpSound.currentTime = 0;
            
            // Imposta volume al 70%
            this.hurryUpSound.volume = 0.7;
            
            // Riproduci il suono
            const playPromise = this.hurryUpSound.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.warn("Errore riproduzione suono hurry-up:", error);
                });
            }
        } catch (e) {
            console.error("Errore riproduzione hurry-up:", e);
        }
    },
    
    stopHurryUp() {
        if (!this.hurryUpSound) return;
        
        try {
            this.hurryUpSound.pause();
            this.hurryUpSound.currentTime = 0;
        } catch (e) {
            console.error("Errore arresto hurry-up:", e);
        }
    },
    
    playExplode() {
        if (!this.explodeSound) {
            console.error("Elemento audio per il suono explode non trovato");
            return;
        }
        
        try {
            // Resetta il suono se stava già suonando
            this.explodeSound.pause();
            this.explodeSound.currentTime = 0;
            
            // Imposta volume al 70%
            this.explodeSound.volume = 0.7;
            
            // Riproduci il suono
            const playPromise = this.explodeSound.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.warn("Errore riproduzione suono explode:", error);
                });
            }
        } catch (e) {
            console.error("Errore riproduzione explode:", e);
        }
    },
    
    playBomb() {
        if (!this.bombSound) {
            console.error("Elemento audio per il suono della bomba non trovato");
            return;
        }
        
        try {
            // Resetta il suono se stava già suonando
            this.bombSound.pause();
            this.bombSound.currentTime = 0;
            
            // Imposta volume al 70%
            this.bombSound.volume = 0.7;
            
            // Riproduci il suono
            const playPromise = this.bombSound.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.warn("Errore riproduzione suono della bomba:", error);
                });
            }
        } catch (e) {
            console.error("Errore riproduzione bomba:", e);
        }
    },
    
    playWord() {
        if (this.wordSound) {
            try {
                // Resetta e riproduci il file audio
                this.wordSound.pause();
                this.wordSound.currentTime = 0;
                this.wordSound.volume = 0.7;
                this.wordSound.play().catch(error => {
                    console.warn("Errore riproduzione suono word:", error);
                    // Fallback sulla sintesi
                    this.playSynthSound('word');
                });
            } catch (e) {
                console.error("Errore riproduzione word:", e);
                this.playSynthSound('word');
            }
        } else {
            // Usa la sintesi se il file audio non è disponibile
            this.playSynthSound('word');
        }
    },
    
    playLevelUp() {
        if (!this.levelUpSound) {
            console.error("Elemento audio per il suono level-up non trovato");
            return;
        }
        
        try {
            // Resetta il suono se stava già suonando
            this.levelUpSound.pause();
            this.levelUpSound.currentTime = 0;
            
            // Imposta volume al 70%
            this.levelUpSound.volume = 0.7;
            
            // Riproduci il suono
            const playPromise = this.levelUpSound.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.warn("Errore riproduzione suono level-up:", error);
                });
            }
        } catch (e) {
            console.error("Errore riproduzione level-up:", e);
        }
    },
    
    playSynthSound(type) {
        try {
            if (!this.audioContext) this.initialize();
            
            const soundData = this.sounds[type];
            if (!soundData) return;
            
            // Feedback visivo
            const indicator = document.getElementById('sound-indicator');
            if (indicator) {
                indicator.textContent = `♪ ${type}`;
                indicator.classList.add('active');
                setTimeout(() => indicator.classList.remove('active'), 1000);
            }
            
            // Se abbiamo un suono custom, usa il generatore dedicato
            if (soundData.custom&&typeof soundData.generate === 'function') {
                soundData.generate(this.audioContext, this.sfxGainNode);
                return;
            }
            
            // Altrimenti usa il generatore standard
            let startTime = this.audioContext.currentTime;
            
            for (let i = 0; i < soundData.freqs.length; i++) {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.type = 'sine';
                oscillator.frequency.value = soundData.freqs[i];
                
                gainNode.gain.setValueAtTime(0.001, startTime);
                gainNode.gain.exponentialRampToValueAtTime(0.3, startTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + soundData.durations[i]);
                
                oscillator.connect(gainNode);
                gainNode.connect(this.sfxGainNode);
                
                oscillator.start(startTime);
                oscillator.stop(startTime + soundData.durations[i]);
                
                startTime += soundData.durations[i];
            }
        } catch (e) {
            console.error(`Errore riproduzione suono sintetizzato ${type}:`, e);
        }
    },
    
    playSound(type) {
        // Caso speciale per parola trovata
        if (type === 'word') {
            this.playWord();
            return;
        }
        
        // Per tutti gli altri suoni
        this.playSynthSound(type);
    }
};

// Funzione di utilità per riprodurre i suoni
function playSound(soundType) {
    AudioSystem.playSound(soundType);
}

// Gestione pausa automatica quando la pagina va in background
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // L'app è andata in background
        if (AudioSystem.backgroundMusicActive&&AudioSystem.backgroundMusic&&!AudioSystem.backgroundMusic.paused) {
            // Salva lo stato corrente e metti in pausa
            AudioSystem.backgroundMusic._wasPlaying = true;
            AudioSystem.stopBackgroundMusic();
            
            // Ferma anche il suono hurry-up se attivo
            if (AudioSystem.hurryUpSound&&!AudioSystem.hurryUpSound.paused) {
                AudioSystem.stopHurryUp();
            }
        }
    } else {
        // L'app è tornata in primo piano
        if (AudioSystem.backgroundMusicActive&&AudioSystem.backgroundMusic&&AudioSystem.backgroundMusic._wasPlaying) {
            // Riprendi solo se era in riproduzione prima
            AudioSystem.playBackgroundMusic();
            AudioSystem.backgroundMusic._wasPlaying = false;
        }
    }
});