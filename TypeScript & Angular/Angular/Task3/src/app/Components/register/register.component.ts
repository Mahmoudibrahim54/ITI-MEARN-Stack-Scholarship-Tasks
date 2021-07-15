import { Component, Output,EventEmitter, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
  }

  

  name:string="";
    age:number=22;
    @Output() exportEvent = new EventEmitter();
    
    myValidationForm = new FormGroup({
        name:new FormControl("",[Validators.required,Validators.minLength(3)]),
        age:new FormControl(22,[Validators.min(18), Validators.max(50),Validators.required])
      });
    
      get nameValid(){
        return this.myValidationForm.controls.name.valid;
      }
    
      get ageValid(){
        return this.myValidationForm.controls.age.valid;
      }
    sendData(){
        let student:{name:string,age:number} = {name:this.name,age:this.age}
        console.log(student);
        console.log(this.myValidationForm.valid + " student");
        console.log(this.nameValid+" name");
        console.log(this.ageValid+" age");
        console.log(this.name+ " " + this.age)


        if(this.myValidationForm.valid){
        // let student:{name:string,age:number} = {name:this.name,age:this.age}
         this.exportEvent.emit(student);
         console.log(student);
        }
    }
  

}
