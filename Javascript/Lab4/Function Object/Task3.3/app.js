//reverse using 2 different methodsi

function reverseM1(){
    var result = [];
    for(var i = 0 ;i < arguments.length; i++){
        result[i] = arguments[i];
    }
    return result.reverse();
}

function reverseM2(){
    result = [];
    return result.reverse.call(arguments);
}