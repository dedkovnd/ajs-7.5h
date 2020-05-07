// TODO: write your code here
import sum from './basic';

// console.log('worked');
//
// console.log(sum([1, 2]));


const obj = {
  name: "мечник",
  health: 10,
  level: 2,
  attack: 80,
  defence: 40
}
const order = ["name", "level"];

function orderByProps(obj,order){
  const orderList = [];
  let deletedObj = obj;
  let keys = [];
  order.forEach((elem) => {
    if(elem in deletedObj) {
      orderList.push({key: elem, value: deletedObj[elem]})
      delete deletedObj[elem]
    }
  })
  for (let key in deletedObj) {
    keys.push(key)
  }
  keys.sort()
  keys.forEach((elem)=> {
    orderList.push({key: elem, value: deletedObj[elem]})
  })
  return orderList;
}
orderByProps(obj,order);
export {orderByProps};

//вторая задача
let character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]
}

let attack;

function showAttack(character) {
  attack = character.special.filter(function(i) {
    if("description" in i == false) {
      i.description = "значение по умолчанию";
    }
    return i.id > -1;
  })
  return attack;
}
export {showAttack};

