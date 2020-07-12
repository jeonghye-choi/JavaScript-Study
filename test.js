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


// function a(word){
//     console.log(`a execute and ${word}`)
// }

// a('love');

// var b = a('toy');
// b();

// const student = {
//     name: '최정혜',
// };

// const univStudent = {
//     ...student,
//     major: '컴퓨터공학과',

// }

// const koreanUnivStudent = {
//     ...univStudent,
//     region: 'Seoul',
// }

// console.log(student);
// console.log(univStudent);
// console.log(koreanUnivStudent);

// const oddNumbers = [1,3,5,7,9];
// const evenNumbers = [2,4,6,8,10];

// // console.log(...oddNumbers, ...evenNumbers);

// const allNumbers = [...oddNumbers, ...evenNumbers];

// let result = 0;
// allNumbers.map(x => result += x);

// console.log(result);

// const koreanUnivStudent = {
//     name: "최정혜",
//     major: "컴공",
//     region: "서울",
// };

// // const {name, major, region} = koreanUnivStudent;
// const {name, ...rest} = koreanUnivStudent;

// console.log(rest);   //
