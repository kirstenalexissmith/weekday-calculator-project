export default function WeekdayObj(userInput) {
  this.userInput = userInput;
}

WeekdayObj.prototype.weekdayFinder = function () {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let date = new Date(this.userInput);
  let weekdayNumber = date.getDay();
  this.weekday = dayNames[weekdayNumber];
}