// TODO: Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = x < 60;
var expression2 = x > 60;

// TODO: Write Your JavaScript Code Here
var compare = function () {
  if (expression1 && expression2) {
    console.log("True ✅ True ✅");
  } else if (expression1 && !expression2) {
    console.log("True ✅ False ❌");
  } else if (!expression1 && expression2) {
    console.log("False ❌ True ✅");
  } else {
    console.log("False ❌ False ❌");
  }
};

compare();
