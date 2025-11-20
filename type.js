window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
const words = document.querySelector("#words");

words.appendChild(p);

recognition.addEventListener("result", e => {
    console.log(e);
});
recognition.onstart = () => console.log("Recognition started");
recognition.onerror = (e) => console.log("ERROR:", e.error);
recognition.onend = () => console.log("Recognition ended");
recognition.onresult = (e) => console.log("RESULT:", e);
recognition.start();

