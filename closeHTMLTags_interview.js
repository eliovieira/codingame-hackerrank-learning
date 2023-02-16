/*
Write a function that accepts a String as an argument.
The string is supposed to be HTML, but all the div elements are mssing their closing tags (they have the < and >)
The function's job is to find and close all the divs in the provided HTML String
The function should return the entire corrected string.
/*


function convertString(string) {
  let isDivOpen = false;
  let finalOutput = "";

  for (let i = 0; i < string.length; i++) {
    finalOutput += string[i];
    if (string[i] === "<") {
      if (string.slice(i + 1, i + 4) === "div") {
        if (isDivOpen === false) {
          isDivOpen = true;
        } else if (isDivOpen === true) {
          finalOutput += "/";
          isDivOpen = false;
        }
      } else if (string.slice(i + 1, i + 5) === "/div") {
        isDivOpen = false;
      }
    }
  }
  return finalOutput;
}

console.log(convertString("<div><p> Here is a <div> tag</p>"));
console.log(convertString("<div><div><div>"));
console.log(convertString("<div><div><p>Hello</p><div><div>"));
console.log(convertString("<div></div><p>Hello</p><div></div>"));
