# Define a tupla t, atribui 3 no primeiro elemento e imprime t e t[0]
t = ([1, 2], 4)
t[0].append(3)
print(t)
print(t[0])

# Atribui a, b e c aos elementos respectivos de l e imprime a soma deles
l = [1, 2, 3]
a, b, c = l
print(a, '+', b, '+', c, '=', a+b+c)

# Endereça e atribui nome ao espaço de memória como resto e fazem-se
# atribuições do mesmo em algumas posições da tupla e os imprimem.
l = [1, 2, 3, 4, 5]
a, b, *resto = l
a, b, resto
print(a)
print(b)
print(resto)

*resto, a, b = l
print(resto)
print(a)
print(b)

a, *resto, b = l
print(a)
print(b)
print(resto)

