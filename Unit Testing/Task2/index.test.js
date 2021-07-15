const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();
import {capitalizeText,createArray } from './Task1.js';


describe("function capitalizeText that capitalize a String",function(){

    it("capitalize given string",function(){

            capitalizeText("hamada").should.be.equals("HAMADA")   
    })
    
    it("None string args",function(){

        expect(()=>{capitalizeText()}).to.throw(TypeError,"parameter should be string");
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
            assert.isArray(createArray(myVar));
        })
    
        it("check length and one of the elements",function(done){
            setTimeout(done,4000)

            expect(createArray(myVar)).to.have.lengthOf(4).that.includes(2);
    
            describe.skip("skipped tests",()=>{
                it("pending test case",()=>{
                    expect(createArray(myVar)).to.have.lengthOf(4).that.includes(2);
            
                  })
            })
     

})
    

    

      

})

