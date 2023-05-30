let questions = [
    {
      question: "1-El pádel nació en 1985",
      answer: false
    },
    {
      question: "2-La cancha de pádel mide 20 m de largo y 10 m de ancho ",
      answer: true
    },
    {
      question: "3-La pelota puede picar dos veces antes de ser golpeada",
      answer: false
    },
    {
      question: "4-Los puntos se cuentan como en el tenis",
      answer: true
    },
    {
      question: "5-Es importante jugar con un calzado adecuado ",
      answer: true
    },
    {
      question: "6-Las pelotas son exactamente iguales a las de tenis",
      answer: false
    },
    {
      question:"7-Solo pueden practicarlo los profesionales",
      answer: false
    },
    {
      question:"8-Jugar al pádel tiene beneficios físicos y mentales",
      answer: true
    },
    {
      question:"9-Se pueden usar raquetas con cuerdas similares a las de tenis",
      answer: false
    },
    {
      question:"10-El argentino Fernando Belasteguín es uno de los mejores juagdores del mundo",
      answer: true
    },

  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function checkAnswer(userAnswer) {
    let resultElement = document.getElementById("result");
    
    if (userAnswer === questions[currentQuestion].answer) {
      resultElement.innerHTML = "¡Correcto!";
      score++;
    } else {
      resultElement.innerHTML = "Incorrecto. La respuesta correcta es " + (questions[currentQuestion].answer ? "Verdadero" : "Falso") + ".";
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endGame();
    }
  }
  
  function showQuestion() {
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = questions[currentQuestion].question;
  }
  
  function endGame() {
    let questionElement = document.getElementById("question");
    let resultElement = document.getElementById("result");
  
    questionElement.innerHTML = "Fin del juego";
    resultElement.innerHTML = "Puntuación final: " + score;
    document.getElementsByTagName("button")[0].disabled = true;
    document.getElementsByTagName("button")[1].disabled = true;
  }
  
  showQuestion();
  