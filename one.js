function buttonClick(){
    console.log("clicked");
    var inputValue = inputText.value; 
    console.log("input",inputValue);
    outputText.innerText=inputValue+" banana language."; 
}

var button = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#txt-output");




button.addEventListener("click", buttonClick);


