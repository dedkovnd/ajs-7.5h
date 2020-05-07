import showAttack from '../app.js';
import orderByProps from '../app.js';

test("positive value of id", ()=> {
  let attack;
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
  showAttack(character);
  expect(attack.length).toBe(attack.length > 0)
})

