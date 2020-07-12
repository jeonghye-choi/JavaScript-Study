// function ComputerClass(name, classno){
// 	this.name = name;
// 	this.classno = classno;
// 	this.printInfo = function(){
// 		console.log(this.name + '강의' + this.classno + '분반입니다. ');
//     };
//     console.log("함수실행됨");
// }

// var class1 = new ComputerClass('운영체제', 2);

// console.log(class1)

// var class2 = ComputerClass('데이터베이스', 1);

// class2();


function a(word){
    console.log(`a execute and ${word}`)
}

a('love');

var b = a('toy');
b();