const people: string[] = ["Jack", "Jill", "Tom"];

people.map((person): string =>{
    return `${person} has subscribed to podcast.`
})

// assigned type of never (don't do this)
const doNotDoThis = [];

// or this (always an empty array)
const orThis: [] = [];

//Instead do this
const superHeros: string[] = ["superman", "batman", "spider man"];
const powerLevels: number[] = [700, 300, 500];

//This is the same as above
const powerLevels2: Array<number> = [700, 300, 500];

// ---------------------Construct a array of objects--------------------------

// Create our own type
type SuperHeroType = {
    name: string;
    power: number;
}

const allHeros: SuperHeroType[] = [];

//okay
allHeros.push({name: "iron man", power: 355})

//Error
// allHeros.push({name: "iron man"})

console.log(allHeros);

// ---------------------Nested Array--------------------------

//nested array of numbers
const coordinates: number[][] = [
    [1,2],
    [3,4]
]

