/* Proz JS I - D_extra 5_1_116252

Instruções do projeto
Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira a estrutura base HTML e dentro da tag 'body' inclua quatro tags vazias: h1, ul, a, ol. Adicione o atributo id="titulo" à tag h1, o atributo href="https://prozeducacao.com.br" à tag 'a', e o atributo id="lista-ordenada" à tag 'ol'. Na sequência, realize a conexão entre o arquivo HTML e o arquivo JavaScript.

No arquivo script.js capture os quatro elementos criados, e use a propriedade .innerText para adicionar conteúdo textual aos elementos 'h1' e 'a', e a propriedade .innerHTML para adicionar três itens simples na lista não ordenada, e três itens com links para outros sites na lista ordenada.*/

let elementH1 = document.querySelector("#titulo")

elementH1.innerText = "Prozeducação - Cursos"

let elementA = document.querySelector("a")

elementA.innerText = "Acesse o site e conheça os cursos!"

let elementUl = document.querySelector("ul")

elementUl.innerHTML = ` <li>Curso Html</li>
                        <li>Curso Css</li>
                        <li>Curso Javascript</li>`

let elementOl = document.querySelector("#lista-ordenada")

elementOl.innerHTML = ` <li><a href="https://facebook.com.br">Facebook</a></li>
                        <li><a href="https://instagram.com">instagram</a></li>
                        <li><a href="https://prozeducacao.com.br">Prozeducação</a></li>`



