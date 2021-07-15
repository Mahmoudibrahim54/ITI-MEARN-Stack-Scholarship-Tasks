export default class DeveloperLeader {
  constructor(_name,_age)  {
    if (DeveloperLeader.instance instanceof DeveloperLeader) {
      return DeveloperLeader.instance;
    }
    this.name = _name;
    this.age = _age;
    DeveloperLeader.instance = this;
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
