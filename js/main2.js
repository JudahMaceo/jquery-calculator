console.log("connected");

var buttons = $(".buttons");
var eventTarget;
var eventTargetText;
var num1;
var num2;
var operator;
var number;
var equationString = "";
var equationArray = "";

buttons.on("click",function(event){
  eventTarget = $(event.target);
  eventTargetText = $(event.target).text();
  $("#screen").append(eventTargetText);

  if( eventTarget.hasClass("operator") ){
    operator = eventTargetText;
    if(operator === "="){
        console.log( calc["+"](num1,num2) );
        $("#screen").append( calc["+"](num1,num2) );
    }

    else{
        equationString = equationString + eventTargetText;
    }

  }

  else{
    number = eventTargetText;
    equationString = equationString + eventTargetText;
  }



  equationArray = equationString.split("+");
  console.log(equationArray);

  num1 = parseInt(equationArray[0]);
  num2 = parseInt(equationArray[1]);

  });


var calc = {
'+': function(a,b) {
 return a+b;
},

'-': function(a,b) {
 return a-b;
},

'/': function(a,b) {
 return a/b;
},

'*': function(a,b) {
 return a*b;
}

};

//HELP BEGIN HERE
    // if( $(eventTarget).attr("class") === "operator" ){
    //   console.log("this is an operator");
    // }
    //
    // else{
    //   console.log("this is a number");
    // }
  //
//HELP BEGIN HERE
