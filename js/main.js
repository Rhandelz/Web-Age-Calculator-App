let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

const btn = document.querySelector(".main_btn");

let displayValue = document.querySelectorAll(".valueRes");
let warning = document.querySelectorAll(".warning");
let labels = document.querySelectorAll(".date_label");

let placeHolderData = {
  totalday: 0,
  totalmonth: 0,
  totalyear: 0,
};

// displayValue[0].innerHTML = placeHolderData.totalyear;
day.addEventListener("input", (e) => {
  warning.forEach((e) => (e.style.display = "none"));
  placeHolderData.totalday = parseInt(e.target.value);

  labels.forEach((e) => (e.style.color = "gray"));

  day.style.border = "1px solid gray";
  month.style.border = "1px solid gray";
  year.style.border = "1px solid gray";
});

month.addEventListener("input", (e) => {
  warning.forEach((e) => (e.style.display = "none"));
  placeHolderData.totalmonth = parseInt(e.target.value);

  labels.forEach((e) => (e.style.color = "gray"));

  day.style.border = "1px solid gray";
  month.style.border = "1px solid gray";
  year.style.border = "1px solid gray";
});

year.addEventListener("input", (e) => {
  warning.forEach((e) => (e.style.display = "none"));
  placeHolderData.totalyear = parseInt(e.target.value);

  labels.forEach((e) => (e.style.color = "gray"));

  day.style.border = "1px solid gray";
  month.style.border = "1px solid gray";
  year.style.border = "1px solid gray";
});

console.log(new Date().getFullYear());

btn.addEventListener("click", () => {
  if (
    placeHolderData.totalday &&
    placeHolderData.totalmonth &&
    placeHolderData.totalyear
  ) {
    if (placeHolderData.totalday > 30) {
      labels.forEach((e) => (e.style.color = "red"));

      day.style.border = "1px solid red";
      month.style.border = "1px solid red";
      year.style.border = "1px solid red";
      warning[0].innerHTML = "Must be valid day";
      warning[0].style.display = "block";
    }

    if (placeHolderData.totalmonth > 12) {
      labels.forEach((e) => (e.style.color = "red"));

      day.style.border = "1px solid red";
      month.style.border = "1px solid red";
      year.style.border = "1px solid red";
      warning[1].innerHTML = "Must be valid month";
      warning[1].style.display = "block";
    }

    if (placeHolderData.totalyear > new Date().getFullYear()) {
      labels.forEach((e) => (e.style.color = "red"));

      day.style.border = "1px solid red";
      month.style.border = "1px solid red";
      year.style.border = "1px solid red";
      warning[2].innerHTML = "Must be valid year";
      warning[2].style.display = "block";
    }

    if (
      placeHolderData.totalmonth < 13 &&
      placeHolderData.totalday < 31 &&
      placeHolderData.totalyear < new Date().getFullYear()
    ) {
      const { year, month, day } = upToDate(
        `${placeHolderData.totalmonth}-${placeHolderData.totalday}-${placeHolderData.totalyear}`
      );

      displayValue[0].innerHTML = year;
      displayValue[1].innerHTML = month > 10 ? month : `0${month}`;
      displayValue[2].innerHTML = day > 10 ? day : `0${day}`;
    }
  } else {
    warning.forEach((e) => {
      e.style.display = "block";
      e.innerHTML = "This field is required";
    });

    labels.forEach((e) => (e.style.color = "red"));

    day.style.border = "1px solid red";
    month.style.border = "1px solid red";
    year.style.border = "1px solid red";
  }
});

const upToDate = (date) => {
  const computedDate = new Date(date);
  const present = new Date();

  let year = present.getFullYear() - computedDate.getFullYear();
  let month = present.getMonth() - computedDate.getMonth();
  let day = present.getDate() - computedDate.getDate();

  if (month < 0 || (month === 0 && day < 0)) {
    year--;
    month += 12;
  }
  if (day < 0) {
    month--;
    const lastMonth = new Date(present.getFullYear(), present.getMonth(), 0);
    day += lastMonth.getDate();
  }

  return {
    year: year,
    month: month,
    day: day,
  };
};

console.log(upToDate("07-11-2000"));
