// class HeadMaster {
//     constructor(_Name, _Age) {
//         if (HeadMaster.instance instanceof HeadMaster) {
//             //SingleTone DP
//             return HeadMaster.instance
//         }
//         this.Name = _Name;
//         this.Age = _Age;
//         this.HeadActions = {
//             visties: 12,
//             timeOfMeeting: Math.round(Math.random() * 40),

//         }
//         HeadMaster.instance = this;//SingleTone DP
//         Object.freeze(this);
//     }
// }
// const h1=new HeadMaster("Ahmed",28);
// h1.Name="Mohamed";
// //


class SettingObject{
    constructor(Name){
        debugger;
        // if(SettingObject.instance instanceof SettingObject){
        //     return SettingObject.instance;
        // }
        if(SettingObject.instance !=null){
            throw new Error("Cant take many instance from this object");
        }
        this.Settingobj={
            version:Math.round(Math.random()*40),
            Color:'#FF00FF',
            MasterPageName:'Welcome.html',
            MasterRouting:'Home/welcome.html',
            AdminData:{
                userName:Name,
                pass:'P@ssw0rd'
            }
            

        }
        //SettingObject.instance=this;
        Object.defineProperty(SettingObject,"instance",{
            value:this,
            writable:false
        })
       
    }
    get(key){
        return this.Settingobj[key];
    }
    
}
const settingobj=new SettingObject("admin1");
SettingObject.instance=null;
 const settobj2=new SettingObject("admin2")
// console.log(settingobj.get('AdminData'));


