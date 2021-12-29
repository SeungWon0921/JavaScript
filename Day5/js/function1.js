function getPresent(){
    console.log('🎁');
}

function setJumsu(jumsu){
    console.log(`전달받은 점수는 ${jumsu} 입니다`);

}

function getTotal(start, end){
    let sum = 0;
    for(let i= start; i<=end; i++){
        sum += i;
    }
    console.log(` ${start}부터 ${end}까지의 총합은 ${sum}입니다 `);
}

function setNumbers(num1, ...num2){
    console.log(`num1의 값 : ${num1}`);
    console.log(`num2의 값 : ${num2}`);
}

function setMath(...math){
    for(let i of math){
        console.log(i);
    }
}

function getDonut(){
    return '🍩';
}

function plus(num1, num2){
    return num1 + num2 ;
}
function sub(num1, num2){
    return num1 - num2 ;
}
function mul(num1, num2){
    return num1 * num2 ;
}
function nanu(num1, num2){
    return num1 / num2 ;
}