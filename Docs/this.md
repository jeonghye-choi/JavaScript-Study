# 📙 This

### ✔ binding

: 호출한 대상에게 실제함수를 연결 짓는 것

즉, 올바른 객체에 올바른 메서드 묶어주기(매칭시키기)

```js
var myObject = {
    name: 'jeonghye',
    sayName: function () {
        console.log(this.name);
    }
}

var otherObject = {
    name: 'sugin',
}

otherObject.sayName = myObject.sayName;

myObject.sayName();  //jeonghye
otherObject.sayName();  //sugin
```

- 1. 일반 함수를 호출했을 때 this는 어디로 바인딩 되느냐

    함수는 사실 전역객체의 메서드

    전역 변수도 사실 전역 객체의 속성

    ```js
    var name = "jeonghye";

    console.log("전역변수 name: ", name);
    console.log("전역객체의 속성 name: ", window.name);

    //결과는 같음
    ```
    => 일반 함수의 호출과정에서의 this는 **전역객체** 를 가리킨다

    따라서,
    ```js
    var name = "Jeonghye";
    console.log(window.name);   // Jeonghye

    var sayHello = function(){
        var name = "Kim";
        console.log(this.name);   // Jeonghye: 전역객체의 name
    }

    sayHello();
    ```

- 2. 객체를 호출했을 때 this는 어디로 바인딩 되느냐

    => 메서드를 호출한 객체로 바인딩

    ```js
    var myObject = {
        name: 'Jeonghye';
        sayName: function() {
            console.log(this.name);
        }
    }

    var otherObject = {
        name: 'Kim';
    }

    otherObject.sayName = myObject.sayName;

    myObject.sayName();   //Jeonghye
    otherObject.sayName();   //Kim
    ```

- 3. 생성자 함수를 호출했을 때 this는 어디로 바인됭 되느냐

    => 생성자 함수를 통해 생성되어 반환되는 객체에 바인딩

    ```js
    // Person 생성자 함수
    var Person = function(name){
        this.name = name;
    }

    var boy = new Person('정혜');
    console.log(boy.name);

    var girl = new Person('수진');
    console.log(girl.name);
    ```

#### 🔎 생성자 함수 this VS 일반 함수 this

생긴 건 똑같이 생겼다!

하지만,

new로 **새로운 객체를 만들면** 생성자 함수

(new없이) **그냥 호출되어 쓰이면** 일반 함수

- 클래스 사용

    ```js
    class Rectangle {
        constructor(height, width){
            this.height = height;
            this.width = width;
        }
    }

    const square = new Rectangle(10, 10);
    ```
- new 를 사용하지 않는다면!

    ????? 왜 undefined가 되는 거지/...ㅠㅜㅠ

    질문!

#### 🔎 주의! 내부함수의 this는 무조건 전역 객체에 바인딩 된다

- 일반 함수의 내부함수 innerFunction의 this는 전역객체에 바인딩

    ```js
    function myFunction(){
        console.log("myFunction's this: ", this);  // window에 바인딩
        function innerFunction() {
            console.log("InnerFunction's this: ", this);  // window에 바인딩
        }
        innerFunction();
    }
    myFunction();
    ```

- 메서드의 내부함수 innerMethod의 this도 전역객체에 바인딩

    ```js
    var value = 1;

    var obj = {
        value: 100,
        objmethod: function(){
            console.log("objmethod's this: ", this);   //obj에 바인딩됨
            console.log("objmethod's this.value ", this.value);   //obj의 속성 : 100
            function innermethod() {
                console.log("Innermethod's this: ", this);
                console.log("Innermethod's this.value: ", this.value);
            }
            innermethod();
        }
    };

    obj.objmethod();
    ```

- 생성자함수의 내부함수 innerFunction의 this도 전역객체에 바인딩

    --?????????????????????? 생성자함수안의 매서드 함수의 this는 대체 어떻게 되는거지???

    ```js
    function constructor() {
        console.log("constructor's this: ", this);
        function innerFunction(){
            console.log("innerFunction's this: ", this); // window에 바인딩됨
        }
        innerFunction();
    }

    constructor();

    myobj = new constructor();
    ```

#### 🔎 this가 전역객체에 바인딩되지 않게 하기 위해

- apply
- call
- bind


### ✔ 전역 객체

전역을 감싸는 객체

코드 전체를 아우르는 객체

- js in browser : window 객체
- js in server side (Node.js) : global 객체

