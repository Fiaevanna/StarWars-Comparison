/* API:  https://swapi.dev */


/* Create a new button element */
let button = document.createElement("button"); 

// set button text 
button.innerHTML= "Let´s Play";

// adding an event listner on btn 

button.addEventListener("click", function(){
    alert("button clicked!");
}); 

// add the button to the document body
document.body.appendChild(button);



/* Skapar en klass med olika inputs */
class Character {
    /* Använder input för att sätta atrebut i min klass i constructor*/
    constructor (hairColor, length, weight, sex, skinColor, eyeColor, movies, pictureUrl) {
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
    /*

    Data shape
        {
  "count": 82,
  "next": "https://swapi.dev/api/people/?page=3",
  "previous": "https://swapi.dev/api/people/?page=1",
  "results": [
    {
      "name": "Anakin Skywalker",
      "height": "188",
      "mass": "84",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "41.9BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"
      ],
      "species": [],
      "vehicles": [
        "https://swapi.dev/api/vehicles/44/",
        "https://swapi.dev/api/vehicles/46/"
      ],
      "starships": [
        "https://swapi.dev/api/starships/39/",
        "https://swapi.dev/api/starships/59/",
        "https://swapi.dev/api/starships/65/"
      ],
      "created": "2014-12-10T16:20:44.310000Z",
      "edited": "2014-12-20T21:17:50.327000Z",
      "url": "https://swapi.dev/api/people/11/"
    },
    {
      "name": "Wilhuff Tarkin",
      "height": "180",
      "mass": "unknown",
      "hair_color": "auburn, grey",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "64BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/21/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/6/"
      ],
      "species": [],
      "vehicles": [],
      "starships": [],
      "created": "2014-12-10T16:26:56.138000Z",
      "edited": "2014-12-20T21:17:50.330000Z",
      "url": "https://swapi.dev/api/people/12/"
    },
    ...
  ]
}

    */
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data = await response.json();
    /* här retunerar jag mina data resultat, så att jag har tillgång till dem utanför min funktion */
    return data.results;
}

/* Sparar resultaten i en variabel som kör min funktion */
async function main () {
    
    /* skapar variablar som innehåller sida ett och två som jag sedan slår ihop med hjälp av en ny array med concat  */
const results = await getStarWarsPpl (1);
const results2 = await getStarWarsPpl (2);
const mainResults = results.concat(results2);
console.log(mainResults);

}    
main();


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



