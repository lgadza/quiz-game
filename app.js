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
document.getElementById("myBtn").onclick = function () {
  let container = document.querySelector("#container");

  container.innerHTML = "";
  let newDiv = document.createElement("div");
  let newDiv2 = document.createElement("div");
  let submit = document.createElement("button");
  let quitBtn = document.createElement("button");
  let answers = document.createElement("ol");
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

  submit.classList = "submit myBtn";
  submit.innerText = "Submit";
  newDiv2.style.padding = "0px";
  newDiv2.style.marginBottom = "40px";
  newDiv2.style.height = "100px";
  newDiv2.style.marginTop = "0";
  newDiv2.append(input);
  newDiv2.appendChild(submit);
  newDiv2.appendChild(quitBtn);
  quitBtn.classList = "quit myBtn2";
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

let quitBtn = document.querySelectorAll(".quit");
for (let i = 0; i < quitBtn.length; i++) {
  quit[i].onclick = function quit() {
    let clearDiv = document.getElementById("container");
    clearDiv.innerHTML = "";
    let quitContent = document.createElement("div");
    let h3 = document.createAttribute.Element("h3");
    h3.innerText = `Thank you for trying!
     Byee :)`;
    h3.createTextNode("content");
    h3.appendChild(content);
    quitContent.appendChild(h3);
    container.appendChild(quitContent);
  };
}
