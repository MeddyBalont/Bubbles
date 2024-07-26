const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  //création de la bulle
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  //Taille de la bulle
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  //Direction de la bulle
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  // Si Math.random() est supérieur à 0.5 si oui tu renvoies 1 si non tu renvoies -1
  //C'est un if else
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  //Lorsque je clique sur un bulle elle disparait
  bubble.addEventListener("click", () => {
    //Compteur de bulle éclaté
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

//Création des bulles qui apparaissent
setInterval(bubbleMaker, 300);
