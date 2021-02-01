var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start() ; 

}

recognition.onresult = function run (event) {
    console.log("event");


 var Content = event.result[0] [0].transcript


 document.getElementById("textarea").innerHTML = "Content"
 console.log("Content");

}
