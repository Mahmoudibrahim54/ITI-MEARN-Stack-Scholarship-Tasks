interface HomeAppliance { }

// APIs from manufactures
// Receiver

export class SmartTV implements HomeAppliance {
  turnOn() { console.log('Turning TV On') };
  setVolume(volume: number): void { console.log(`Volume set to ${volume}`) };
  off(): void { console.log("Turning TV Off") };
  setBrightness(v: number) { console.log('Brightness' + v) }
}

export class CeilignLight implements HomeAppliance {
  on(): void { console.log("Light on") };
  off(): void { console.log("Light off") };
}

export class CeilingFan implements HomeAppliance {
  high(): void { console.log("Fan high") };
  off(): void { console.log("Fan off") };
}

export class GarageDoor implements HomeAppliance {
  up(): void { console.log("Garage Door up") };
  down(): void { console.log("Garage Door down") };
}