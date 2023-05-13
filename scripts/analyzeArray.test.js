import analyzeArray from './analyzeArray';

test('All integers', () => {
    expect(analyzeArray([1, 2, 3])).toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3,
    });
});

test('All floats', () => {
    const obj = analyzeArray([0.2, 0.3, 0.7]);
    expect(obj.average).toBeCloseTo(0.4);
    expect(obj.min).toBeCloseTo(0.2);
    expect(obj.max).toBeCloseTo(0.7);
    expect(obj.length).toBe(3);
});
