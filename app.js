// Togloomiin buh gazart ashiglagdah global huvisagchdiig end zarlay.

// Ali toglogch shoo shideh ve gedgiig end hadgalna.
var activePlayer;

// Hoyr toglogchiin tsugluulsan onoonuud
var scores;

// Idevhtei toglogchiin tsugluulj baigaa eeljiin onoo.
var roundScore;

// Shoonii zurgiig uzuuleh elementiig DOM oos haij olood end hadgalya.
var diceDom = document.querySelector(".dice");

// Togloomiig ehluulne.
initGame();

// Togloomiig shineer ehlehed beltgene.
function initGame(){
    // Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gej temdeglii.
activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
scores = [0, 0];

// Toglogchiin eeljin deer tsugluulj baigaa onoog hadgalah huvisagch
roundScore = 0;


// Programm ehlehed beltgey
document.getElementById("score-0"). textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// Toglogchdiin neriig butsaaj gargah 
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");

diceDom.style.display = "none";
}
// Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gej temdeglii.
// var activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
// var scores = [0, 0];

// Toglogchiin eeljin deer tsugluulj baigaa onoog hadgalah huvisagch
// var roundScore = 0;

// Shoonii ali talaaraa buusniiig hadgalah huvisagch heregtei, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ugnu.

// Programm ehlehed beltgey
// document.getElementById("score-0"). textContent = "0";
// document.getElementById("score-1").textContent = "0";
// document.getElementById("current-0").textContent = "0";
// document.getElementById("current-1").textContent = "0";

// var diceDom = document.querySelector(".dice");
// diceDom.style.display = "none";
// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function() {
    // 1-6 hurtel sanamsargui neg too gargaj avna 
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Shoonii zurgiig veb deer gargaj irne.
    diceDom.style.display = "block";

    // Buusan sanamsargui toond hargalzah shoonii zurgiig veb deer gargaj irne.
    diceDom.src = "dice-" + diceNumber + ".png";

    // Buusan too n 1 ees ylgaatai bol idevhtei toglogchiin eeljiin onoog nemegduulne.
        if(diceNumber !== 1){
            // 1-ees ylgaatai too buulaa. Buusan toog toglogchid nemj ugnu
            roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else {
            // 1 buusan bol toglogchiin eeljiig ene hesegt solij ugnu.

            // Ene toglogchiin eeljin deer tsugluulsan onoog 0 bolgono.
            roundScore = 0;
            document.getElementById("current-" + activePlayer).textContent = 0;

            // Toglogchiin eeljiig nuguu toglogch ruu shiljuulne
            
            activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

            
            // Ulaan tsegiig shiljuuleh 
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");

            // Shoog tur alga bolgono.
            diceDom.style.display = "none";         
        }
});

// Hold tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function(){
    // Ug toglogchiin tsugluulsan eeljnii onoog global onoon deer n nemj ugnu.
    // var scores = [20, 80];

    scores[activePlayer] = scores[activePlayer] + roundScore
// Delgets deer onoog n uurchilnu
document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    

    // Ug toglogch hojson esehiig (onoo n 100-s ih eseh) shalgah
    if (scores[activePlayer] >= 20){
        // Ylagch gesen textiig  nerniih n orond gargana
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
        //toglogchiin eeljiig solino.
        switchToNextPlayer();
    }
              
});

// Ene punkt n togloh eeljiig daraachiin toglogch ruu shiljuuldeg.
function switchToNextPlayer(){
            roundScore = 0;
            document.getElementById("current-" + activePlayer).textContent = 0;

            // Toglogchiin eeljiig nuguu toglogch ruu shiljuulne
            
            activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

            
            // Ulaan tsegiig shiljuuleh 
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");

            // Shoog tur alga bolgono.
            diceDom.style.display = "none";
}
// Shine togloom ehluuleh tovchnii event listener 
document.querySelector(".btn-new").addEventListener("click", initGame);