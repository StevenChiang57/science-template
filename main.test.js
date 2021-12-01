/* 
    jest-enviroment
*/
const math_temp = require("./main.js")

test('checks for volcano 1', () => {
    expect(math_temp.show_volcano()).toBe(null)
});

test('checks for volcano 2', () => {
    expect(math_temp.show_volcano('s')).toBe(null)
});

test('checks for volcano 3', () => {
    expect(math_temp.show_volcano('c')).toBe(null)
});