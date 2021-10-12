"use strict";

var jonSnowHealth = 100;
jonSnowHealth = String(jonSnowHealth); // jonSnowHealth + ''
// console.log(jonSnowHealth)

var theWinnerIs = 'Jamie is the winner.'; // console.log(theWinnerIs)

var newWinner = theWinnerIs.replace('Jamie', 'Jon');

if (newWinner.includes('Jon')) {// console.log('Replaced Jamie with Jon')
}

var newWinnerLower = newWinner.toLowerCase();
var newWinnerSplit = newWinnerLower.split(' ');
var newWinnerKebob = newWinnerSplit.join('-');
newWinner = newWinnerLower.replaceAll(' ', '-'); // console.log(newWinnerKebob)
// console.log(newWinner)

function isJonAlive() {
  if (jonSnowHealth > 0) {
    console.log('Jon is alive!');
  } else {
    console.log('RIP in Peace Jon Snow!');
  }
}

isJonAlive();

function surpriseAttack(attack) {
  jonSnowHealth -= attack;
  isJonAlive();
}

surpriseAttack(20); // surpriseAttack(10)
// surpriseAttack(30)
// surpriseAttack(25)
// surpriseAttack(15)

function greeting(person1, person2) {
  console.log("".concat(person1, " says hello to ").concat(person2, "."));
}

greeting('Jon Snow', 'Ned Stark');
greeting('Spencer', 'Andrew', 'Adrian');
greeting('Spencer');

function rollDie() {
  var sides = [1, 2, 3, 4, 5, 6];
  var randomNumber = Math.floor(Math.random() * sides.length);
  return sides[randomNumber];
}

var firstRoll = rollDie();
var secondRoll = rollDie(); // console.log(firstRoll, secondRoll)

function rollDice() {
  var firstRoll = rollDie();
  var secondRoll = rollDie();
  console.log(firstRoll, secondRoll);
  return firstRoll + secondRoll;
}

var diceTotal = rollDice();
console.log(diceTotal); // let random = Math.random() * sides.length
// console.log(random)
// let roll = Math.floor(random)
// console.log(roll)