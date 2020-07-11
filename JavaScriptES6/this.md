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

### ✔ 전역 객체

전역을 감싸는 객체

코드 전체를 아우르는 객체

- js in browser : window 객체
- js in server side (Node.js) : global 객체

