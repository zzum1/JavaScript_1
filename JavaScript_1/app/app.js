// UZDUOTIS LYGINIS AR NELYGINIS
 
const personYear = 21;
 
if(personYear % 2 == 0 ){
    console.log('amzius lyginis')
} else {
    console.log('amzius nelyginis')
}
 
// SALTA AR NE SALTA
 
const perfectWheater = true;
 
if(perfectWheater){
    console.log('Eikime i lauka!')
} else {
    console.log('Likime namuose')
}
 
// STRINGAS
 
const game = 'Football Sport';
 
if (game.includes('Football')) {
    console.log('Tai puikus pasirinkimas')
} else {
    console.log('Ar bandei zaisti futbola?')
}
 
// Masyvas
 
const numberArr = [100, 20, 30]
console.log(numberArr[1]);
 
if (numberArr[0] >= numberArr[2]) {
    console.log('Pirmasis skaičius didesnis')
} else {
    console.log('Trečiasis skaičius didesnis arba lygus')
}
 
// Sukurk objektą su mėgstamo filmo pavadinimu ir trukme (minutėmis). Jeigu filmo trukmė yra ilgesnė nei 120 minučių, išspausdink „Tai ilgas filmas“. Kitaip – „Tai trumpas filmas“.
 
const film = {
    title: "Caribians Pirates",
    time: 130,
}
 
let isLongFilm = film.time == 130 ? 'Tai ilgas filmas' : 'Tai trumpas filmas'
 
console.log(isLongFilm)
 
// Sukurk kintamuosius hasTicket ir isSeatAvailable. Jei abu yra true, išspausdink „Galite užimti vietą“. Jei bent vienas yra false, išspausdink „Negalite užimti vietos“.
 
const hasTicket = true;
const isSeatAvailable = true;
 
if (hasTicket && isSeatAvailable) {
    console.log('Galite užimti vietą')
} else {
    console.log('Negalite užimti vietos')

}
/*
Masivo reikšmės palyginimas
Sukurk masyvą su trim draugų vardais. Jeigu trečias vardas yra „Lukas“, išspausdink „Lukas yra tavo draugas!“. Kitaip išspausdink „Kas toks trečias draugas?“.
*/

const friends = ['Jonas', 'Petras', 'Lukas'];

const thirdFried = friends[2] === 'Lukas' ? 'Lukas yra tavo draugas!' : 'Kas toks trečias draugas?';

console.log(thirdFried);

/*
Objekto reikšmių tikrinimas
Sukurk objektą su žmogaus vardu ir mėgstamu vaisiumi. Jeigu mėgstamas vaisius yra „Obuolys“, išspausdink „Sveika mityba!“. Kitaip – „Visada yra vietos obuoliui!“.
*/

const person = {
    name: 'Jonas',
    fruit: 'Obuolys',
};

const isHealthy = person.fruit === 'Obuolys' ? 'Sveika mityba!' : 'Visada yra vietos obuoliui!';
console.log(isHealthy);

/**
Tarp dviejų reikšmių
Sukurk du skaičius. Jeigu pirmas skaičius yra mažesnis už antrą, išspausdink „Pirmas skaičius mažesnis“. Jei jie lygūs, išspausdink „Skaičiai lygūs“. Kitu atveju – „Pirmas skaičius didesnis“.
 */

const firstNumber = 10;
const secondNumber = 20;

if (firstNumber < secondNumber) {
    console.log('Pirmas skaičius mažesnis');
} else if (firstNumber === secondNumber) {
    console.log('Skaičiai lygūs');
} else {
    console.log('Pirmas skaičius didesnis');
}

/*
Masivo ir objekto kombinacija
Sukurk masyvą su trim objektais, kuriuose yra žmogaus vardas ir amžius. Patikrink pirmojo objekto amžių. Jei amžius mažesnis nei 18, išspausdink „Vaikas“. Jei 18 ar daugiau – „Suaugęs“.
 */

const people = [
    {
        name: 'Jonas',
        age: 20,
    },
    {
        name: 'Petras',
        age: 17,
    },
    {
        name: 'Lukas',
        age: 15,
    },
];

const firstPerson = people[0].age < 18 ? 'Vaikas' : 'Suaugęs';

console.log(firstPerson);