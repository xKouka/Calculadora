let visorContent = "";

const holick = document.querySelectorAll(".holick");

holick.forEach((button) =>{
  button.addEventListener("click", function() {
    visorAdd(button)});
  })
  
function visorAdd(content) {
  document.getElementById("visor").textContent += content.textContent;
}

function visorClear() {
  let visorContent = "";
  document.getElementById("visor").textContent = visorContent;
}

function visorCalc() {
  document.getElementById("visor").textContent = eval(document.getElementById("visor").textContent);
}