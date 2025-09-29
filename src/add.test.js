
const add = require('./add');

test('addiert zwei Zahlen korrekt', () => {
    expect(add(2, 3)).toBe(5);
});