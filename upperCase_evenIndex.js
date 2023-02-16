// write a function that accepts a string as an argument
// the function should capitalize ONLY every other letter in the String
// the function should then return the converted String

// "" => ""
// letter === character
// starting caps at letter 0

// "hello" => "HeLlO"
// "yo eli" => "Yo eLi"
// "hello???" => "HeLlO???"


function convertString(string) {
  let convertedString = "";

  if (string === "") {
    return "";
  } else {
    for (let i = 0; i < string.length; i++) {
      i % 2 === 0
        ? (convertedString += string[i].toUpperCase())
        : (convertedString += string[i].toLowerCase());
    }
    return convertedString;
  }
}

console.log(convertString("hello???"));
