# 📙 Spread & Destructuring

### ✔ Spread

객체나 배열의 요소들을 펼쳐 보아라

```js
const student = {
    name: '최정혜',
};

const univStudent = {
    ...student,
    major: '컴퓨터공학과',
}

const koreanUnivStudent = {
    ...univStudent,
    region: 'Seoul',
}

console.log(student);   //{ name: '최정혜' }
console.log(univStudent);   //{ name: '최정혜', major: '컴퓨터공학과' }
console.log(koreanUnivStudent);   //{ name: '최정혜', major: '컴퓨터공학과', regin: 'Seoul' }
```

```js
const oddNumbers = [1,3,5,7,9];
const evenNumbers = [2,4,6,8,10];
const allNumbers = [...oddNumbers, ...evenNumbers];

console.log(allNumbers);   //1 3 5 7 9 2 4 6 8 10
```

- 함수를 호출해주는 인자에서도 많이 쓰인다


    보통
    ```js
    //allNumbers 안에 있는 숫자를 모두 더해주는 함수 sum : sum 함수는 인자로 allNumbers의 요소들을 받는다
    let result = 0;
    allNumbers.map(x => result += x);

    console.log(result);   //55
    ```

    spread문법 사용
    ```js
    function sum (n1,n2,n3,n4,n5,n6,n7,n8,n9,n10){
        return n1+n2+n3+n4+n5+n6+n7+n8+n9+n10;
    }

    const result = sum(...allNumbers);
    console.log(result);   //55
    ```

### ✔ Destructuring; rest

값을 받아오는 함수의 파라미터에서 주로 사용됨

```js
function sum (...rest){
    console.log(rest)
    console.log(rest[0])
}

function sum (...restName){
    console.log(restName)
    console.log(restName[0])
}

const result = sum(...allNumbers);
```
- ...allNumbers : 배열안의 요소를 펼쳐서 요소 여러개로 가져옴

- ...rest : 요소 여러개를 배열 안에 넣음


```js
const koreanUnivStudent = {
    name: "최정혜",
    major: "컴공",
    region: "서울",
};

const {name, major, region} = koreanUnivStudent;
const {name, ...rest} = koreanUnivStudent;

console.log(rest);   //{ major: '컴공', region: '서울' }
```
