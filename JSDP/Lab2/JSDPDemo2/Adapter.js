function Target() {
    this.request = function (start, End, Weight) {
        //calc
        return `Cost :${(End - start) + Weight}`;
    }
}
function SpecificTarget() {
    this.Data = function (Login) {
        console.log("Data", Login);
    }
    this.setStart = function (startValue) {
        this.start = startValue;
    }
    this.setEnd = function (endValue) {
        this.end = parseInt(endValue);
    }
    this.calc = function (weight) {
        return `new Cost ${this.end - this.start + weight}`;
    }
}
function AdapterLayer(_D) {
    let spT = new SpecificTarget();
    spT.Data(_D);
    this.request = function (startp, endp, weight) {
        spT.setStart(startp);
        spT.setEnd(endp);
        return spT.calc(weight)

    }

}

//Client
let t1 = new Target();
console.log(t1.request(80, 100, 20));
let Adapter = new AdapterLayer("abc");
console.log(Adapter.request(80, 100, 20));

