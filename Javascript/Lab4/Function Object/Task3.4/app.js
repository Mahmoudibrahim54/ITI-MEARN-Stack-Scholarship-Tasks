function employee(empNm, empDpt,empSal){
    return{Name:empNm,Department:empDpt,Salary:empSal}
}



function genGetSet(){
    for(var i in this){
        console.log(i + " : " + this[i]);
        var propNmGet = "get"+i;
        this[propNmGet] = (function (j) {
            return function() {return this[j]};
          }(i));
        var propNmSet = "set"+i;
        this[propNmSet] = (function (j) {
            return function(val) {this[j] = val};
          }(i));
        }
    }