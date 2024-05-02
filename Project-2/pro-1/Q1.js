function findtype() {
    let char = document.getElementById("value").value;

    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        document.getElementById("result").innerHTML = `The character ${char} is an Alphabet.`;
    }
    else if (!isNaN(char)) {
        document.getElementById("result").innerHTML = `The character ${char} is a Digit.`;
    }
    else {
        document.getElementById("result").innerHTML = `The character ${char} is a Special Character.`;
    }
}