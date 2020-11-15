'use strict';
const prompt = require('prompt-sync')();
const methods = require('./CodingBatMethods.js');
const countdown = require('./8OutOf10Cats.js');
while (true) {
    console.log('0: Exit');
    console.log('1: Lone Sum');
    console.log('2: Blackjack');
    console.log('3: No Teen Sum');
    console.log('4: 8 out of 10 Cats does Countdown solver');
    var choice = Number(prompt('Please choose a function:'));

    switch (choice) {
        case 0:
            process.exit();
            break;
        case 1:
            var a = prompt('Integer a:')
            var b = prompt('Integer b:')
            var c = prompt('Integer c:')
            console.log(methods.loneSum(a, b, c));
            break;
        case 2:
            var a = prompt('Integer a:')
            var b = prompt('Integer b:')
            console.log(methods.blackJack(a, b));
            break;
        case 3:
            var a = prompt('Integer a:')
            var b = prompt('Integer b:')
            var c = prompt('Integer c:')
            console.log(methods.noTeenSum(a, b, c));
            break;
        case 4:
            var a = prompt('Integer a:')
            var b = prompt('Integer b:')
            var c = prompt('Integer c:')
            var d = prompt('Integer d:')
            var e = prompt('Integer e:')
            var f = prompt('Integer f:')
            var target = prompt('Target:')
            console.log(countdown.mathRound(a,b,c,d,e,f,target));
            break;
        default:
            console.log('Please enter a valid choice');
    }
}