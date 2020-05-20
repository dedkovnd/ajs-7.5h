import showAttack from '../app.js';
import orderByProps from '../app.js';

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
  expect(orderByProps(obj)).toBe(orderProps)
})

test("positive value of id", ()=> {

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
  const {special} = character;
  showAttack(character)
  expect(attack.length).toBe(attack.length > 0)
})

