let target = {
  Name: "Mahmoud",
  Address: "Alexandria",
  Age: 25,
};

let handler = {
  get: function (target, prop) {
    if (target.hasOwnProperty(prop)) {
     return target[prop];
    }
  },
  set: function(target,prop,value){
    if (target.hasOwnProperty(prop)) {
        if(prop === "Name"){
            if(typeof value === "string" && value.length === 7){
                target[prop] = value;
            }else{
                throw "Value Must be a String and exactly 7 Characters";
            }
        }
        else if(prop === "Address"){
            if(typeof value === "string"){
                target[prop] = value;
            }else{
                throw "Value Must be a String";
            }
        }
        else if(prop === "Age"){
            if(typeof value === "number" && value >=25 && value <= 60){
                target[prop] = value;
            }else{
                throw "Value Must be a Number between 25 and 60";
            }
        }
       }
  }
};
let myProxy = new Proxy(target,handler);
