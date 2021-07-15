// call function with n params type number


function numSum(){
    var result = 0;
    if(arguments.length === 0){
        throw new Error("please enter at least one number");
    }
    for(var i = 0; i < arguments.length; i++){
        if(typeof(arguments[i]) != "number"){
            console.log(arguments[i] + " type = " + typeof(arguments[i]))
            throw new Error("function only accepts numbers");
        }
        else{
            result += arguments[i];
        }
    }
    return result;
}