    // // Task 3(B)
// let x = +prompt("x=");
// let y = 0;
// if(x>5){
//     y = Math.sqrt(7*x**2+6);
// }
// else{
//     y = Math.abs(x-7);
// }
// let cont = document.getElementById("test");
// cont.textContent = `${y.toFixed(2)}`;
        // // Task 7(1 way)
// let x = prompt("x=");
// let xSplit = x.split("");
// let b = Number(xSplit[xSplit.length-1]) + Number(xSplit[xSplit.length-2]) + Number(xSplit[xSplit.length-3]);
// let a = Number(xSplit[0]) + Number(xSplit[1]) + Number(xSplit[2]);
// let cont = document.getElementById("test");
// if(a==b){
//     cont.textContent = `Так воно щасливе ${a} ${b}`;

// }
// else{
//     cont.textContent = `ні ${a} ${b}`;
// }
        // // Task 7(2 way)
// let x = prompt("x=");
// let a = Number(x.at(0))+Number(x.at(1))+Number(x.at(2));
// let b = Number(x.at(-1))+Number(x.at(-2))+Number(x.at(-3));
// let cont = document.getElementById("test");
// if(a==b){
//     cont.textContent = `Так воно щасливе ${a} ${b}`;
// }
// else{
//     cont.textContent = `ні ${a} ${b}`;
// }
    // // Task 12
// let a = +prompt("a=");
// let b = +prompt("b=");
// let c = +prompt("c=");
// let cont = document.getElementById("test");
// if((a+b+c)==180){
//     if((a+b)>c && (b+c)>a && (a+c)>b){ // if(a<90 || b<90 || c<90)
//         cont.textContent = `TAK`;
//     }
//     else{
//         cont.textContent = `НІ`;
//     }
// }
// else{
//     cont.textContent = `Ви ввели неправильні дані`;
// }
    // // Task 15
// let b = +prompt("b=");
// let c = +prompt("c=");
// let x;
// let cont = document.getElementById("test");
// if (b!=0 && (2*c/b)>0){
//     x = (2*c/b)**(1/2);
//     cont.textContent = `${x} and ${x*(-1)}`;
// }
// else{
//     if(b!=0 && (2*c/b)==0){
//         cont.textContent = `x=0`;
//     }
//     else{
//         if(b!=0 && (2*c/b)<0){
//             cont.textContent = `Немає коренів`;
//         }
//         else{
//             if(b==0 && c ==0){
//                 cont.textContent = `x -- будь-яке`;
//             }
//             else{
//                 if(b==0 && c!=0){
//                     cont.textContent = `Немаєє коренів`;
//                 }
//                 else{}
//             }
//         }
//     }
// }
    // // Task Tvorche

let fuel = +prompt("Рівень палива (0-100):");
let speed = +prompt("Теперішня швидкість(100-700):");
let isAtmosphere = confirm("Датчик атмосфери: Знайдена (ОК) або Вакуум (Відміна)?");
let cont0 = document.getElementById("cont0");
let cont1 = document.getElementById("cont1");
let cont = document.getElementById("test");
if (fuel > 20) {
    cont0.textContent = ` Статус: Палива достатньо!`;
    if (isAtmosphere) {
        cont1.textContent = ` Статус: Атмосфера наявна!`;
        if (speed < 500) {
            if (fuel > 50) {
                cont.textContent = ` Статус: М'яка посадка на парашутах виконана успішно!`;
            } else {
                cont.textContent = ` Статус: Тверда посадка! Парашути не витримали через нестачу палива.`;
            }
        } else {
            cont.textContent = ` КАТАСТРОФА: Надто швидко для повітря! Корпус згорів на вході!`;
        }
    } else {
        cont1.textContent = ` Статус: Атмосфера не наявна!`;
        if (speed < 1000) {
            if (fuel % 2 === 0) {
                cont.textContent = ` Статус: Ідеальна вертикальна посадка у вакуумі. Двигуни працюють синхронно.`;
            } else {
                cont.textContent = ` Статус: Крен! Один двигун барахлить (паливо не розміщене рівномірно). Посадка на бік.`;
            }
        } else {
            cont.textContent = ` КАТАСТРОФА: Зіткнення! Надто висока інерція для гальмування в вакуумі.`;
        }
    }
} else {
    cont.textContent = ` ПРОТОКОЛ ЗУПИНЕНО: Палива замало. Негайне катапультування!`;
}
