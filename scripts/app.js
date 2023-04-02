
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


















/* Passar parâmetros */

const parametros = new URLSearchParams(location.search) 


function mostrarParametros(parametro) { 


  const elemento = document.getElementById(parametro)
  
  if (elemento) { 
    elemento.checked = true
  }

}

parametros.forEach(mostrarParametros)






/* Esconder e mostrar respostas  */

const perguntas = document.querySelectorAll('.perguntas button')


function ativarPergunta(event) { 

  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)

  resposta.classList.toggle("resposta--ativa")

  const ativa = resposta.classList.contains('resposta--ativa')
  pergunta.setAttribute('aria-expanded', ativa)
}

function eventosPerguntas(perguntas) { 

  perguntas.addEventListener('click', ativarPergunta)

}




perguntas.forEach(eventosPerguntas)






























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



