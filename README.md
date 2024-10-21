# Verificador de Números Primos em JavaScript

Este projeto contém uma função em JavaScript que verifica se um número é primo. Um número primo é aquele que só pode ser dividido por 1 e por ele mesmo, sem deixar resto. O código utiliza uma lógica de otimização, verificando a divisibilidade apenas até a raiz quadrada do número.

## Como funciona

A função `ehPrimo(numero)` recebe um número como argumento e retorna `true` se o número for primo e `false` caso contrário. Ela verifica se o número é divisível por qualquer valor entre 2 e a raiz quadrada do número dado. Se encontrar algum divisor, o número não é primo.

## Requisitos

- Qualquer ambiente capaz de rodar JavaScript, como navegadores ou Node.js.

### Exemplo de uso

```javascript
ehPrimo(17); // Retorna true
ehPrimo(18); // Retorna false
