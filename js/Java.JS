
var arr = ['Be yourself; everyone else is already taken.', "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", 'A room without books is like a body without a soul.', "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "Always forgive your enemies; nothing annoys them so much.", "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.", "A woman is like a tea bag; you never know how strong it is until it's in hot water."]

function randomQutoe() {

    var x = Math.trunc(Math.random() * arr.length)
    document.getElementById('demo').innerHTML = arr[x] 

}
