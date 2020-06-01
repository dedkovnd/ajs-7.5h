import {showAttack} from '../app.js';
import {orderByProps} from '../app.js';

test("function ordered props",()=>{
  const obj = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
  }
  const order = ["name", "level"];
  const orderProps = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }
  ]
  expect(orderByProps(obj,order)).toStrictEqual(orderProps)
})

test("empty discription to equal string описание недоступно", ()=> {

  let character = {
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
  let resultShowAttack = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно'
    }
  ]
  const {special} = character;
  expect(showAttack(special)).toStrictEqual(resultShowAttack)
})

