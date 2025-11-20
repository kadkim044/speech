window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

const words = document.querySelector("#words");
let p = document.createElement("p");
words.appendChild(p);

recognition.addEventListener("result", e => {
    const transcript = Array.from(e.results)
        .map(result => result[0].transcript)
        .join("");

    p.textContent = transcript;

    // If the last result is final, start a new line
    if (e.results[e.results.length - 1].isFinal) {
        p = document.createElement("p");
        words.appendChild(p);
    }

    // Keep the latest transcript in view
    words.scrollTop = words.scrollHeight;
});

// Restart recognition automatically
recognition.addEventListener("end", recognition.start);

recognition.start();
