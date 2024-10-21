# Leitura de arquivo texto

try:

    nome_arquivo = "tecnico-2013.txt"
    arquivo = open(nome_arquivo,"r")

    while True:
        linha = arquivo.readline()
        if not linha: break
        print(linha,end="")
    arquivo.close()

except:
    print("Arquivo não encontrado.")