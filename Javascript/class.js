
class hello {
  constructor(name, year , age , place) {
    this.name = name;
    this.year = year;
    this.age = age;
    this.place = place;
  }
  nameYear(name , year){
    return new hello(name , " ", year)
 }
}
const ref = new hello("john" ,null , 2022)
console.log(ref.name,ref.age);
const date = new Date();
console.log(date.getDate());
console.log(date);


