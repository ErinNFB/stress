var quiz = [
    {
        "question": "I get at least one hot, balanced meal a day.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I get seven to eight hours sleep four nights a week.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I give and receive affection regularly.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I have at least one relative within 50kms on whom I can rely.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I exercise to the point of perspiration at least twice per week.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I smoke less than half a pack of cigarettes a day.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I have fewer than five alcoholic drinks per week.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I am an appropriate weight for my height.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I have an income adequate to meet basic expenses.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I get strength from my spiritual beliefs.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    },     {
        "question": "I regularly attend club or social activities.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I have a network of friends and acquaintances.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I have one or more friends to confide in about personal matters.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I am in good health (including eye sight, hearing, and teeth).",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I am able to speak openly about my feelings when angry or worried.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I have regular conversations with the people I live with about domestic problems (chores, money and daily living issues).",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I do something for fun at least once per week.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I am able to organize my time effectively.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I drink fewer than three cups of coffee per day (or tea, or cola drinks).",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }, {
        "question": "I take quiet time for myself during the day.",
        "choices": ["never", "rarely", "sometimes", "often", "always"],
        "answer": [5, 4, 3, 2, 1]
    }
];
// define elements

// init vars
var currentQuestion = 0,
    score = 0;

function $(id) { // shortcut for document.getElementById
    return document.getElementById(id);
}

var content = $("content"),
    questionContainer = $("questionContainer"),
    choicesContainer = $("choicesContainer"),
    scoreContainer = $("scoreContainer"),
    submitBtn = $("submitBtn");


function askQuestion() {
    var choices = quiz[currentQuestion].choices,
        choicesHtml = "";

    // loop through choices, and create radio buttons
    for (var i = 0; i < choices.length; i++) {
        choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
        "' id='choice" + (i + 1) +
        "' value='" + choices[i] + "'>" +
        " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
    }

    // load the question
    questionContainer.textContent = (currentQuestion + 1) + ". " +
    quiz[currentQuestion].question;

    // load the choices
    choicesContainer.innerHTML = choicesHtml;
}

function checkAnswer() {
    // determine which radio button they clicked
    var radios = document.getElementsByName("quiz" + currentQuestion);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) { // if this radio button is checked
            score = score + quiz[currentQuestion].answer[i];
        }
    }

    // if we're not on last question, increase question number
    if (currentQuestion < quiz.length - 1) {
        currentQuestion++;
        askQuestion();
    } else {
        showFinalResults();
        submitBtn.style.display = 'none';
    }

}

function showFinalResults() {
    var resultString = "";
    for (var i = 0; i < 1; i += 1) {
        resultString += score + "<br />";
    }
    questionContainer.innerHTML = "";
    choicesContainer.innerHTML = "";
    scoreContainer.innerHTML =
     "<h1>You've completed the Stress Vulnerability Assessment.</h1>" +
    "<h1>Your results:</h1>" +
    score + "%";



	   if(score <30) {
document.getElementById("results2").innerHTML = "Stress Vulnerable";
}

   if(score >=30 && score <50) {
document.getElementById("results2").innerHTML = "Somewhat Vulnerable to Stress";
}

   if(score >=50 && score <75) {
document.getElementById("results2").innerHTML = "Seriously Vulnerable to Stress";
}
	
	if(score >=75) {
document.getElementById("results2").innerHTML = "Extremely Vulnerable to Stress";
}   


  
	  var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ['RESILIENCY'],
    datasets: [  {
    label: 'Resiliency',
    data: [100 - score],
    backgroundColor: '#3e95cd' // blue
  },
  {
    label: 'Vulnerable',
    data: [score],
    backgroundColor: '#ff0000' // red
  }]

  },
  options: {
  		responsive: true,
      title: {
        display: false,
        text: 'Risk Score',
      },
      legend: { display: false },
      scales: {
                xAxes: [{
                	stacked: true,
                    ticks: {
                        beginAtZero: true,
                        max: 100,
                		min: 0,
                		stepSize: 100,

                    // Include a label for the ticks
                    callback: function(value, index, values) {
                        if (Math.floor(value) === 0){
        					return 'RESILIENT';
      					}else if ([100]){
                        	return 'VULNERABLE';
                        	}
                    }
                    }
                }],
                yAxes: [{
                	stacked: true,
                	display: false,
 					barThickness: 20               
                }]           
            }
     
    }
    
});
}

 var startOver = document.getElementById('startOver');

    startOver.addEventListener('click', function(e) {
      location.reload();
    }, false);



window.addEventListener("load", askQuestion, false);
submitBtn.addEventListener("click", checkAnswer, false);