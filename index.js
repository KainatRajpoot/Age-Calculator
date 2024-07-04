function calculate() {
  let year;
  let month;
  let day;

  let currentYear = parseInt(cd.value.slice(0, 4), 10);
  let currentMonth = parseInt(cd.value.slice(5, 7), 10);
  let currentDay = parseInt(cd.value.slice(8, 10), 10);
  console.log(currentYear, currentMonth, currentDay);

  let birthYear = parseInt(DOB.value.slice(0, 4), 10);
  let birthMonth = parseInt(DOB.value.slice(5, 7), 10);
  let birthDay = parseInt(DOB.value.slice(8, 10), 10);
  console.log(birthYear, birthMonth, birthDay);

  if (currentDay >= birthDay) {
    day = currentDay - birthDay;
  } else {
    const lastDayOfPreviousMonth = new Date(
      currentYear,
      currentMonth,
      0
    ).getDate();
    day = lastDayOfPreviousMonth - birthDay + currentDay;
    currentMonth--;
  }

  if (currentMonth >= birthMonth) {
    month = currentMonth - birthMonth;
  } else {
    month = currentMonth + 12 - birthMonth;
    currentYear--;
  }

  year = currentYear - birthYear;
  if (year < 0) {
    ageText.innerHTML = "Wrong date of birth";
  } else {
    ageText.innerHTML = year + " Years, " + month + " Months, " + day + " Days";
  }
}
