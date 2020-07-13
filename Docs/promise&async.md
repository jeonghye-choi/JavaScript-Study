# 📙 Promise Async Await

예측하고 대비하면 프로그램을 멈출 필요 없다

### ✔ Promise

```js
asncFunction = new Promise((resolve, reject) => {...});
```

- resolve: 약속을 지켰을 때 호출
- reject: 약속 못 지켰을 때 호출

    ```js
    function sayHello(name){
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                console.log(`내 이름은 ${name}이야`);
                resolve();

            }, 2000);


            // reject();
        } )
    }

    sayHello('정혜')
        .then(() => {console.log('그래 안뇽!')})
        // .catch(() => {...})   <-- reject를 사용하려면
    ```

- resolve에 return값을 넣어 줄 수 있다 (resolve의 인자값으로!) --> then을 통해서 받아 올 수 있음
    ```js
    function sayHello(name){
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                console.log(`내 이름은 ${name}이야`);
                resolve(`${name}`);

            }, 2000);


            // reject();
        } )
    }

    sayHello('정혜')
        .then((name) => {console.log(`그래 안녕 ${name}`)})
        // .catch(() => {...})   <-- reject를 사용하려면
    ```

### ✔ Async / Await

동기함수처럼 비동기함수 읽고 쓰기

```js
async functionName (...) {
    const result = await asyncFunction()
}
```
- 예시
    ```js
    function sayHello() {
        return new Promise( (resolve, reject) => {
            setTimeout( ()=>{
                console.log(`내 이름은 ${name} 이야`);
                resolve(`${name}`);
            } , 2000);
        } )
    }


    sayHello();
    foo();
    ```
    위에서 sayHello()가 2초가 걸리기 때문에

    foo 실행후 --> sayHello 실행

- sayHello --> foo 실행

    ```js

    async function foo(name) {
        const resultName = await sayHello(name);
        console.log("2초 뒤 실행될 코드")
    }


    foo("정혜");
    ```

#### 🔎 실전

실전에서 async/await 은 외부정보를 갖고 올때 많이 쓰임

-> 받아오는 정보로 데이터를 처리해야 하기 때문에


async/await + 예외처리 
