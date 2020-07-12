class Person {
    //constructor
    constructor (name) {
        this.name = name;
    }

    //method
    sayHello() {
        console.log(`안녕 나는 ${this.name}야`);
    }
}


// 상속
// Person이 갖고 있는 걸 다 가지면서 자기만의 상태와 동작을 갖고싶어
class Student extends Person {
    //constructor
    constructor(name, school, major){

    }
}


const jeonghye = new Person('정혜')
jeonghye.sayHello();