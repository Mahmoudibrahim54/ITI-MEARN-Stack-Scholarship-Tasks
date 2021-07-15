var Person = function(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
 
Person.prototype = { 
    save: function() {
        var memento = JSON.stringify(this);  //save the current state
        return memento;
    }, 
    undo: function(memento) {
        var m = JSON.parse(memento);    //undo the last saved state
        this.name = m.name;
        this.age = m.age;
        this.city = m.city;
    }
}
 
var CareTaker = function() {
    this.mementos = {}; 
    this.add = function(key, memento) {
        this.mementos[key] = memento;
    }, 
    this.get = function(key) {
        return this.mementos[key];
    }
} 
 
    var p1 = new Person("Ahmed", 25, "Cairo");
    var p2 = new Person("Ali", 27, "Alex", );
    var caretaker = new CareTaker();
 
    console.log("pesron data: ",p1.name);
    console.log("pesron data: ",p2.name);

    // save state 
    caretaker.add(1, p1.save());
    caretaker.add(2, p2.save());
 
    // mess up their names 
    p1.name = "Mohamed";
    p2.name = "Hesham";
    //caretaker.add(1, p1.save());

    console.log("after change: ",p1.name);
    console.log("after change: ",p2.name);

 
    // restore original state 
    p1.undo(caretaker.get(1));
    //p1.undo(caretaker.get(1));
    p2.undo(caretaker.get(2));

    console.log("undo: ",p1.name);
    console.log("undo: ",p2.name);


