const chai = require('chai')
const expect = chai.expect
const should = chai.should();
const assert = chai.assert;
const Task = require( "../Task1")


describe("function capitalizeText that capitalize a String",function(){

    it("capitalize given string",function(){

            Task.capitalizeText("hamada").should.be.equals("HAMADA")   
    })
    
    it("None string args",function(){

        expect(()=>{Task.capitalizeText()}).to.throw(TypeError,"parameter should be string");
    })


})
describe("function createArray that generates an array with given length", function(){
    this.timeout(5000)
    let myVar = 2;
    beforeEach(()=>{
        myVar++;
        console.log(" var is " + myVar)
    })
  


  it("check if return  is an array",function(done){
      setTimeout(done,3000)
            assert.isArray(Task.createArray(myVar));
        })
    
        it("check length and one of the elements",function(done){
            setTimeout(done,4000)

            expect(Task.createArray(myVar)).to.have.lengthOf(4).that.includes(2);
    
            describe.skip("skipped tests",()=>{
                it("pending test case",()=>{
                    expect(Task.createArray(myVar)).to.have.lengthOf(4).that.includes(2);
            
                  })
            })
     

})
    

    

      

})

