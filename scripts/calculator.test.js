import calculator from './calculator';

test('Add two integers', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('Add two floats', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test('Subtract two integers', () => {
    expect(calculator.subtract(6, 2)).toBe(4);
});

test('Subtract two floats', () => {
    expect(calculator.subtract(5.1, 3.5)).toBeCloseTo(1.6);
});

test('Divide results integer', () => {
    expect(calculator.divide(4, 2)).toBe(2);
});

test('Divide results float', () => {
    expect(calculator.divide(3, 1.5)).toBeCloseTo(2);
});

test('Divide two floats', () => {
    expect(calculator.divide(5.6, 1.7)).toBeCloseTo(3.29);
});

test('Multiply two integers', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
});

test('Multiply two floats', () => {
    expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
});

test('Multiply by zero', () => {
    expect(calculator.multiply(5, 0)).toBe(0);
});
