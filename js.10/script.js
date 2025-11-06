// setInterval - белгилуу бир убакыттын ичинде кандайдыр бир функция

// let count = 0

// setInterval(() => {
//     count++
//     let p =document.getElementById('timer')
//     p.innerHTML = count
//     if (count >=3){
//         p.style.backgroundColor='yellow'}
//     if (count >=6){
//         p.style.backgroundColor='green'}
//     if (count >=9){
//         p.style.backgroundColor='blue'
//     }
// }, 1000);



let count = 0
let clent = null

const startK = () => {
    sum = document.getElementById('sum')
    if (clent !== null) return;
    clent=setInterval(() => {
        count++
        sum.innerHTML=count
    }, 1000);
}


const stopK = () => {
    clearInterval(clent)
    clent = null
}


const clearK = () => {
    sum = document.getElementById('sum')
    clearInterval(clent);
    clent = null
    count=0
    sum.innerHTML = count
}

