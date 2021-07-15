import { Command } from './Command'

export class RemoteControl {
  btn1: Command = { execute: () => null };
  btn2: Command = { execute: () => null };
  btn3: Command = { execute: () => null };

  setBtns(command1: Command, command2: Command, command3: Command): void {
    this.btn1 = command1;
    this.btn2 = command2;
    this.btn3 = command3;
  }

  btn1Click(): void {
    this.btn1.execute();
  }

  btn2Click(): void {
    this.btn2.execute();
  }

  btn3Click(): void {
    this.btn3.execute();
  }
}
