class TvOnCommand {
    constructor(tv) {
        this.tv = tv;
    }
    execute() {
        this.tv.turnOn();
    }
}
class TvOffCommand {
    constructor(tv) {
        this.tv = tv;
    }
    execute() {
        this.tv.off();
    }
}
class TvMaxVolume {
    constructor(tv) {
        this.tv = tv;
    }
    execute() {
        this.tv.setVolume(100);
    }
}
class FullBrightnessCommand {
    constructor(tv) {
        this.tv = tv;
    }
    execute() {
        this.tv.setBrightness(100);
    }
}
export class TvCommandGen {
    constructor(tv) {
        this.tv = tv;
    }
    getTvOnCommand() {
        return new TvOnCommand(this.tv);
    }
    getTvOffCommand() {
        return new TvOffCommand(this.tv);
    }
    getTvMaxVolumeCommand() {
        return new TvMaxVolume(this.tv);
    }
    getFullBrightnessCommand() {
        return new FullBrightnessCommand(this.tv);
    }
}
