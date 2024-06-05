// Iteration 1: Names and Input
const hacker1 = "Thomas";

console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Igor";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
let hacker1Upper = "";
for (let i = 0; i < hacker1.length; i++) {
    hacker1Upper += `${hacker1[i].toUpperCase()} `;
}

console.log(hacker1Upper)

let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reverse += hacker2[i];
}

console.log(hacker2Reverse);

let comparison = hacker1.localeCompare(hacker2)
if (comparison > 0) {
    console.log("The driver's name goes first");
}
else if (comparison < 0) {
    console.log("Yo, the navigator goes first, definitely.");
}
else {
    console.log("What !? You both have the same name?");
}


// bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dui sit amet metus tincidunt ornare. Praesent porta vehicula ante, vel pharetra metus efficitur non. Nullam euismod quam et molestie bibendum. Duis tristique tortor non sodales egestas. Phasellus ut auctor sapien, ut semper leo. Vivamus blandit, velit ac accumsan maximus, quam ligula malesuada est, ut dictum metus sem tempor enim. Morbi vehicula condimentum justo tempor semper. Morbi pellentesque lacinia porttitor. Pellentesque eleifend lectus eget urna ornare molestie. Nunc neque neque, scelerisque a lacus in, malesuada tincidunt enim. Nam eu enim sit amet dolor dignissim porta tempor vitae justo. Sed placerat porttitor urna vel fringilla. Suspendisse eu gravida felis. Phasellus scelerisque sit amet erat sed condimentum. Nullam id porta massa, eu sagittis ipsum.

Fusce sit amet lectus ac diam rhoncus condimentum. Suspendisse sapien erat, malesuada vitae ornare eget, eleifend vitae leo. Sed scelerisque, tortor vel tempus tempus, quam diam auctor metus, at viverra nulla purus a ipsum. Mauris faucibus ante at neque ornare iaculis. Aliquam euismod erat vel augue tempor auctor. Nam at magna quam. Maecenas quis posuere mauris. Duis finibus efficitur massa nec ultrices. Etiam faucibus malesuada ex, condimentum condimentum justo commodo at. Morbi a ligula ultricies orci facilisis fringilla. Sed vehicula egestas dignissim. Donec vel massa laoreet, euismod ipsum convallis, mattis metus. Nunc commodo tempor consectetur. Ut laoreet viverra risus a euismod. Vestibulum sodales condimentum est, at gravida odio aliquet euismod.

Nam euismod ex metus. Donec leo mi, dapibus et lorem sit amet, maximus aliquet lacus. Duis blandit dui tortor, ac ultricies eros vulputate non. Donec ac est accumsan, porta dui in, consequat nisi. Nulla lobortis hendrerit erat quis condimentum. Proin feugiat est vel purus iaculis, at elementum lectus scelerisque. Integer sagittis, mi ac ornare pellentesque, mauris augue pretium quam, et sodales lectus mauris et est. Integer a tristique dolor, ut efficitur odio. Maecenas at venenatis nibh. Sed porttitor tellus eu magna scelerisque, non mattis ex ullamcorper. Praesent a enim eu nunc viverra rhoncus. Duis semper mattis ligula, non egestas felis venenatis et. Proin lobortis, nibh ac aliquam vestibulum, risus massa bibendum metus, a convallis orci ante at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor diam dapibus, mollis augue non, dictum urna. Donec quis semper libero, at hendrerit erat.`;

// remove whitespaces using .trim()
let trimmedText = longText.trim();

// create new array where each element is seperated by white space
let words = trimmedText.split(/\s+/);
// log the length of this new array
console.log(words.length);

// create new regExp to match specific word
// specify word to be surrounded by spaces, and find all occurances
let word = "et";
const regex = new RegExp(`\\b${word}\\b`, "g");

// find all matches with regex in longText, log length of array
let etCount = longText.match(regex);

console.log(etCount.length);


// bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";

// check for non alpha characters

function checkPalindrome(phrase) {
    phrase = phrase.toUpperCase();
    console.log(phrase)
    const halfOfPhrase = Math.floor(phrase.length / 2);

    for (let i = 0; i < halfOfPhrase; i++) {
        if (!/^[a-zA-Z]+$/.test(phrase[i])) {
            continue;
        }
        

        for(let j = 0; j < halfOfPhrase; j++) {
            console.log(phrase[phrase.length - j - 1 - i]);
            
            if (!/^[a-zA-Z]+$/.test(phrase[phrase.length - j - 1 - i])) {
                continue;
            }
            else if (phrase[i] === phrase[phrase.length - j - 1 - i]) {
                console.log(phrase[i] + " " + phrase[phrase.length - j - 1 - i])
                break;
            }
            else {
                return false;
            } 
        }
    }
    return true;
}

console.log(checkPalindrome(phraseToCheck));


