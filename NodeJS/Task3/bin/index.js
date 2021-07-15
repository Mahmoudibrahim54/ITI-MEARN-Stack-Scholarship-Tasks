#!/usr/bin/env node

const fs = require("fs");
const program = require("commander");
program
  .requiredOption("-g, --generate", "generate")
  .option("-c, --component <name>", "componenet")
  // .option("-s, --service <name>", "service")
  .option(" --skip-tests", "skip tests")
  .option(" --inline-style", "inline style")
  .option(" --no-skip-tests", "skip tests")
  .option(" --no-inline=style", "inline style");


program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
console.log("pizza details:");
if (options.component) readMyFile("c");
// if (options.service) readMyFile("s");

function readMyFile(item) {
  this._op = options;
  let mydata;
  fs.readFile("./" + item + ".txt", "utf-8", (err, data) => {
    if (err) {
      console.log("err ");
    } else {
      // console.log(data)
      console.log("*********************" + this._op.component);
      mydata = data.replace(/compName/g, this._op.component);
      console.log(mydata);
        fs.writeFileSync("./" + this._op.component + "-component.ts", mydata)
        fs.writeFileSync("./" + this._op.component + "-component.html", "")
        if(!this._op.skipTests){
          fs.writeFileSync("./" + this._op.component + "-component.spec.ts", "")

        }
        if(!this._op.inlineStyle){
          fs.writeFileSync("./" + this._op.component + "-component.css", "")

        }
      }
  });
}