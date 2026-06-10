(async () => {
  const texts = [
    'INDEPENDENT PROTOCOL INFRASTRUCTURE' +
    ' - We combine the best protocols to build the fastest, safest and simplest independent blockchain for storing, trading, dApps, Defi, NFT and more powered by IPI Utility Coin. Most popular coins wrapped.',
    'International Payment Instrument - ',
    'Internet Peer-to-Peer Investment -',
    'Innovative Payment Infrastructure - ',
    'Instant Payment Integration - ',
    'Intelligent Payment Interface - ',
    'Internet Payment Initiative - ',
    'Innovative Payment Instrument - ',
    'International Payment Infrastructure - ',
    'Intelligent Payment Interface - '
  ].map(text => text.toUpperCase())
  const elementId = 'typewriter'
  const element = document.getElementById(elementId)
  const lineElements = Array.from(element.querySelectorAll('.typewriter-box'))
  const descriptionElement = document.querySelector('.typewriter-description')

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  async function typewrite(element, text, delay = 123) {
    element.innerHTML = ''
    for (let i = 0; i < text.length; i++) {
      await sleep(delay)
      element.innerHTML += text.charAt(i)
    }
  }

  let textIndex = 0

  let descriptionTyped = false

  while(true) {
    const text = texts[textIndex % texts.length]
    const parts = text.split(' - ')
    const words = parts[0].split(' ')
    const description = parts[1]

    for(const index in lineElements) await typewrite(lineElements[index], words[index].slice(1))

    if(!descriptionTyped) {
      await sleep(200)
      await typewrite(descriptionElement, description, 23)
      descriptionTyped = true
    }

    await sleep(3000)

    for(const index in lineElements) lineElements[index].innerHTML = ''
    //descriptionElement.innerHTML = ''

    textIndex ++
  }
})()

function displayRandomWord(words, elementId) {
  const element = document.getElementById(elementId);
  let currentIndex = -1;

  function type() {
    if (currentIndex < 0 || currentIndex >= words.length) {
      currentIndex = Math.floor(Math.random() * words.length);
    }

    const currentWord = words[currentIndex];
    let currentLetterIndex = 0;

    element.innerHTML = ""; // Wyczyść zawartość elementu

    function typeLetter() {
      if (currentLetterIndex < currentWord.length) {
        const nextLetter = currentWord.charAt(currentLetterIndex);
        if (nextLetter === "\n") {
          element.appendChild(document.createElement("br"));
        } else {
          const letterElement = document.createElement("span");
          letterElement.innerHTML = nextLetter;
          //spowalniacz
          for(let x= 0 ; x < 1000 ; x++){
            letterElement.classList.add("typewriter-letter-" + x);
          }
          element.appendChild(letterElement);
        }
        currentLetterIndex++;
        requestAnimationFrame(typeLetter);
      } else {
        currentIndex++;
        if (currentIndex >= words.length) {
          currentIndex = 0;
        }
        requestAnimationFrame(type);
      }
    }

    typeLetter();
  }

  type();
}



// ------------------------------------------------------------------------------------------------
// clickedButton.classList.add("active-table-button");
// clickedButton.classList.remove("gray-text");

// otherButton.classList.add("gray-text");
// otherButton.classList.remove("active-table-button");


function toggleTables(buttonId) {

  // Ukryj wszystkie tabelki
  var tables = document.querySelectorAll("#inv-table, #dev-table");
  tables.forEach(function (table) {
    table.style.display = "none";
  });

  // Usuń klasy z przycisków
  var invButton = document.getElementById("inv-button");
  var devButton = document.getElementById("dev-button");
  invButton.classList.remove("active-table-button");
  invButton.classList.add("gray-text");
  devButton.classList.remove("gray-text");
  devButton.classList.add("active-table-button");

  // Wyświetl odpowiednią tabelkę w zależności od naciśniętego przycisku i rozdzielczości
  if (buttonId === "inv-button") {
    document.getElementById("inv-table").style.display = "block";
    invButton.classList.remove("gray-text");
    invButton.classList.add("active-table-button");
    devButton.classList.remove("active-table-button");
    devButton.classList.add("gray-text");
  } else if (buttonId === "dev-button") {
    document.getElementById("dev-table").style.display = "block";
    devButton.classList.remove("gray-text");
    devButton.classList.add("active-table-button");
    invButton.classList.remove("active-table-button");
    invButton.classList.add("gray-text");
  }
}

// Przypisz funkcję do przycisków
document.getElementById("inv-button").addEventListener("click", function () {
  toggleTables("inv-button");
});

document.getElementById("dev-button").addEventListener("click", function () {
  toggleTables("dev-button");
});

document.addEventListener("DOMContentLoaded", function () {
  toggleTables("inv-button"); // Wywołanie funkcji przy starcie strony (domyślnie wyświetla inv-table)
});
