/* Trocar foto galeria */

const imagens = document.querySelectorAll('.bike-galeria__fotos-secundarias li img');
const imagemPrincipal = document.querySelector('.bike-galeria__foto-principal');

function trocarImagem(event){ 

  const imagemClicada = event.currentTarget;
  imagemPrincipal.src = imagemClicada.src
  imagemPrincipal.alt = imagemClicada.alt

}

function galeriaClick(imagem) { 

imagem.addEventListener('click', trocarImagem)
}

imagens.forEach(galeriaClick); 


const botoes = document.querySelectorAll('.perguntas button')
const respostas = document.querySelector('.perguntas .perguntas__respostas');



/* 

function ativarResposta() { 
  
  respostas.classList.toggle('perguntas__respostas--ativo')
   
}

function clickBotoes(botao) { 
 
botao.addEventListener('click', ativarResposta)
}




botoes.forEach(clickBotoes) */

/* Manter Menu ativo */

const links = document.querySelectorAll('.header__menu a');

function ativarLinks(link) { 

  const url = window.location.href
  const href = link.href
  
  if(url.includes(href)) { 
    link.classList.add('header__menu--ativo')
  }
}

links.forEach(ativarLinks)