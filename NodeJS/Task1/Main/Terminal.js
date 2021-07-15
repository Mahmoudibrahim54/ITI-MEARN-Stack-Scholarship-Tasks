const fs = require("fs");
let myArgs = process.argv;
console.log(myArgs[2]);

if (myArgs[2] === "myNG") {
  if (myArgs[3] === "g" || myArgs[3] === "generate") {
    if (myArgs[4] === "c") {
      let compName = myArgs[5];
      let comp = `import { Component, OnInit } from '@angular/core';\n\
\n\
@Component({\n\
  selector: 'app-${compName}',\n\
  templateUrl: './${compName}.component.html',\n\
  styleUrls: ['./${compName}.component.css']\n\
})\n\
export class ErrorComponent implements OnInit {\n\
    \n\
  constructor() { }\n\
  \n\
  ngOnInit(): void {\n\
  }\n\
  \n\
}\n\
;`;
      fs.writeFileSync("./" + compName + ".json", comp);
    }
  }
}
