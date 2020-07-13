function sayHello(name) {
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{
            console.log(`내 이름은 ${name} 이야`);
            resolve(`${name}`);
        } , 2000);
    } )
}

async function foo(name) {
    const resultName = await sayHello(name);
    console.log("2초 뒤 실행될 코드")
}


foo("정혜");