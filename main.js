
function flipCoin() {
    const resultText = document.getElementById("Result");
    const coinImage = document.getElementById('Coin');
    const randomValue = Math.random();

    resultText.classList.remove('red', 'green');
    
    if (randomValue < 0.5) {
        coinImage.src = 'assets/heads.png'; // Update to heads image
        resultText.innerHTML = "It's Heads!";
        resultText.classList.add('red'); // Add red class for heads
        console.log("It's Heads!")
    } else {
        coinImage.src = 'assets/tails.png'; // Update to tails image
        resultText.innerHTML = "Tails Wins!";
        resultText.classList.add('green'); // Add green class for tails
        console.log("Tails Wins!")

    }
}

function printResult() {
    const coinImage = document.getElementById('Result');
    
    if (randomValue < 0.5) {
        coinImage.src = 'assets/heads.png'; // Update to heads image
        console.log("It's Heads!")
    } else {
        coinImage.src = 'assets/tails.png'; // Update to tails image
        console.log("Tails Wins!")

    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     const button = document.getElementById('coinImage');
//     button.addEventListener('click', function() {
//         alert('Button clicked!');
//     }

// }

// // function flipCoin() {
    
// //     return Math.random() < 0.5 ? console.log("heads") : console.log("tails");
        
// //   }

// // function setCoin(coinResult) {
// //     console.log("setCoin Running") ;
// //     if (coinResult = "heads") {
// //         // Get the image element
// //         var image = document.getElementById("coinImage");
// //             image.src = "assets/heads.png";
// //         console.log(image)

// //     }
    
// //     else if (coinResult = "tails") {
// //         var image1 = document.getElementById("coinImage");
// //             image.src = "assets/tails.png";

// //         console.log(image1)

// //     }
    
// // }
  






// // Need a way to set the default value of the coin when the page loads. 
// // once the coin is clicked, if it's heads it needs to show the heads file. 
// // once the coin is clicked, if it's tailes it needs to show the tails file. 