const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let count = 0;
let getBackBtn = document.createElement("button");

getBackBtn.classList = "myBtn start";

let container = document.querySelector("#container");
document.getElementById("myBtn2").onclick = function () {
  container.innerHTML = "";
  let newDiv = document.createElement("div");
  let newDiv2 = document.createElement("div");
  let getBackBtn = document.createElement("button");
  let quitBtn = document.createElement("button");
  getBackBtn.classList = "myBtn start";
  getBackBtn.setAttribute("id", "start");
  let class1 = document.createTextNode("start");
  getBackBtn.appendChild(class1);
  getBackBtn.innerText = "Start";
  newDiv2.appendChild(getBackBtn);
  newDiv2.appendChild(quitBtn);
  quitBtn.classList = " quit myBtn2";
  quitBtn.innerText = "Quit";
  newDiv.innerText = "You quitted";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  newDiv.style.fontFamily = "fjalla";
  newDiv.style.color = "coral";
  container.appendChild(newDiv);
  container.appendChild(newDiv2);
};
document.querySelectorAll(".start").onclick = function () {
  let container = document.querySelector("#container");

  container.innerHTML = "";
  let newDiv = document.createElement("div");
  let newDiv2 = document.createElement("div");
  let submit = document.createElement("button");
  let quitBtn = document.createElement("button");
  let answers = document.createElement("ol");

  let class1 = document.createTextNode("start");
  submit.appendChild(class1);
  answers.className = "list";
  let arrOfAnswers = [
    "Central Processing Unit",
    "Central Process Unit",
    "Computer Personal Unit",
    "Central Processor Unit",
  ];
  for (let i = 0; i < arrOfAnswers.length; i++) {
    let option = document.createElement("li");
    option.innerText = arrOfAnswers[i];
    answers.appendChild(option);
    answers.style.listStyleType = "upper-alpha";
  }
  let input = document.createElement("input");
  input.type = "text";

  // submit.classList = "submit myBtn";
  submit.innerText = "Submit";
  newDiv2.style.padding = "0px";
  newDiv2.style.marginBottom = "40px";
  newDiv2.style.height = "100px";
  newDiv2.style.marginTop = "0";
  newDiv2.append(input);
  newDiv2.appendChild(submit);
  newDiv2.appendChild(quitBtn);
  // quitBtn.classList = "quit myBtn2";
  quitBtn.innerText = "Quit";
  newDiv.innerText = "What does CPU stand for?";
  newDiv.style.marginLeft = "30%";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  newDiv.style.fontFamily = "fjalla";
  newDiv.style.color = "coral";
  newDiv.style.marginBottom = "0px";
  newDiv.appendChild(answers);
  // newDiv.appendChild()

  container.appendChild(newDiv);
  container.appendChild(newDiv2);
};
// document.getElementById("myBtn").onclick = function () {
//   let container = document.querySelector("#container");

//   container.innerHTML = "";
//   let newDiv = document.createElement("div");
//   let newDiv2 = document.createElement("div");
//   let submit = document.createElement("button");
//   let quitBtn = document.createElement("button");
//   let answers = document.createElement("ol");
//   answers.className = "list";
//   let arrOfAnswers = [
//     "Central Processing Unit",
//     "Central Process Unit",
//     "Computer Personal Unit",
//     "Central Processor Unit",
//   ];
//   for (let i = 0; i < arrOfAnswers.length; i++) {
//     let option = document.createElement("li");
//     option.innerText = arrOfAnswers[i];
//     answers.appendChild(option);
//     answers.style.listStyleType = "upper-alpha";
//   }
//   let input = document.createElement("input");
//   input.type = "text";

//   submit.classList = "submit myBtn";
//   submit.innerText = "Submit";
//   newDiv2.style.padding = "0px";
//   newDiv2.style.marginBottom = "40px";
//   newDiv2.style.height = "100px";
//   newDiv2.style.marginTop = "0";
//   newDiv2.append(input);
//   newDiv2.appendChild(submit);
//   newDiv2.appendChild(quitBtn);
//   quitBtn.classList = "quit myBtn2";
//   quitBtn.innerText = "Quit";
//   newDiv.innerText = "What does CPU stand for?";
//   newDiv.style.marginLeft = "30%";
//   newDiv.style.justifyContent = "center";
//   newDiv.style.alignItems = "center";
//   newDiv.style.fontFamily = "fjalla";
//   newDiv.style.color = "coral";
//   newDiv.style.marginBottom = "0px";
//   newDiv.appendChild(answers);
//   // newDiv.appendChild()

//   container.appendChild(newDiv);
//   container.appendChild(newDiv2);
// };

// let quitBtn = document.querySelectorAll(".quit");
// for (let i = 0; i < quitBtn.length; i++) {
//   quit[i].onclick = function quit() {
//     let clearDiv = document.getElementById("container");
//     clearDiv.innerHTML = "";
//     let quitContent = document.createElement("div");
//     let h3 = document.createAttribute.Element("h3");
//     h3.innerText = `Thank you for trying!
//      Byee :)`;
//     h3.createTextNode("content");
//     h3.appendChild(content);
//     quitContent.appendChild(h3);
//     container.appendChild(quitContent);
//   };
// }
