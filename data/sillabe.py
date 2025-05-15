import pyphen
import sys

def syllabify_italian_word(word):
    """
    Funzione che sillaba una parola italiana usando la libreria pyphen.
    Restituisce una lista di sillabe.
    """
    # Ignora parole vuote o con apostrofo
    if not word or "'" in word:
        return None

    # Inizializza il dizionario di sillabazione italiano
    dic = pyphen.Pyphen(lang='it_IT')
    
    # Ottieni la parola sillabata con trattini
    hyphenated = dic.inserted(word, hyphen='-')
    
    # Restituisci la lista delle sillabe
    return hyphenated.split('-')

def process_file(input_file, output_file):
    """
    Legge le parole dal file di input, le sillaba e scrive il risultato nel file di output.
    """
    try:
        with open(input_file, 'r', encoding='utf-8') as infile, \
             open(output_file, 'w', encoding='utf-8') as outfile:
            
            for line in infile:
                word = line.strip()
                if not word:
                    continue
                    
                syllables = syllabify_italian_word(word)
                if syllables:
                    syllable_str = '-'.join(syllables)
                    outfile.write(f"{word} [{syllable_str}]\n")
                else:
                    # Se la parola non può essere sillabata (es. contiene apostrofo),
                    # scrivila comunque nel file di output senza sillabazione
                    outfile.write(f"{word} [non sillababile]\n")
                    
        return True
    
    except Exception as e:
        print(f"Errore durante l'elaborazione: {e}")
        return False

def main():
    """
    Funzione principale che gestisce gli argomenti della riga di comando.
    """
    if len(sys.argv) != 3:
        print("Uso: python sillabazione.py input.txt output.txt")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    success = process_file(input_file, output_file)
    
    if success:
        print(f"Elaborazione completata. Risultato salvato in {output_file}")
    else:
        print("Si è verificato un errore durante l'elaborazione.")
        sys.exit(1)

if __name__ == "__main__":
    main()
