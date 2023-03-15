/* API:  https://swapi.dev */

/* Create a new button element */
let compareButton = document.createElement("button");
// set button text
compareButton.innerHTML = "Let´s Play The Game";

// adding an event listner on btn

compareButton.addEventListener("click", function () {
  alert("button clicked!");
});

/* Skapar en klass med olika inputs */
class Character {
  /* Använder input för att sätta atrebut i min klass i constructor*/
  constructor(
    hairColor,
    length,
    weight,
    sex,
    skinColor,
    eyeColor,
    movies,
    pictureUrl
  ) {
    this.hairColor = hairColor;
    this.length = length;
    this.weight = weight;
    this.sex = sex;
    this.skinColor = skinColor;
    this.eyeColor = eyeColor;
    this.movies = movies;
    this.pictureUrl = pictureUrl;
  }
}

/* INSTANSERNA, LOGIK*/
// Hämta dataset med fetch
async function getStarWarsPpl(page) {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const data = await response.json();
  /* här retunerar jag mina data resultat, så att jag har tillgång till dem utanför min funktion */
  return data.results;
}

/* Sparar resultaten i en variabel som kör min funktion */
async function main() {
  /* skapar variablar som innehåller sida ett och två som jag sedan slår ihop med hjälp av en ny array med concat  */
  const results = await getStarWarsPpl(1);
  const results2 = await getStarWarsPpl(2);

  // jag loopar igenom listorna med forEach och skapar li-element för varje person och lägger till den i rätt ul
  results.forEach((person) => {
    let listItem = document.createElement("li");
    listItem.innerText = person.name;
    document.getElementById("list1").appendChild(listItem);
  });
  results2.forEach((person) => {
    let listItem = document.createElement("li");
    listItem.innerText = person.name;
    document.getElementById("list2").appendChild(listItem);
  });
}
main();

/* Skapar en funktion som jag sparar i en variabel för att kunna ha kontroll på när sista paragraphen lämnar skärmen 
för att sätta den till display none */
const loadingScreenInterval = setInterval(() => {
  let paragraph = document.getElementById("lastOne");
  const rect = paragraph.getBoundingClientRect();
  //här kollar jag om y positionen är negativ mindre en 0, är den mindre en 0 så är den inte längre synlig
  if (rect.y <= 0) {
    let [wrapper] = document.getElementsByClassName("wrapper");
    wrapper.style.display = "none";
    document.body.classList.add("noGradient");
    document.body.style.margin = "0";
    clearInterval(loadingScreenInterval);
  }
  console.log("test");
}, 1000);

/*  lägg till musik, och styling + api för bilder */
// här nere kollar jag hur ofta den ska köras och den är satt på 1000 millsekunder

/*
Användaren ska kunna välja två karaktärer (Karaktär 1 & 2) med hjälp av varsin lista. 
Listorna ska bestå av minst sex namn på karaktärer från Star Wars-universumet som finns i API:et.


Användaren ska sedan kunna klicka på en knapp för att hämta data om karaktärerna.
När datat har hämtats, skapa två instanser av Character-klassen, och ge egenskaperna i klassen värden utifrån det hämtade datat.
OBS! API:et ger dig inga bilder - Så dessa behöver du ta fram på egen hand.




Rendera nu ut Karaktär 1 och Karaktär 2 i DOM:en - De ska visas ut med en bild samt namn.

Skapa en knapp med texten “Compare characters” som i sin tur skriver ut följande information om karaktärerna:

Hårfärg
Längd
Vikt
Kön
Hudfärg
Ögonfärg
Antal filmer hen medverkat i.
Det ska även framgå visuellt (text och/eller färg):

Vem av karaktärerna som är längst.
Vem som väger mest.
Vem som medverkat i flest filmer.
Om karaktärerna är av samma kön.
Om karaktärerna har samma hårfärg.
Om karaktärerna har samma hudfärg. */
