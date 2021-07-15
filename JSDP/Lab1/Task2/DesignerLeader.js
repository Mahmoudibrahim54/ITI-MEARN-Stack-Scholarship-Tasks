export default class DesignerLeader {
  constructor(_name,_age)  {
    if (DesignerLeader.instance instanceof DesignerLeader) {
      return DesignerLeader.instance;
    }
    this.name = _name;
    this.age = _age;
    DesignerLeader.instance = this;
  }
  set name (_name){
    this._name = _name
}

set age(_age){
    this._age = _age;
}
get name(){
    return this.name;
}
get age(){
  return this.age;
}
}
