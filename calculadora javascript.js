function performOperation(operation) {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result;
 

 if (operation == "adição") {
  result = parseFloat(num1) + parseFloat(num2)
 } else if (operation == "subtração") {
  result = parseFloat(num1) - parseFloat(num2)
 } else if(operation == "multiplicação") {
  result = parseFloat(num1) * parseFloat(num2)
 } else if (operation == "divisão") {
  result = parseFloat(num1) / parseFloat(num2)
 } else if (operation == "potenciação") {
  result = parseFloat(num1) ** parseFloat(num2)
 } else if (operation == "raiz") {
  result = Math.pow(parseFloat(num1),1/parseFloat(num2))
 } 


 document.getElementById("result").innerHTML = result;
};        

 