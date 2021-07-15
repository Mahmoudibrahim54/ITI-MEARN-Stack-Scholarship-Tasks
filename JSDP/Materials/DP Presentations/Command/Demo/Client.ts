import { RemoteControl } from './Controller.js'
import { SmartTV } from './APIs.js'
import { TvCommandGen } from './TvCommandGen.js'



let rc = new RemoteControl();

let tv = new SmartTV();

let tvCmdGen = new TvCommandGen(tv);

rc.setBtns(tvCmdGen.getTvOnCommand(), tvCmdGen.getTvOffCommand(), tvCmdGen.getFullBrightnessCommand())

rc.btn1Click();
rc.btn2Click();
rc.btn3Click();