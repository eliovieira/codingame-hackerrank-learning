/*
Julius Caesar protected his confidential information by encrypting it using a cipher. 
Caesar's cipher shifts each letter by a number of letters. 
If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

The first line contains the integer, , the length of the unencrypted string.
The second line contains the unencrypted string, .
The third line contains , the number of letters to rotate the alphabet by.
*/

function caesarCipher(s, k) {
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    while(k>alphabet.length){
        k=k-alphabet.length
    }
 
    const alphabetRotated = alphabet.slice(k)+alphabet.slice(0,k);   
 
    let finalOutput ="";
  

    for(let i=0;i<s.length;i++){
        const letter = s[i];
        
        // check if it's a symbol
        if (alphabet.includes(letter.toLowerCase())){
            const indexLetter = alphabet.indexOf(letter.toLowerCase());
            console.log(alphabetRotated[indexLetter]);
            // check if the letter is UpperCase
            if (letter.toUpperCase() === letter){
                finalOutput += alphabetRotated[indexLetter].toUpperCase();
            }else{
                finalOutput += alphabetRotated[indexLetter];
            }
        }
        else{
            finalOutput+=s[i];
        } 
    }

    return finalOutput;
}
