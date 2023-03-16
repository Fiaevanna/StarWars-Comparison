/* ---------------------------------------------------ADIO------------------------------------------------------------------------ */

let hasPlayed = false; //Håller koll på om låt har spelats
function startAudio() {
  if (hasPlayed) {
    return;
  } // Här avslutar jag funktionen ifall låten har spelats

  const audio = new Audio(
    "http://soundfxcenter.com/movies/star-wars/8d82b5_Star_Wars_Main_Theme_Song.mp3" // Skapar och lägger till ett audio element med en mpr länk till starwars låt
  );
  document.body.appendChild(audio); // Jag använder funktionen play för att starta låt och sätter volym till 50%
  audio.play();
  audio.volume = 0.5; // Sätter variebeln hasPlayed så att låten inte spelas igen
  hasPlayed = true;
}
document.addEventListener("click", startAudio); // addEventListener starar audio, funktionen körs när man klickar på hemsidan.
// klicka på hemsidan för att låt ska spelas, autoplay är blockat i flera webläsare.

/* ---------------------------------------------------ADIO SLUT------------------------------------------------------------------------ */

/* ----------------------------------------------------Class/input & Constructor-------------------------------------------------------  */
//Skapar Class med olika inputs, använder input för att sätta atrebut i min klass i constructor
class Character {
  constructor(
    name,
    hair_color,
    height,
    mass,
    gender,
    skin_color,
    eye_color,
    films
  ) {
    this.hair_color = hair_color;
    this.height = Number(height.split(",").join(""));
    this.mass = Number(mass.split(",").join(""));
    this.gender = gender;
    this.skin_color = skin_color;
    this.eye_color = eye_color;
    this.films = films.length;

    const images = {
      // Sammlar bilder i ett objekt för att kunna ha pictureUrl i klass instans
      "Luke Skywalker":
        "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      "C-3PO":
        "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      "R2-D2":
        "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      "Darth Vader":
        "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      "Leia Organa":
        "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      "Owen Lars":
        "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      "Beru Whitesun lars":
        "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      "R5-D4":
        "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      "Biggs Darklighter":
        "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      "Obi-Wan Kenobi":
        "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      "Anakin Skywalker":
        "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      "Wilhuff Tarkin":
        "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      Chewbacca:
        "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      "Han Solo":
        "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      Greedo:
        "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      "Jabba Desilijic Tiure":
        "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      "Wedge Antilles":
        "https://disneynews.us/wp-content/uploads/2021/04/Wedge-Antilles-star-wars.jpg",
      "Jek Tono Porkins":
        "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      Yoda: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
      Palpatine:
        "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    };

    this.pictureUrl = images[name]; // här hämtar jag rätt bild baserat på karaktär namnet i images objektet
  }
}

/* -----------------------------------------------------Class/input & Constructor SLUT-----------------------------------------------------  */

/* -----------------------------------------------------INSTANSERNA, LOGIK för API---------------------------------------------------------- */
// Hämta dataset med fetch
async function getStarWarsPpl(page) {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const data = await response.json();
  return data.results; //här retunerar jag mina data resultat, så att jag har tillgång till dem utanför min funktion
}

// Här sparar jag listorna med personer från apiet så jag har tillgång till den överallt
let results;
let results2;

async function main() {
  // Skapar variablar som innehåller sida 1 & 2 från API:et
  results = await getStarWarsPpl(1);
  results2 = await getStarWarsPpl(2);

  results.forEach((person) => {
    // Loopar igenom listorna med forEach och skapar li-element för varje person och lägger till den i rätt ul
    let listItem = document.createElement("li");

    listItem.addEventListener("click", setActiveList); // Här lyssnar jag på click event som sätter den till aktiv eller inte aktiv
    listItem.innerText = person.name;
    document.getElementById("list1").appendChild(listItem);
  });
  results2.forEach((person) => {
    let listItem = document.createElement("li");
    //satte addEventListner som kör setActiveList funktionen
    listItem.addEventListener("click", setActiveList);
    listItem.innerText = person.name;
    document.getElementById("list2").appendChild(listItem);
  });
}
main();

/* -----------------------------------------------------------INSTANSERNA, LOGIK för API-SLUT------------------------------------------------------ */

/*Tar emot ett event från eventL och hämtar förälden från li element som jag sedan loopar igenom och tarbort den aktiva classen,*/
function setActiveList(li) {
  let parent = li.target.parentElement;
  parent.childNodes.forEach((element) => {
    element.classList.remove("active");
  });
  li.target.classList.add("active"); //lägger till aktiv-klassen på de element man klickat på
}

/* Funktion som sparas i variabel för att ha kontroll på när sista<p> lämnat skärmen för att köra display none */
const loadingScreenInterval = setInterval(() => {
  let paragraph = document.getElementById("lastOne");
  const rect = paragraph.getBoundingClientRect();
  //Kollar om Y positionen är negativ, är den mindre en 0 så sätts style till none;
  if (rect.y <= 0) {
    let [wrapper] = document.getElementsByClassName("wrapper");
    wrapper.style.display = "none";
    document.body.classList.add("noGradient");
    document.body.style.margin = "0";
    document.body.style.overflow = "scroll";

    const [audio] = document.getElementsByTagName("audio");
    if (audio) {
      audio.pause();
    }
    clearInterval(loadingScreenInterval);
  }
  console.log("test");
}, 1000);

// här nere kollar jag hur ofta den ska köras och den är satt på 1000 millsekunder

/*  */

/* Create a new button element */
let compareButton = document.getElementById("compareButton");

// adding addEventListner to comparebtn
compareButton.addEventListener("click", getSelectedChars);

function getSelectedChars() {
  /* Jag får tillbaka en array som jag deconstruct för att få de två första elementen i arrayn */
  let [activeCharOne, activeCharTwo] =
    document.getElementsByClassName("active");
  if (activeCharOne === undefined || activeCharTwo === undefined) {
    alert("Sorry to continue you have to pick two characters");
    return;
  }

  const [compairWrapper] = document.getElementsByClassName("compairWrapper");
  compairWrapper.style.display = "flex";

  const keysToCompare = [
    "hair_color",
    "height",
    "mass",
    "gender",
    "skin_color",
    "eye_color",
    "films",
  ];

  const personOne = results.find(
    (person) => person.name === activeCharOne.textContent
  );

  /* Skapar en instans av min Character klass */
  let characterOne = new Character(
    personOne.name,
    personOne.hair_color,
    personOne.height,
    personOne.mass,
    personOne.gender,
    personOne.skin_color,
    personOne.eye_color,
    personOne.films
  );

  const personTwo = results2.find(
    (person) => person.name === activeCharTwo.textContent
  );
  /* Skapar en instans av min Character klass */
  let characterTwo = new Character(
    personTwo.name,
    personTwo.hair_color,
    personTwo.height,
    personTwo.mass,
    personTwo.gender,
    personTwo.skin_color,
    personTwo.eye_color,
    personTwo.films
  );

  keysToCompare.forEach((key) => {
    console.log(characterOne[key]);
    let compairOne = document.getElementById("compairOne");
    let compairTwo = document.getElementById("compairTwo");

    // hittar image elementet i varje compair div och sätter bild src
    const [img1] = compairOne.getElementsByTagName("img");
    const [img2] = compairTwo.getElementsByTagName("img");

    img1.src = characterOne.pictureUrl;
    img2.src = characterTwo.pictureUrl;

    // skapar variablar för span och listItem 1
    let [listItem1] = compairOne.getElementsByClassName(key);
    let [valuespan1] = listItem1.getElementsByClassName("value");
    let [listItem2] = compairTwo.getElementsByClassName(key);
    let [valuespan2] = listItem2.getElementsByClassName("value");

    // här sätter jag characterOnes innerText till nyckelvärdet i caracterOne objectet samt caracterTwo,

    valuespan1.innerText = characterOne[key];
    valuespan2.innerText = characterTwo[key];

    if (
      typeof characterTwo[key] === "string" &&
      characterOne[key] === characterTwo[key]
    ) {
      valuespan1.style.backgroundColor = "rgb(0, 0, 128)";
      valuespan2.style.backgroundColor = "rgb(0, 0, 128)";
    }

    if (key === "height" || key === "mass" || key === "films") {
      if (characterOne[key] > characterTwo[key]) {
        valuespan1.style.backgroundColor = "green";
        valuespan2.style.backgroundColor = "rgb(140, 5, 5)";
      }
      if (characterTwo[key] > characterOne[key]) {
        valuespan2.style.backgroundColor = "green";
        valuespan1.style.backgroundColor = "rgb(140, 5, 5)";
      }
      if (characterOne[key] === characterTwo[key]) {
        valuespan1.style.backgroundColor = "rgb(0, 0, 128)";
        valuespan2.style.backgroundColor = "rgb(0, 0, 128)";
      }
    }
  });
  console.log(characterOne, characterTwo);
}
