let count = 0;

let container = document.querySelector("#container");
document.getElementById("myBtn2").onclick = function () {
  container.innerHTML = "";
  let newDiv = document.createElement("div");
  let newDiv2 = document.createElement("div");
  let getBackBtn = document.createElement("button");
  let quitBtn = document.createElement("button");
  getBackBtn.className = "start";
  getBackBtn.innerText = "Start";
  newDiv2.appendChild(getBackBtn);
  newDiv2.appendChild(quitBtn);
  quitBtn.className = "quit";
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
document.getElementsByClassName("start").onclick = function () {
  container.innerHTML = "";
  let newDiv = document.createElement("div");
  let newDiv2 = document.createElement("div");
  //  let getBackBtn = document.createElement("button");
  let quitBtn = document.createElement("button");
  //  getBackBtn.className = "start";
  //  getBackBtn.innerText = "Start";
  //  newDiv2.appendChild(getBackBtn);
  newDiv2.appendChild(quitBtn);
  quitBtn.className = "quit";
  quitBtn.innerText = "Quit";
  newDiv.innerText = "What does CPU stand for?";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  newDiv.style.fontFamily = "fjalla";
  newDiv.style.color = "coral";
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

  submit.className = "submit";
  submit.innerText = "Submit";
  newDiv2.style.padding = "0px";
  newDiv2.style.marginBottom = "40px";
  newDiv2.style.height = "100px";
  newDiv2.style.marginTop = "0";
  newDiv2.append(input);
  newDiv2.appendChild(submit);
  newDiv2.appendChild(quitBtn);
  quitBtn.className = "quit";
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
