/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

const KEY_SPACE = 32;
const KEY_RIGHT = 39;
const KEY_LEFT = 37;

var spelerX = 400; // x-positie van speler
var spelerY = 880; // y-positie van speler

var snelheidY = 20; // Y-snelheid van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 2500;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand
var vijandsnelheid = 20;

var vijand2X = 900;
var vijand2Y = 880;

var score = 0; // aantal behaalde punten

var okpopX = 0;
var okpopY = 0;
var bkpopX = 0;
var bkpopY = 0;

var okvijandX = 0;
var okvijandY = 0;
var bkvijandX = 0;
var bkvijandY = 0;

var hpop = 160;
var bpop = 70;

var hvijand1 = 100;
var bvijand1 = 320;

var aantlevens = 10000;

var Image = "tsunami.gif";

var versnellen = 1





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("grey");
  rect(20, 20, width - 2 * 20, height - 2 * 20);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function (x, y) {
  fill("black");
  rect(vijandX, 800, bvijand1, hvijand1);



};

var tekenAuto = function (x, y) {
  fill("blue")
  rect(vijand2X, 0, 90, 450);
};



/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function (x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function (x, y) {
  fill("red");
  rect(x + 0, y + 180, bpop, hpop, 300);
  fill(255, 195, 170);
  ellipse(x + 35, y + 180, 110, 70, 70);

};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function () {
  vijandX = vijandX - vijandsnelheid;
  if (vijandX < 0) {
    vijandX = 2500;
  }

  vijand2X = vijand2X - 20;
  if (vijand2X < 0) {
    vijand2X = 2500;
  }


};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function () {

};



/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function () {
  if (keyIsDown(KEY_SPACE)) {
    spelerY = spelerY - 20;
    //  spelerX = spelerX + 20;
  }
  if (!keyIsDown(KEY_SPACE)) {
    spelerY = spelerY + 20;
    if (spelerY > 900) { spelerY = 900 };
  }

  if (keyIsDown(KEY_LEFT)) {
    spelerX = spelerX - 20;
  }

  if (keyIsDown(KEY_RIGHT)) {
    spelerX = spelerX + 20;
  }


  if (tekenSpeler > 900) {
    spelerY = spelerY + 30;
  }

  if (spelerY > 550) {
    spelerY = 550;
  }
};
/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function () {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function () {

  okpopX = spelerX
  okpopY = -1 * (spelerY - 550)
  bkpopX = spelerX + bpop
  bkpopY = -1 * (spelerY - 550 - hpop)

  okvijandX = vijandX
  okvijandY = -1 * vijandY
  bkvijandX = vijandX + bvijand1
  bkvijandY = -1 * (vijandY - hvijand1)

  if (versnellen == 1) {
    vijandsnelheid = vijandsnelheid + 0.05;
  }
  else {
    vijandsnelheid = vijandsnelheid - 0.05;
  }

  if (vijandsnelheid > 40) {
   versnellen = 0;
  }
  if (vijandsnelheid <= 20 ) {
   versnellen = 1;
 }

  if (okpopX >= okvijandX && okpopX <= bkvijandX) {
    if (okpopY >= okvijandY && okpopY <= bkvijandY) {
      return true
    } 
    else {
      if (bkpopY >= okvijandY && bkpopY <= bkvijandY) {
        return true
      }
    }
  }
  if (bkpopX >= okvijandX && bkpopX <= bkvijandX) {
    if (okpopY >= okvijandY && okpopY <= bkvijandY) {
      return true
    } 
    else {
      if (bkpopY >= okvijandY && bkpopY <= bkvijandY) {
        return true
      }
    }
  }
  //   return true;
  // }

  // if (bkpopX > okvijandX && bkpopX < bkvijandX) {
  //   return true;
  // }

  //if (okpopY < okvijandY && okpopY > bkvijandY) {
  //  return true;
  //}

  //if (bkpopY < okvijandY && bkpopY > bkvijandY) {
  //  return true;
  //}

  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function () {
  text(aantlevens, 200, 100);
  //text(spelerX, 500, 100);
  // text(spelerY - 550, 600, 100);
  text(okpopX, 500, 100);
  text(okpopY, 550, 100);
  
  text(bkpopX, 700, 100)
  text(bkpopY, 750, 100)

  text(okvijandX, 500, 200);
  text(okvijandY, 600, 200);
  text(bkvijandY, 700, 200);
  text(bkvijandY, 800, 200);

  // if ((spelerY- 550)  == vijandY && spelerX >= vijandX && spelerX <= (vijandX + 40)) {
  //    text("GAME OVER", 800, 100);
  //    fill("red");
  //   rect(100, 100, 100, 100);
  //  };

  //if (spelerY == vijand2Y && spelerX >= vijand2X && spelerX <= vijand2X) {
  //  fill("blue");
  //  text("HALLO", 500, 200);
  //  fill("yellow")
  //  rect(900, 900, 100, 100);
  // }
  if (aantlevens == 0) {
    text("GAME OVER", 800, 100);
    fill("red");
    //rect(100, 100, 100, 100);

    return true;
  }

  return false;
};

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(2500, 920);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('black');
}



/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();

      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }

      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        aantlevens = aantlevens - 1;
        spelerX = 400; // x-positie van speler
        spelerY = 880; // y-positie van speler

        snelheidY = 20; // Y-snelheid van speler
        vijandsnelheid = 20

        kogelX = 0;    // x-positie van kogel
        kogelY = 0;    // y-positie van kogel

        vijandX = 2500;   // x-positie van vijand
        vijandY = 0;   


        // eventueel: nieuwe speler maken
      }


      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);
      tekenAuto(vijand2X, vijand2Y);



      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
    case GAMEOVER:
      text("game over", 100, 100);
      break;
  }
}


