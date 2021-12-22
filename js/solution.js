// 1.
{
const attributes = document.querySelector(`#ulId`).attributes;
const attrNames = [];
const attrValues = [];

for (i in attributes) { // не могу понять по условию, почему нужно применить for (.. of ..), это же не массив.
    if (attributes[i].nodeValue) attrValues.push(attributes[i].nodeValue);
    if (attributes[i].nodeName) attrNames.push(attributes[i].nodeName)
}
console.log(attrValues); // Массив значений аттрибутов
console.log(attrNames); // Массив имён аттрибутов


const allLi = document.querySelectorAll(`#ulId li`);

allLi[allLi.length - 1].innerHTML = `Привет меня зовут Калыван`; // изменяю текст

allLi[0].setAttribute(`data-my-name`, `Калыван`); // добавляю атрибут

document.querySelector(`#ulId`).removeAttribute(`data-dog-tail`) // удаляю атрибут
}
// 2.
{
const randomArray = [1, 2, [1.1, [2.1, [3.1], 2.2, 2.3], 1.2, 1.3], 3];

function generateList(someArr) {

    if (arguments.length > 1) throw new Error(`Arguments list mustn't contain more than 1 argument`);
    
    let ul = document.createElement(`ul`);
    document.body.append(ul);
    
    function createLi(array, currentUl) {
        
        for (i of array) {
            let newUl = document.createElement(`ul`);
            let newLi = document.createElement(`li`);

            if (Array.isArray(i)) {
                currentUl.append(newLi);
                newLi.append(newUl);
                createLi(i, newUl);
            } else {
                newLi.innerHTML = i;
                currentUl.append(newLi)
            }
        }
    } 

    return createLi(someArr, ul)
}

generateList(randomArray);

}
// 3. 
{
    (() => {
        let table = document.createElement(`table`);
        document.body.append(table);

        let num = 0;

        for (let i = 1; i <= 10; i++) {
            let tr = document.createElement(`tr`);
            table.append(tr);

            for (let k = 1; k <= 10; k++) {
                num++
                let td = document.createElement(`td`);
                td.innerHTML = num;
                tr.append(td)
            };
            
        }
    })()
}