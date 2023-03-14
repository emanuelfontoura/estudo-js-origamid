const animaisImagens = Array.from(window.document.querySelectorAll('div.animais-imagens-container > img'))
const animaisConteudo = Array.from(window.document.querySelectorAll('div.animais-texto-container > div'))
  
// FUNÇÃO DE MOSTRAR O CONTEÚDO DE ACORDO COM A IMAGEM CLICADA

// for (let i = 0; i < animaisImagens.length; i++) {
//     animaisImagens[i].addEventListener('click', () => {
//         for (let j = 0; j < animaisConteudo.length; j++) {
//             if (j === i) {
//                 animaisConteudo[j].classList.add('ativar');
//             } else {
//                 animaisConteudo[j].classList.remove('ativar');
//             }
//         }
//     });
// }

// A MESMA FUNCIONALIDADE DE CIMA, PORÉM USANDO O .FOREACH AO INVÉS DO FOR
// ESSA FORMA AQUI É MAIS OTIMIZADA, JÁ QUE NÃO PRECISA DA CRIAÇÃO DE VARIÁVEIS PARA CONTROLE DE ÍNDICE

// animaisImagens.forEach((imagem, index) => {
//     imagem.addEventListener('click', () => {
//         animaisConteudo.forEach((conteudo, conteudoIndex) => {
//             if (conteudoIndex === index) {
//                 conteudo.classList.add('ativar');
//             } else {
//                 conteudo.classList.remove('ativar');
//             }
//         });
//     });
// });