window.onload = () => {
    "use strict";
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js");
    };
  };
  
  //nome equipe 1
  function equipe1() {
    let equipe = document.getElementById("nome").value;
    if (equipe != "") {
      texto.innerText = equipe;
    } else {
      texto.innerText = "Adicione o nome de sua equipe"
    }
  }
  
  //nome equipe 2
  function equipe2() {
    let equipe = document.getElementById("nome2").value;
    if (equipe != "") {
      texto2.innerText = equipe;
    } else {
      texto2.innerText = "Adicione o nome de sua equipe"
    }
  }
  
  //pontos equipe 1
  calculaMaisUmPonto = () => {
    const pontuacao = document.getElementById('resultado').innerHTML;
    const novaPontuacao = parseInt(pontuacao);
    document.getElementById('resultado').innerHTML = (novaPontuacao + 1);
  }
  
  calculaMaisTresPonto = () => {
    const pontuacao = document.getElementById('resultado').innerHTML;
    const novaPontuacao = parseInt(pontuacao);
    document.getElementById('resultado').innerHTML = (novaPontuacao + 3);
  }
  
  calculaMaisSeisPonto = () => {
    const pontuacao = document.getElementById('resultado').innerHTML;
    const novaPontuacao = parseInt(pontuacao);
    document.getElementById('resultado').innerHTML = (novaPontuacao + 6);
  }
  
  calculaMaisDozePonto = () => {
    const pontuacao = document.getElementById('resultado').innerHTML;
    const novaPontuacao = parseInt(pontuacao);
    document.getElementById('resultado').innerHTML = (novaPontuacao + 12);
  }
  
  //pontos equipe 2
  calculaMaisUmPontos = () => {
    const pontuacao2 = document.getElementById('resultado2').innerHTML;
    const novaPontuacao2 = parseInt(pontuacao2);
    document.getElementById('resultado2').innerHTML = (novaPontuacao2 + 1);
  }
  
  calculaMaisTresPontos = () => {
    const pontuacao2 = document.getElementById('resultado2').innerHTML;
    const novaPontuacao2 = parseInt(pontuacao2);
    document.getElementById('resultado2').innerHTML = (novaPontuacao2 + 3);
  }
  
  calculaMaisSeisPontos = () => {
    const pontuacao2 = document.getElementById('resultado2').innerHTML;
    const novaPontuacao2 = parseInt(pontuacao2);
    document.getElementById('resultado2').innerHTML = (novaPontuacao2 + 6);
  }
  
  calculaMaisDozePontos = () => {
    const pontuacao2 = document.getElementById('resultado2').innerHTML;
    const novaPontuacao2 = parseInt(pontuacao2);
    document.getElementById('resultado2').innerHTML = (novaPontuacao2 + 12);
  }
  
  // const pontuacao = document.getElementById('resultado').value;
  // const novaPontuacao = parseInt(pontuacao);
  // const num = 12
  // if (novaPontuacao >= 12) {
  //   alert("Parabéns");
  // }