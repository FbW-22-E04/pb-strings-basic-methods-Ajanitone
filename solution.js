const parkWalkStr = "I can walk in the park all day!";

console.log("01:", parkWalkStr.slice(17, 23));

console.log("------------------------------------------------");

const helloStr = "Hello World";

console.log("02: Converted to uppercase ", helloStr.toUpperCase());

console.log("------------------------------------------------");

const earthlingsStr = "Hello Earthling";
console.log("02: Converted to lowercase ", earthlingsStr.toLowerCase());

console.log("------------------------------------------------");

const jsStr = "JavaScript";
console.log("04:", jsStr.slice(3, 6));

console.log("------------------------------------------------");

const niceShoesStr = "nice shoes";
console.log("05: Is there an I in the sentemce", niceShoesStr.charAt(1));
console.log("05a: Is there an N in the sentemce", niceShoesStr.charAt(0));

console.log("------------------------------------------------");

const oldStr = "oldies";
const newStr = oldStr.substring(0, 1);
console.log("06:", newStr + oldStr + newStr);

console.log("------------------------------------------------");

const scritcherStr = "puffy";
const lastThreeChars = scritcherStr.substring(2, 5);
console.log("07:", lastThreeChars + scritcherStr + lastThreeChars);

console.log("------------------------------------------------");

const boogieNightsStr = "Electric";
const boogieJoggle = boogieNightsStr.replace("Electric", "clectriE");

console.log("08 Electric: Joggled results ", boogieJoggle);

console.log("------------------------------------------------");

const firstName = "Maria";
const city = "Berlin";
const job = "Teacher";
console.log(`09:My name is ${firstName}, I live in ${city}, and I am a ${job}`);

console.log("------------------------------------------------");

const foxStr = "the quick brown fox";
const letterOne = foxStr[0].toUpperCase();
const letterRest = foxStr.substring(1).toLowerCase();

console.log(`The new sentence is like this: ${letterOne}${letterRest}`);

console.log("------------------EXTRA EXERCISES------------------------------");

const stringLength = "AB2446";
const stringSplit = stringLength.split("");
const stringLength1 = stringSplit.length;
console.log(`01: The string length is ${stringLength1}`);

console.log("------------------EXTRA EXERCISES------------------------------");

const word = "Mahatma";
const low = word.toLowerCase();
const up = word.toUpperCase();
console.log(`02:${low}-${up}`);

console.log("------------------EXTRA EXERCISES------------------------------");

const word1 = "Air";
const word2 = "Jamaica";
console.log(`03:${word1[0]}${word2[0]}`);

console.log("------------------EXTRA EXERCISES------------------------------");

const historic = "Rosa Parks";
console.log(`04: The first character is ${historic.charAt(0)}`);

console.log("------------------EXTRA EXERCISES------------------------------");

const some = "bit";
const some1 = "it";
const some2 = some1.slice(0, 1);
console.log(`05: ${some2}${some}`);

console.log("------------------EXTRA EXERCISES------------------------------");

const sentence = "Stop and look";
const sentence1 = sentence.substring(0, 4);
console.log(`06:${sentence1}`);

console.log("------------------EXTRA EXERCISES------------------------------");

const date = "20-05-2017";
const date1 = date.replace(/-/g, "/");
console.log(`07: New date structure is: ${date1}`);

console.log("------------------EXTRA EXERCISES------------------------------");

const array = "One good thing about music";
const array1 = array.split("");
console.log(`08:${array1}`);

console.log("------------------EXTRA EXERCISES------------------------------");

console.log(typeof typeof 1);

console.log("------------------EXTRA EXERCISES------------------------------");

const file = "song.txt";
const file1 = file.substring(4, 8);
console.log(`10:The file extension is ${file1}`);
