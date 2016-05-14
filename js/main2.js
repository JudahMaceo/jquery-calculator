console.log("connected");
//judah's javascript
// oli's notes


// declare all variables

// select elements with buttons class
var buttons = $(".buttons");
var eventTarget;
// the text from your eventTarget
var eventTargetText;
// our two values
var num1;
var num2;
// the mathematic operator we are using
var operator;
var operator2;
var number;
// 88 + 33
var equationString = "";
// ["88", "33"]
var equationArray = "";

//when you click on a button
buttons.on("click", function(event) {
    // get the target of the event
    eventTarget = $(event.target);
    // get the eventTarget text
    eventTargetText = $(event.target).text();
    // add event Target Text to screen
    $("#screen").append(eventTargetText);

    // if the eventTarget is a mathematical operator
    if (eventTarget.hasClass("operator")) {

        operator = eventTargetText;
        // if the operator is "equals"
        // perform the mathematic equation

        // Could this be its own function
        if (operator === "=") {
          console.log(calc[operator2](num1, num2));
          $("#screen").append(calc[operator2](num1, num2));

            // if (operator2 === "+") {
            //     console.log("add stuff");
            //     console.log(calc[operator2](num1, num2));
            //     $("#screen").append(calc[operator2](num1, num2));
            // } else if (operator2 === "-") {
            //     console.log("subtract stuff");
            //     console.log(calc[operator2](num1, num2));
            //     $("#screen").append(calc[operator2](num1, num2));
            // }
        } else {
            // if not an "equals"
            // add the operator to the string
            equationString = equationString + eventTargetText;
        }

    } else {
        // if the event target text isn't an operator
        // the eventTargetText is a number
        // change the equation String
        equationString = equationString + eventTargetText;
    }



    // split the at the "+" operator
    // equationArray = equationString.split("+");
    var regexPattern = /(\d+)(\+|\-|\/|x)(\d+)/;
    equationArray2 = equationString.match(regexPattern);
    console.log(equationArray2);
    // log the array
    // console.log(equationArray);

    // parse the Integer Strings into Integers
    num1 = parseInt(equationArray2[1]);
    num2 = parseInt(equationArray2[3]);
    operator2 = equationArray2[2];

});


var calc = {
    '+': function(a, b) {
        return a + b;
    },

    '-': function(a, b) {
        return a - b;
    },

    '/': function(a, b) {
        return a / b;
    },

    'x': function(a, b) {
        return a * b;
    }

};
