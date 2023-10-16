const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it(`Handles times o'clock`, () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe(`two o'clock`);
  });

  it(`Handles bad regex`, () => {
    const timeInWords = convertTimeToWords('0110');
    expect(timeInWords).toBe(`undefined to undefined`);
  });
});
