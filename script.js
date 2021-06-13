/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";


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

var scorepunten = 0;




/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */

var tekenVeld = function () {

  fill(171, 254, 255)

  rect(0, 0, width, height);

  if (aantlevens == 4) {
    fill(255, 165, 0);
    rect(0, 0, width, height);
  }

  if (aantlevens == 3) {
    fill(255, 145, 0);
    rect(0, 0, width, height);
  }

  if (aantlevens == 2) {
    fill(255, 127, 80);
    rect(0, 0, width, height);
  }

  if (aantlevens == 1) {
    fill(255, 107, 80);
    rect(0, 0, width, height);
  }

  if (aantlevens == 0) {
    fill(255, 0, 0)
    rect(0, 0, width, height);
  }
};

var tekenVijand = function (x, y) {
  fill("black");
  rect(vijandX, 800, bvijand1, hvijand1);
};

var tekenAuto = function (x, y) {
  fill("black")
  rect(vijand2X, 0, bvijand2, hvijand2);
};

var tekenSpeler = function (x, y) {
  fill("red");
  rect(x + 0, y + 180, bpop, hpop, 300);
  fill(255, 195, 170);
  ellipse(x + 35, y + 180, 110, 70, 70);

};

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

  spelerX = spelerX - 10;
};

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

  score();

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

  if (hvijand2 > 500) {
    verlengen = 0;
  }
  if (hvijand2 <= 300) {
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
  return false;
};

var score = function () {

  if (vijandsnelheid >= 60) {
    scorepunten = scorepunten + 1;
  }

  if (vijandsnelheid >= 30) {
    scorepunten = scorepunten + 0.5;
  }
};

var checkGameOver = function () {

  textSize(30)
  fill("gray")
  text("LEVENS", 30, 50);
  text(aantlevens, 72, 100);

  textSize(30)
  fill("gray")


  textSize(30)
  fill("gray")
  text("Score:", 1450, 50);

  text(scorepunten, 1450, 100);

  if (scorepunten < 150) {
    textSize(30);
    text("Spatiebalk is springen", 10, 200);
    textSize(30);
    text("Links is pijltje naar links", 10, 250);
    textSize(30);
    text("Rechts is pijltje naar rechts", 10, 300);
    text("Doel --> Ontwijk de zwarte blokken", 10, 350);
    text("Let goed op want de blokken veranderen van vorm", 10, 400);
    text("MET EEN SCORE BOVEN DE 6000 BEN JE 'RULER OF THE GAME'", 350, 30);
  }

  if (aantlevens == 1) {
    text("JE HEBT NOG 1 LEVEN!!", 600, 30)
  }

  if (aantlevens == 0) {
    textSize(80)
    fill("white")
    text("GAME OVER", 550, 100);


    if (scorepunten < 200) {

      textSize(50);
      text("Volgende keer beter", 550, 500)
      textSize(20);
      text("Herstart het spel met de blauwe restart knop", 10, 900);
    }

    if (scorepunten > 200 && scorepunten < 500) {
      textSize(50);
      text("Je begint het te snappen", 550, 500)
      textSize(20);
      text("Herstart het spel met de blauwe restart knop", 10, 900);
    }

    if (scorepunten > 200 && scorepunten > 500 && scorepunten < 1000) {
      textSize(50);
      text("Goed zo", 700, 500)
      textSize(20);
      text("Herstart het spel met de blauwe restart knop", 10, 900);
    }

    if (scorepunten > 200 && scorepunten > 500 && scorepunten > 1000 && scorepunten < 1500) {
      textSize(50);
      text("Expert", 710, 500)
      textSize(20);
      text("Herstart het spel met de blauwe restart knop", 10, 900);
    }

    if (scorepunten > 200 && scorepunten > 500 && scorepunten > 1000 && scorepunten > 1500 && scorepunten < 2000) {
      textSize(50);
      text("Briljant", 710, 500)
      textSize(20);
      text("Herstart het spel met de blauwe restart knop", 10, 900);
    }

    if (scorepunten > 200 && scorepunten > 500 && scorepunten > 1000 && scorepunten > 1500 && scorepunten > 2000 && scorepunten < 3000) {
      textSize(50);
      text("Uitmuntend", 650, 500)
      textSize(20);
      text("Herstart het spel met de blauwe restart knop", 10, 900);
    }

    if (scorepunten > 200 && scorepunten > 500 && scorepunten > 1000 && scorepunten > 1500 && scorepunten > 2000 && scorepunten > 3000 && scorepunten < 6000) {
      textSize(50);
      text("KING OF THE GAME", 600, 500)
      textSize(20);
      text("Herstart het spel met de blauwe restart knop", 10, 900);
    }

    if (scorepunten > 200 && scorepunten > 500 && scorepunten > 1000 && scorepunten > 1500 && scorepunten > 2000 && scorepunten > 3000 && scorepunten > 6000 && scorepunten > 6001) {
      textSize(50);
      text("RULER OF THE GAME", 550, 500)
      textSize(20);
      text("Herstart het spel met de blauwe restart knop", 10, 900);
    }
    return true;
  }
  return false;
};

function setup() {
  createCanvas(1600, 920);
}

function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegSpeler();

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
      }


      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenSpeler(spelerX, spelerY);
      tekenAuto(vijand2X, vijand2Y);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;

      }
      break;
    case GAMEOVER:
      break;
  }
}


