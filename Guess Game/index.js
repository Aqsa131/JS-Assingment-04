// var randomNumber = Math.random() * 10
//     var correctNumber = Math.floor(randomNumber) + 1
//     var userGuess = parseInt(document.getElementById("field").value)

function easy() {
    document.getElementById('check').disabled = false
}
function med() {
    document.getElementById('check').disabled = false

    document.write(`
            <div style="margin: auto; text-align: center;">
    <button onClick = "checkMed() " id="med()">Check</button>
</div>
        `)
}
function hard() {
    document.getElementById('check').disabled = false
}

function checkEasy() {
    var randomNumber = Math.floor(Math.random() * 10) + 1
    // var correctNumber = Math.floor(randomNumber) + 1
    var userGuess = parseInt(document.getElementById("field").value);
    document.getElementById('userGuess').textContent = "Your Guess Number : " + "  " + userGuess
    document.getElementById('correctGuess').textContent = "Correct Guess Number : " + "  " + randomNumber
    if (userGuess === randomNumber) {
        document.getElementById("result").textContent = "Remarks :  Your Guess is Correct"
        console.log(' Your Guess is Correct');

    }
    else {
        document.getElementById("result").textContent = "Remarks : Incorrect Guess"
        console.log(' Your Guess is inCorrect');

    }
}

function checkMed() {
    var randomNumber = Math.floor(Math.random() * 100) + 1
    // var correctNumber = Math.floor(randomNumber) + 1
    var userGuess = parseInt(document.getElementById("field").value);
    document.getElementById('userGuess').textContent = "Your Guess Number : " + "  " + userGuess
    document.getElementById('correctGuess').textContent = "Correct Guess Number : " + "  " + randomNumber
    if (userGuess === randomNumber) {
        document.getElementById("result").textContent = "Remarks :  Your Guess is Correct"
        console.log(' Your Guess is Correct');

    }
    else {
        document.getElementById("result").textContent = "Remarks : Incorrect Guess"
        console.log(' Your Guess is inCorrect');

    }
}