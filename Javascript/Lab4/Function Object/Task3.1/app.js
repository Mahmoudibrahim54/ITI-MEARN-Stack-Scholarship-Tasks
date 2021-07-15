
// call function with 2 args only
function showInput(inp1,inp2){
    if(arguments.length !== 2){
        throw new Error("you can use this fuction with 2 arguments only");
    }
    else{
        return "input 1 = " + inp1 + ", input 2 = " + inp2;
    }
}