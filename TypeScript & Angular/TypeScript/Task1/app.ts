abstract class Account{
    Acc_no:number;
    Balance:number;
    constructor(Acc_no:number,Balance:number){
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    abstract debitAmount();
    abstract creditAmount();
    getBalance(){
        return this.Balance;
    }
}
interface IAccount{
    Date_of_opining:Date;
    addCustomer:()=>void;
    removeCustomer:()=>void;
}
class Current_Account  extends Account implements IAccount{
    
    constructor(Interest_rate:number,Date_of_opining:Date,Acc_number:number,Balance:number){
        super(Acc_number,Balance);
        this.Interset_rate = Interest_rate;
    }
    Date_of_opining = new Date;
    Interset_rate:number;
    
     debitAmount(){};
     creditAmount(){};
     addCustomer(){};
     removeCustomer(){};

    
}
class Saving_Account  extends Account implements IAccount{
    
    constructor(Min_Balance:number,Date_of_opining:Date,Acc_number:number,Balance:number){
        super(Acc_number,Balance);
        this.Min_Balance = Min_Balance;
    }
    Date_of_opining = new Date;
    Min_Balance:number;
    
     debitAmount(){};
     creditAmount(){};
     addCustomer():void{};
     removeCustomer():void{};

    
}