// js/audio.js (con l'aggiunta del suono di switch)

// Sistema audio semplificato
const AudioSystem = {
    audioContext: null,
    backgroundMusic: document.getElementById('background-music'),
    hurryUpSound: document.getElementById('hurry-up-sound'),
    explodeSound: document.getElementById('explode-sound'),
    levelUpSound: document.getElementById('level-up-sound'),
    sfxGainNode: null,
    backgroundMusicActive: true,
    backgroundMusicLoaded: false,
    
    // Impostazioni suoni
    sounds: {
        drop: { freqs: [220, 165], durations: [0.05, 0.1] },
        selectVowel: { freqs: [440, 660], durations: [0.1, 0.1] },
        selectConsonant: { freqs: [550, 330], durations: [0.1, 0.1] },
        word: { freqs: [440, 493, 523, 587], durations: [0.08, 0.08, 0.08, 0.2] },
        // NUOVO: Suono per lo switch
        switch: { freqs: [660, 880, 660], durations: [0.08, 0.1, 0.08] },
        // NUOVO: Suono per errore
        error: { freqs: [220, 180], durations: [0.1, 0.2] },
        bombExplosion: { 
            custom: true, 
            generate: function(audioContext, gainNode) {
                const duration = 1.2;
                const now = audioContext.currentTime;
                
                // Suono 1: Boom basso
                const boom = audioContext.createOscillator();
                const boomGain = audioContext.createGain();
                boom.type = 'sawtooth';
                boom.frequency.setValueAtTime(120, now);
                boom.frequency.exponentialRampToValueAtTime(30, now + 0.8);
                boomGain.gain.setValueAtTime(0.01, now);
                boomGain.gain.exponentialRampToValueAtTime(0.7, now + 0.05);
                boomGain.gain.exponentialRampToValueAtTime(0.01, now + 1.0);
                boom.connect(boomGain);
                boomGain.connect(gainNode);
                boom.start(now);
                boom.stop(now + duration);
                
                // Suono 2: Rumore esplosione
                const bufferSize = audioContext.sampleRate * 1.5;
                const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
                const output = noiseBuffer.getChannelData(0);
                
                // Generazione del rumore bianco
                for (let i = 0; i < bufferSize; i++) {
                    output[i] = Math.random() * 2 - 1;
                }
                
                // Suono "scoppio"
                const noise = audioContext.createBufferSource();
                const noiseGain = audioContext.createGain();
                const noiseFilter = audioContext.createBiquadFilter();
                
                noise.buffer = noiseBuffer;
                noiseFilter.type = 'lowpass';
                noiseFilter.frequency.setValueAtTime(8000, now);
                noiseFilter.frequency.exponentialRampToValueAtTime(800, now + 0.6);
                noiseGain.gain.setValueAtTime(0.01, now);
                noiseGain.gain.exponentialRampToValueAtTime(0.25, now + 0.05);
                noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 1.0);
                
                noise.connect(noiseFilter);
                noiseFilter.connect(noiseGain);
                noiseGain.connect(gainNode);
                
                noise.start(now);
                noise.stop(now + duration);
                
                // Suono 3: Riverbero post-esplosione
                setTimeout(() => {
                    const reverb = audioContext.createOscillator();
                    const reverbGain = audioContext.createGain();
                    const reverbFilter = audioContext.createBiquadFilter();
                    
                    reverb.type = 'sine';
                    reverb.frequency.setValueAtTime(400, now + 0.1);
                    reverb.frequency.exponentialRampToValueAtTime(100, now + 1.0);
                    
                    reverbFilter.type = 'bandpass';
                    reverbFilter.frequency.value = 200;
                    reverbFilter.Q.value = 3;
                    
                    reverbGain.gain.setValueAtTime(0.05, now + 0.1);
                    reverbGain.gain.exponentialRampToValueAtTime(0.01, now + 1.0);
                    
                    reverb.connect(reverbFilter);
                    reverbFilter.connect(reverbGain);
                    reverbGain.connect(gainNode);
                    
                    reverb.start(now + 0.1);
                    reverb.stop(now + duration);
                }, 100);
            }
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
                
                oscillator.type = type === 'bombExplosion' ? 'sawtooth' : 'sine';
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
        // Assicurati che AudioContext sia pronto
        if (!this.audioContext) this.initialize();
        
        // Riproduci il suono sintetizzato
        this.playSynthSound(type);
    }
};

// Funzione di utilità per riprodurre i suoni
function playSound(soundType) {
    AudioSystem.playSound(soundType);
}
// Aggiungi questo alla fine del file o all'interno dell'oggetto AudioSystem

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
