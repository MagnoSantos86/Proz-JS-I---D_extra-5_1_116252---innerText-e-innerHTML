/*Desenvolvimento Extra 5.2 #116262

Instruções do projeto
Acesse o site OneCompiler (link em anexo) e crie uma função que recebe dois números como parâmetros e imprime quatro frases no terminal (a partir de template strings) demonstrando as quatro operações básicas aplicadas a ambos os números. Exemplo:

4 + 5 = 9
4 - 5 = -1
4 x 5 = 20
4 / 5 = 0,8 */

função op_aritmeticos(n1,n2){
deixe res =`${n1} + ${n2} = ${n1 + n2}
${n1} - ${n2} = ${n1 - n2}
${n1} × ${n2} = ${n1 * n2}
${n1} / ${n2} = ${n1 / n2}`;

console.log(res);

}

op_aritmeticos(10,5);