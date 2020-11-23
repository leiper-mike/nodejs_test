'use strict';
const prompt = require('prompt-sync')();
const methods = require('./CodingBatMethods.js');
const countdown = require('./8OutOf10Cats.js');
while (true) {
    console.log('0: Exit');
    console.log('1: Lone Sum');
    console.log('2: Blackjack');
    console.log('3: No Teen Sum');
    console.log('4: 8 out of 10 Cats does Countdown number round');
    console.log('5: 8 out of 10 Cats does Countdown letter round');
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
        case 5:
            var nums = prompt('# of words to return starting with 9 letter words, -1 for all words:');
            var a = prompt('1st letter:')
            var b = prompt('2nd letter:')
            var c = prompt('3rd letter:')
            var d = prompt('4th letter:')
            var e = prompt('5th letter:')
            var f = prompt('6th letter:')
            var g = prompt('7th letter:')
            var h = prompt('8th letter:')
            var i = prompt('9th letter:')
            console.log(countdown.lettersRound(a,b,c,d,e,f,g,h,i, nums));
            break;
        case 6:
            console.log(countdown.count());
            break;
        default:
            console.log('Please enter a valid choice');
    }
}