let MYBook = {
    Name: 'JSBook',
    version: 1,
    Edtion: '1.0.0',
    AutherName: { "FName": 'John', "LName": 'Adam' },
    printData: function () { return `Name:${this.Name}` },
    BindNameValue: function () { }
}
//ES5 create Function Object
//JQBook=Object.create(MYBook,{Name:{value:'JQBook'}});
// let JQBook = Object.create(MYBook,{});//Cloning 
// console.log(JQBook.Edtion);
// console.log(JQBook.AutherName);
let JQBook = Object.create(MYBook, { PublishDate: { value: new Date().getDate() }, Name: { value: 'JQBook' } });
