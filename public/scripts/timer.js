// Defina a data alvo (exemplo: 31 de dezembro de 2024)
const targetDate = new Date("may 04, 2025 15:00:00").getTime();

// Atualiza a contagem regressiva a cada segundo
const countdown = setInterval(function() {
  
  // Obtenha a data e hora atuais
  const now = new Date().getTime();
  
  // Calcule a diferença de tempo entre agora e a data alvo
  let timeRemaining = targetDate - now;

 // Calcule o tempo em dias, horas, minutos e segundos
 const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
 const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
 const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Exiba o resultado no elemento com id "countdown"

    document.getElementById("dias").innerHTML = days + "<br> dias";  
    document.getElementById("horas").innerHTML = hours + "<br> horas";  
    document.getElementById("minutos").innerHTML = minutes + "<br> minutos"; 
    document.getElementById("segundos").innerHTML = seconds + "<br> segundos"; 
  
  // Se a contagem regressiva terminar, exiba uma mensagem
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "A contagem regressiva terminou!";
  }
}, 1000);