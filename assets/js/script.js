


document.addEventListener('DOMContentLoaded', function () {
    let tails = 0
    let tailsPercent = 0
    let heads = 0
    let headsPercent = 0
    let totalFlips = 0
    let tailsFlipMsg = "You Flipped Tails!"
    let headsFlipMsg = "You Flipped Heads!"
    
    
document.querySelector('#message').innerHTML = 'Flip that coin!'
document.querySelector('#flip').addEventListener('click', function (){
    if (Math.random() > 0.5){
        totalFlips++
        heads++
        headsPercent = Math.round(heads/totalFlips * 100)
        tailsPercent = Math.round(tails/totalFlips * 100)
        document.querySelector('#penny-image').src = "assets/images/penny-heads.jpg"
        document.querySelector('#message').innerHTML = 'You Flipped Heads!'
        document.querySelector('#heads').innerHTML = heads
        document.querySelector('#heads-percent').innerHTML = headsPercent +'%'
        document.querySelector('#tails').innerHTML = tails
        document.querySelector('#tails-percent').innerHTML = tailsPercent +'%'

    } else  {
        totalFlips++
        tails++
        headsPercent = Math.round(heads/totalFlips * 100)
        tailsPercent = Math.round(tails/totalFlips * 100)
        document.querySelector('#penny-image').src = "assets/images/penny-tails.jpg"
        document.querySelector('#message').innerHTML = 'You Flipped Tails!'
        document.querySelector('#heads').innerHTML = heads
        document.querySelector('#heads-percent').innerHTML = headsPercent +'%'
        document.querySelector('#tails').innerHTML = tails
        document.querySelector('#tails-percent').innerHTML = tailsPercent +'%'


    }
})

document.querySelector('#clear').addEventListener('click', function (){
tails = 0
heads = 0
headsPercent = 0 
tailsPercent = 0 
totalFlips = 0
let total = heads + tails
document.querySelector('#message').innerHTML = 'Flip that coin!'
if (total > 0){
    headsPercent = Math.round(heads/totalFlips * 100)
    tailsPercent = Math.round(tails/totalFlips * 100)
}


document.querySelector('#heads').innerHTML = heads
document.querySelector('#heads-percent').innerHTML = headsPercent +'%'
document.querySelector('#tails').innerHTML = tails
document.querySelector('#tails-percent').innerHTML = tailsPercent +'%'


})

    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})