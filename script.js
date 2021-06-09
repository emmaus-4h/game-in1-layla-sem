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

var score = 0; // aantal behaalde punten

var Image = "tsunami.gif";







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
  rect(vijandX, 780, 300, 100);

};




/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function (x, y) {

    fill("black");
  rect(vijandX, 10, 10, 10);
};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function (x, y) {
  fill("red");
  rect(x + 0, y + 180, 70, 160, 300);
  fill(255, 195, 170);
  ellipse(x + 35, y + 180, 110, 70, 70);

};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function () {
  vijandX = vijandX - 20;
  if (vijandX < 0) {
    vijandX = 2500;
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
    spelerX = spelerX + 20;
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

  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function () {

  text(spelerX, 500, 100)
  text(spelerY, 600, 100)
  text(vijandX, 500, 200)
  text(vijandY, 600, 200)

  if ((spelerY - 550) == vijandY && spelerX >= vijandX && spelerX <= (vijandX+40)) {
    stroke('#222222');
    strokeWeight(4);
    text("GAME OVER", 800, 100);
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
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);



      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
    case GAMEOVER:
      text("game over", 100, 100);
      break;
  }
}


