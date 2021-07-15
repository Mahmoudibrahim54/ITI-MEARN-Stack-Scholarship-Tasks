#!/usr/bin/env node

const fs = require("fs");
let myArgs = process.argv;
console.log(myArgs[2]);
let style = true;
let tests = true;

  if (myArgs[2] === "g" || myArgs[2] === "generate") {
    if (myArgs[3] === "c" || myArgs[3] === "component" ){
      let compName = myArgs[4];
      let compTS = `import { Component, OnInit } from '@angular/core';\n\
        \n\
        @Component({\n\
        selector: 'app-${compName}',\n\
        templateUrl: './${compName}.component.html',\n\
        styleUrls: ['./${compName}.component.css']\n\
        })\n\
        export class ${compName}Component implements OnInit {\n\
         \n\
        constructor() { }\n\
        \n\
        ngOnInit(): void {\n\
        }\n\
        \n\
        }\n\
        ;`;
      fs.writeFileSync("./" + compName + "component.ts", compTS);
      fs.writeFileSync("./" + compName + "component.html",`<p>${compName}-works</p>`);


      for(let i =5;i<myArgs.length;i++){
          if (myArgs[i] === "--skip-tests"){
              tests = false;
          }
          if (myArgs[i] === "--inline-style"){
            style = false;
        }
      }
      if(tests){
        fs.writeFileSync("./" + compName + "component.spec.ts",`<p>${compName}-works</p>`);
      }
      if(style){
        fs.writeFileSync("./" + compName + "componentcss","");

      }
    }
    else if(myArgs[3] === "s" || myArgs[3] === "service"){

        let service = "import { OnInit } from '@angular/core';\n\
        \n\
        @Injectable({\n\
          providedIn: 'root'\n\
        })\n\
        export class UsersApiService{\n\
            \n\
          constructor() { }\n\
          \n\
          }"
        fs.writeFileSync("./" + myArgs[4] + "-service.ts",service);

  }
}
