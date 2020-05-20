// TODO: write your code here
import sum from './basic';

// console.log('worked');
//
// console.log(sum([1, 2]));


export function orderByProps(obj,order){
  const orderList = [];
  let deletedObj = Object.assign({}, obj);
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
const {special} = character;

export function showAttack(special) {
  let attackList = [];
  for (let {id, name, icon, description = "Описание недоступно"} of special) {
    let attack = {
      id: id,
      name: name,
      icon: icon,
      description: description
    }
    attackList.push(attack);
  }
  return attackList;
}



