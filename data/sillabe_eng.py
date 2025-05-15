import pyphen
import os
import sys
import argparse

def syllabify_dictionary(input_file, output_file):
    """
    Processa un file di testo contenente parole inglesi, una per riga,
    sillabandole e scrivendo il risultato nel formato "parola [sil-la-ba-zio-ne]".
    Esclude le parole di 2 lettere.
    """
    # Inizializza il dizionario Hunspell per l'inglese
    dic = pyphen.Pyphen(lang='en_US')
    
    # Contatori per statistiche
    total_words = 0
    processed_words = 0
    excluded_words = 0
    
    print(f"Inizio sillabazione del dizionario...")
    print(f"File di input: {os.path.abspath(input_file)}")
    print(f"File di output: {os.path.abspath(output_file)}")
    print(f"Nota: Le parole di 2 lettere verranno escluse dall'output")
    
    # Apri i file
    try:
        with open(input_file, 'r', encoding='utf-8') as infile, \
             open(output_file, 'w', encoding='utf-8') as outfile:
            
            # Leggi riga per riga
            for line in infile:
                word = line.strip()
                
                # Ignora linee vuote
                if not word:
                    continue
                    
                total_words += 1
                
                # Escludi parole di 2 lettere
                if len(word) == 2:
                    excluded_words += 1
                    continue
                
                try:
                    # Sillaba la parola
                    hyphenated = dic.inserted(word, hyphen='-')
                    
                    # Scrivi la parola e la sua sillabazione
                    outfile.write(f"{word} [{hyphenated}]\n")
                    processed_words += 1
                    
                    # Feedback per monitorare l'avanzamento ogni 1000 parole
                    if processed_words % 1000 == 0:
                        print(f"Processate {processed_words} parole...")
                        
                except Exception as e:
                    print(f"Errore durante la sillabazione di '{word}': {e}")
        
        # Statistiche finali
        print(f"\nCompletato! Processate {processed_words} parole su {total_words} totali.")
        print(f"Escluse {excluded_words} parole di 2 lettere.")
        print(f"Output salvato in: {os.path.abspath(output_file)}")
        
    except FileNotFoundError:
        print(f"Errore: Il file '{input_file}' non esiste.")
        sys.exit(1)
    except PermissionError:
        print(f"Errore: Permessi insufficienti per accedere ai file.")
        sys.exit(1)
    except Exception as e:
        print(f"Errore imprevisto: {e}")
        sys.exit(1)

def main():
    # Configurazione del parser degli argomenti
    parser = argparse.ArgumentParser(description='Sillaba un dizionario inglese, producendo un file con formato "parola [sil-la-ba-zio-ne]". Esclude parole di 2 lettere.')
    parser.add_argument('input_file', help='Il file di input contenente le parole da sillabare (una per riga)')
    parser.add_argument('output_file', help='Il file di output dove salvare il risultato')
    
    # Parsing degli argomenti
    args = parser.parse_args()
    
    # Esegui la sillabazione
    syllabify_dictionary(args.input_file, args.output_file)

# Esegui lo script se chiamato direttamente
if __name__ == "__main__":
    main()