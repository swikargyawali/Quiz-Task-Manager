let person = prompt("Enter your username");

if (!person || person.trim() === "") {
  person = prompt("Please enter a valid name");
}

let user={
    name:person,
    score:0,
    tasks: []
};

alert("Welcome "+ user.name+ "!");

let choice=prompt(`Hi ${user.name}! Select an option:\n1 -> Quiz\n2-> Task manager\n3 -> Exit`);

choice= Number(choice);

if(!choice||choice<1||choice>3){
    alert("Please enter a valid number between 1 to 3");
}
else{
    switch (choice) {
      case 1:
        alert("Quiz Mode Selected!");
        break;
      case 2:
        alert("Task Manager Selected!");
        break;
      case 3:
        alert("Goodbye!");
        break;
      default:
        alert("Unexpected input");
    }
}

// Show loading screen using setTimeout
alert("Loading Quiz...");

setTimeout(() => {
    let questions = [
      {
        question: "What is the capital of Nepal" ?
        answer : "Kathmandu",
      },
      {
        question: "2 + 2 equals?",
        answer: "4",
      },
      {
        question: "Which keyword is used to declare a constant in JS?",
        answer: "const",
      },
      {
        question: "What data type is true/false?",
        answer: "boolean",
      },
      {
        question: "Which method removes whitespace from a string?",
        answer: "trim",
      }
    ];

    let score=0;

    //Asking 5 questions using loop

    for(let i=0;i<questions.length;i++){
        let userAns=prompt(questions[i].question);

        if(!userAns){
            alert("No answer given!");
            continue;
        }
        if(userAns.trim().toLowerCase()===questions[i].answer){
            alert("✅ Correct!");
            score++;
        }
        else {
      alert(`❌ Wrong! Correct answer: ${questions[i].answer}`);
    }
    }
     // Final result
  alert(`Quiz Completed!\nYour Score: ${score} / ${questions.length}`);

  // Save score in user object
  user.score = score;

  alert(`Hi ${user.name}, your final quiz score is ${user.score}! 🎉`);
    
}, 1000);

