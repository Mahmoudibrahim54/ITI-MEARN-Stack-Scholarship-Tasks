export default class QALeader {
  constructor(_name,_age) {
    if (QALeader.instance instanceof QALeader) {
      return QALeader.instance;
    }
    this.name = _name;
    this.age = _age;
    QALeader.instance = this;
  }
  set name (_name){
      this._name = _name;
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
