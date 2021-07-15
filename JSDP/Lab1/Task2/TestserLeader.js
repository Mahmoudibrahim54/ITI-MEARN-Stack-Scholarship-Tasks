export default class TesterLeader {
  constructor(_name,_age)  {
    if (TesterLeader.instance instanceof TesterLeader) {
      return TesterLeader.instance;
    }
    this.name = _name;
    this.age = _age;
    TesterLeader.instance = this;
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
