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
var vijandsnelheid = 30;
var vijandsnelheid2 = 25;

var vijand2X = 900;
var vijand2Y = 880;

var vijand3X = 1200;
var vijand3Y = 880;

var score = 0; // aantal behaalde punten

var okpopX = 0;
var okpopY = 0;
var bkpopX = 0;
var bkpopY = 0;

//var okpop2X = 0;
//var okpop2Y = 0;
//var bkpop2X = 0;
//var bkpop2Y = 0; 

var okvijandX = 0;
var okvijandY = 0;
var bkvijandX = 0;
var bkvijandY = 0;

var okvijand2X = 0;
var okvijand2Y = 0;
var bkvijand2X = 0;
var bkvijand2Y = 0;


var hpop = 160;
var bpop = 70;

var hvijand1 = 160;
var bvijand1 = 320;

var hvijand2 = 450;
var bvijand2 = 90;


var aantlevens = 5;



var versnellen = 1;

var verlengen = 1;

var afbeelding1;



/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


// variabelen waar de plaatjes in worden gestopt
var imgA = 0;

// deze functie wordt door de p5 library aangeroepen
// voordat de setup functie wordt uitgevoerd
// p5 gaat pas verder als alle opdrachten in de functie klaar zijn




/**
 * Tekent het speelveld
 * */
var tekenVeld = function () {

  fill(171, 254, 255)

  rect(0, 0, width, height);

  if (aantlevens == 4 ) {
    fill(255,165,0);
    rect(0, 0, width, height);
  }

  if (aantlevens == 3 ) {
    fill(255,145,0);
    rect(0, 0, width, height);
  }

  if (aantlevens == 2  ) {
    fill(255,127,80);
    rect(0, 0, width, height);
  }

  if (aantlevens == 1  ) {
    fill(255,107,80);
    rect(0, 0, width, height);
  }

  if (aantlevens == 0  ) {
    fill(255,0,0)
    rect(0, 0, width, height);
  }

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
  fill("black")
  rect(vijand2X, 0, bvijand2, hvijand2);
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

  vijand2X = vijand2X - vijandsnelheid2;
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
    spelerY = spelerY - 30;
     spelerX = spelerX + 20;
  }
  if (!keyIsDown(KEY_SPACE)) {
    spelerY = spelerY + 20;
    //  spelerX = spelerX - 20;
    if (spelerY > 900) { spelerY = 900 };
  }

  if (keyIsDown(KEY_LEFT)) {
    spelerX = spelerX - 20;
  }

  if (keyIsDown(KEY_RIGHT)) {
    spelerX = spelerX + 20;
  }


  if (spelerX > 2500) {
    spelerX = 400;
  }

  if (spelerY > 550) {
    spelerY = 550;
  }

  spelerX = spelerX -10;
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

  okvijand2X = vijand2X
  okvijand2Y = (vijand2Y - hvijand2)
  bkvijand2X = vijand2X + bvijand2
  bkvijand2Y = ((vijand2Y))

  if (versnellen == 1) {
    vijandsnelheid = vijandsnelheid + 0.05;
  }
  else {
    vijandsnelheid = vijandsnelheid - 0.05;
  }

  if (vijandsnelheid > 50) {
    versnellen = 0;
  }
  if (vijandsnelheid <= 30) {
    versnellen = 1;
  }


  if (verlengen == 1) {
  hvijand2 = hvijand2 + 1;
  bvijand1 = bvijand1 + 1;
  }
  else {
    hvijand2 = hvijand2 - 1;
    bvijand1 = bvijand1 - 1;
  }

  if (hvijand2 > 590) {
  verlengen = 0;
  }
  if (hvijand2 <= 400) {
    verlengen = 1;
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

  if (okpopX >= okvijand2X && okpopX <= bkvijand2X) {
    if (okpopY >= okvijand2Y && okpopY <= bkvijand2Y) {
      return true
    }
    else {
      if (bkpopY >= okvijand2Y && bkpopY <= bkvijand2Y) {
        return true
      }
    }
  }
  if (bkpopX >= okvijand2X && bkpopX <= bkvijand2X) {
    if (okpopY >= okvijand2Y && okpopY <= bkvijand2Y) {
      return true
    }
    else {
      if (bkpopY >= okvijand2Y && bkpopY <= bkvijand2Y) {
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

  textSize(30)
  fill("gray")
  text("LEVENS", 30, 50);
  text(aantlevens, 72, 100);

  //text(vijand2X, 500, 100);
  //text(vijand2Y, 900, 200);
  //text(spelerX, 1000, 100);
  //text(spelerY, 1000, 100);

  //text(spelerX, 500, 100);
  //text(okpopY, 600, 100);
  //text(okpopX, 500, 100);
  //text(okpopY, 500, 100);

  //text(bkpopX, 700, 100)
  //text(bkpopY, 700, 100)

  //text(okvijand2X, 200, 200);
  //text(vijand2Y, 500,200);
  //text(okvijand2Y, 600, 200);
  //text(bkvijand2X, 700, 200);
  //text(bkvijand2Y, 800, 200);

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
    textSize(50)
    fill("red")
    text("GAME OVER", 590, 100);

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
  createCanvas(1600, 920);
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


        //  document.location.reload();

      }
      break;
    case GAMEOVER:
      // text("game over", 100, 100);
      break;
  }
}


