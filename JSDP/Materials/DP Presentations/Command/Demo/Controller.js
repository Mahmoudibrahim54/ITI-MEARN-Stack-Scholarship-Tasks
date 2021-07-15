export class RemoteControl {
    constructor() {
        this.btn1 = { execute: () => null };
        this.btn2 = { execute: () => null };
        this.btn3 = { execute: () => null };
    }
    setBtns(command1, command2, command3) {
        this.btn1 = command1;
        this.btn2 = command2;
        this.btn3 = command3;
    }
    btn1Click() {
        this.btn1.execute();
    }
    btn2Click() {
        this.btn2.execute();
    }
    btn3Click() {
        this.btn3.execute();
    }
}
