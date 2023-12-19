import WeekdayObj from "../src/wd-calc.js";

describe('WeekdayObj', () => {
  test('should perform a basic input = output test', () => {
    let userDate = new WeekdayObj(0)
    expect(userDate.userInput).toEqual(0);
  });
})