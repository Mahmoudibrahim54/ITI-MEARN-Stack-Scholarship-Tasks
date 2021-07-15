import { Command } from './Command'
import { SmartTV } from './APIs'

class TvOnCommand implements Command {
  tv: SmartTV;
  constructor(tv: SmartTV) {
    this.tv = tv;
  }
  execute() {
    this.tv.turnOn();
  }
}

class TvOffCommand implements Command {
  tv: SmartTV;
  constructor(tv: SmartTV) {
    this.tv = tv;
  }
  execute() {
    this.tv.off();
  }
}

class TvMaxVolume implements Command {
  tv: SmartTV;
  constructor(tv: SmartTV) {
    this.tv = tv;
  }
  execute() {
    this.tv.setVolume(100);
  }
}
class FullBrightnessCommand implements Command {
  tv: SmartTV;
  constructor(tv: SmartTV) {
    this.tv = tv;
  }
  execute() {
    this.tv.setBrightness(100);
  }
}

export class TvCommandGen {
  tv: SmartTV;
  constructor(tv: SmartTV) {
    this.tv = tv;
  }

  getTvOnCommand(): Command {
    return new TvOnCommand(this.tv);
  }
  getTvOffCommand(): Command {
    return new TvOffCommand(this.tv);
  }
  getTvMaxVolumeCommand(): Command {
    return new TvMaxVolume(this.tv);
  }

  getFullBrightnessCommand(): Command {
    return new FullBrightnessCommand(this.tv);
  }

}