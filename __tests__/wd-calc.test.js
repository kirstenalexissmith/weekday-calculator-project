import WeekdayObj from "../src/wd-calc.js";

describe('WeekdayObj', () => {
  test('should perform a basic input = output test', () => {
    let userDate = new WeekdayObj(0)
    expect(userDate.userInput).toEqual(0);
  });

  test('should find the weekday of the input date', () => {
    let userDate = new WeekdayObj('February 14, 1996')
    userDate.weekdayFinder();
    expect(userDate.weekday).toEqual('Wednesday');
  });
})