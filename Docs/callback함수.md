# 📙 callback 함수

### ✔ 동기 & 비동기

![image](https://user-images.githubusercontent.com/54584063/87241919-b7efb300-c462-11ea-8536-112501399391.png)


하지만 그럼에도 불구하고 **'실행순서가 보장되어야'** 하는 경우는 있다

결제처리함수가 완료되면 --> B함수 실행된다

오래 걸리는 C함수의 리턴 값으로 --> D함수가 처리된다

=> 이럴경우 **"callback 함수"** 

: 부르면 타이밍 맞춰 오는 함수

### ✔ 콜백 함수

```js
function a(callback){
    setTimeout(() => {
        console.log("2초 시간이 걸리는 a함수");
        callback();
    }, 2000);
}

function b(){
    console.log("a 다음에 실행되어야 하는 b함수");
}

a(b);

// 2초 시간이 걸리는 a함수
// a 다음에 실행되어야 하는 b함수
```

### ✔ 콜백 지옥

5초 걸리는 a -> 4초 걸리는 b -> 3초 걸리는 c -> 2초 걸리는 d 

```js
function a(){
    setTimeout(function b() {
        console.log('5초 걸리는 a');
        setTimeout(function c(){
            console.log('4초 걸리는 b');
            setTimeout(function d(){
                console.log('3초 걸리는 c');
                setTimeout(function e(){
                    console.log('2초 걸리는 d');
                }, 2000);
            }, 3000);
        }, 4000);
    }, 5000);
};

a();
```

#### 🔎 ES6: Promise ~ async


