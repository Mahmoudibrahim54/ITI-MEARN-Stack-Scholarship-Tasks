// APIs from manufactures
// Receiver
export class SmartTV {
    turnOn() { console.log('Turning TV On'); }
    ;
    setVolume(volume) { console.log(`Volume set to ${volume}`); }
    ;
    off() { console.log("Turning TV Off"); }
    ;
    setBrightness(v) { console.log('Brightness' + v); }
}
export class CeilignLight {
    on() { console.log("Light on"); }
    ;
    off() { console.log("Light off"); }
    ;
}
export class CeilingFan {
    high() { console.log("Fan high"); }
    ;
    off() { console.log("Fan off"); }
    ;
}
export class GarageDoor {
    up() { console.log("Garage Door up"); }
    ;
    down() { console.log("Garage Door down"); }
    ;
}
