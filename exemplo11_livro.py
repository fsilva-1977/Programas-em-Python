print('Python'[::-1]) # Mostra: nohtyP

# Importando o módulo string
import string
# O alfabeto
a = string.ascii_letters
# Rodando o alfabeto um caractere para a esquerda
b = a[1:] + a[0]
# A função maketrans() cria uma tabela de tradução
# entre os caracteres das duas strings que ela
# recebe como parâmetro.
tab = str.maketrans(a, b)

# A mensagem...
msg = '''Esse texto será traduzido...
Vai ficar bem estranho.
'''

# A função translate() usa a tabela de tradução
# criada pela maketrans() para traduzir uma string
print(msg.translate(tab))