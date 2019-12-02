var food = 0,
    clean = 0,
    happiness = 0,
    lvl = "easy",
    inPlay = false,
    second = 0;

function setTime() {
  document.getElementById('time').innerHTML = second;
  second += 1;
}

function checkParams() {
  if (food <= 0 || clean <= 0 || happiness <= 0)
    lose();
}

function lose (){
  if(inPlay){
    clearTimeout(update);
    inPlay = false;
    alert ("Game Over");
  }
}

function minusParam() {
  if (second % 5 == 0) {
    switch (lvl) {
      case "easy":
        food -= 3;
        clean -= 3;
        happiness -= 3;
        break;
      case "hard":
        food -= 5;
        clean -= 5;
        happiness -= 5;
        break;
    }
  }
}

function update() {
  if (inPlay) {
    setValuesHTML();
    setTime();
    minusParam();
    checkParams();
    updates = setTimeout(update, 1000);
  }
}

function start(){
  inPlay = true;
  if(inPlay){
    setValues();
    update();
  }
}

function GetRandomNumber(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function eat() {
  food += 30;
  clean -= 20;
  if(food > 100)
    food = 100;
  if(clean > 100)
    clean = 100;
}

function wash() {
  clean += 40;
  happiness -= 10;
  if(clean > 100)
    clean = 100;
  if(happiness > 100)
    happiness = 100;
}

function run() {
  happiness += 15;
  food -= 10;
  if(happiness > 100)
    happiness = 100;
  if(food > 100)
    food = 100;
}

function setLevel(str) {
  lvl = str;
  document.getElementById('chooseLevel').style.display = "none";
}

function setValuesHTML() {
  document.getElementById('food').innerHTML = food; document.getElementById('foodB').value = food;
  document.getElementById('clean').innerHTML = clean; document.getElementById('cleanB').value = clean;
  document.getElementById('happiness').innerHTML = happiness; document.getElementById('happinessB').value = happiness;
}

function setValues() {
  switch (lvl) {
    case "easy":
    food = GetRandomNumber(50, 100);
    happiness = GetRandomNumber(50, 100);
    clean = GetRandomNumber(50, 100);
    break;
    case "hard":
    food = GetRandomNumber(50, 70);
    happiness = GetRandomNumber(50, 70);
    clean = GetRandomNumber(50, 70);
    break;
  }
}
