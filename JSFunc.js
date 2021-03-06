//  Walter Johnson CS290 Week 3 Activity: JS Functions

// function that runs a function, but first makes sure it is, in fact, a function
var runFunc = function (funcToTry, funcToTryArg) {
    if (typeof funcToTry !== 'function') {
        throw {
            name: 'TypeError',
            message: "isn't a function"
        };
    }
    funcToTry(funcToTryArg);
}

// runs runFunc and catches errors
var tryFunc = function (funcTried, funcTriedArg) {
    try {
        runFunc(funcTried, funcTriedArg);
    } catch (error) {
        console.log(error.name + ': ' + funcTried + ' ' + error.message);
    }
}

tryFunc(functionStatement, 'before');

function functionStatement(when) {
    console.log("In this case, this function statement was called " + when + " it was declared.");
};

tryFunc(functionStatement, 'after');

tryFunc(functionExpression, 'before declared')

var functionExpression = function() {};

tryFunc(functionExpression, 'after declared and before defined');

var functionExpression = function (when) {
    console.log("In this case, this function expression was called " + when);
};

tryFunc(functionExpression, 'after declared and after defined.');

tryFunc(secondFunctionExpression, 'before');

var secondFunctionExpression = function (when) {
    console.log("In this case, this function expression was called " + when + " it was declared.");
};

tryFunc(secondFunctionExpression, 'after');
