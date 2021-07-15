let obj = { 
    Name: "mahmoud", 
    ID: "SW-100", 
    Position: "SW",
    [Symbol.iterator]() {
      let values = Object.values(this);
      let keys = Object.keys(this);
      let index = 0;
      return {
        next() {
          if (index < values.length) {
            let myValue = values[index];
            let myKey = keys[index];
            index++;
            return { key: myKey ,value: myValue, done: false };
          } else return { done: true };
        }
      };
    }
  };

  console.log(...obj);
for(i of obj){
    console.log(i);
}
let iter = obj[Symbol.iterator]();
console.log(iter.next());
