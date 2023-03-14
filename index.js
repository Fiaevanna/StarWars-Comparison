/* API:  https://swapi.dev */

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


/* Beskrivning: Du ska med hjälp av ett API skapa en applikation där användaren kan jämföra olika Star Wars-karaktärer och deras egenskaper med varandra!


Kravställning

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



