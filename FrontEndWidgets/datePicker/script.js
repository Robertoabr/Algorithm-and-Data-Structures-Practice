let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

//create event listeners to show and hide the calendar
let datePicker = document.querySelector('#selector');
let input = document.querySelector('input');
input.addEventListener('click', function addListener() {
  datePicker.classList.remove('date-picker-hidden');
});

document.addEventListener('click', event => {
  let isClickedInside =
    datePicker.contains(event.target) || input.contains(event.target);
  if (!isClickedInside) {
    datePicker.classList.add('date-picker-hidden');
  }
});

//set the current month
let curMonth = new Date().getMonth();
let curYear = new Date().getFullYear();
populateMonthAndYear(curMonth, curYear);

//Utility Functions
function changeDate(monthChange, yearChange) {
  let dispMonth = document.querySelector('.month-section p').innerHTML;
  let monthIndex = months.indexOf(dispMonth);
  let numYear = parseInt(
    document.querySelector('.year-section p').innerHTML,
    10
  );

  populateMonthAndYear(
    (12 + monthIndex + monthChange) % 12,
    numYear + yearChange
  );
}

function populateMonthAndYear(month, year) {
  //update Month and Year selectors
  let yearEl = document.querySelector('.year-section p');
  let monthEl = document.querySelector('.month-section p');
  yearEl.innerHTML = year;
  monthEl.innerHTML = months[month];
  input.value = new Date(year, month).toISOString().substring(0, 10);

  //update table section
  let weekdayThatMonthBegins = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();
  let currentDay = 1;

  //reset table
  let table = document.querySelector('.day-table');
  resetTable();

  //update rows
  for (let rows = 0; rows < 6; rows++) {
    let row = document.createElement('tr');
    for (let day = 0; day < 7; day++) {
      if (rows === 0 && day < weekdayThatMonthBegins) {
        let cell = document.createElement('td');
        row.appendChild(cell);
      } else if (currentDay <= daysInMonth) {
        let cell = document.createElement('td');
        let button = document.createElement('button');
        button.innerHTML = currentDay;
        button.addEventListener('click', () => {
          selectDate(year, month, button.innerHTML);
          datePicker.classList.add('date-picker-hidden');
        });
        cell.appendChild(button);
        row.appendChild(cell);
        currentDay++;
      } else {
        break;
      }
    }
    table.appendChild(row);
  }
}

function resetTable() {
  let table = document.querySelector('.day-table');
  table.innerHTML = '';
  let firstRow = document.createElement('tr');
  let sun = document.createElement('th');
  sun.innerHTML = 'Sun';
  let mon = document.createElement('th');
  mon.innerHTML = 'Mon';
  let tue = document.createElement('th');
  tue.innerHTML = 'Tue';
  let wed = document.createElement('th');
  wed.innerHTML = 'Wed';
  let thu = document.createElement('th');
  thu.innerHTML = 'Thu';
  let fri = document.createElement('th');
  fri.innerHTML = 'Fri';
  let sat = document.createElement('th');
  sat.innerHTML = 'Sat';
  firstRow.append(sun, mon, tue, wed, thu, fri, sat);
  table.appendChild(firstRow);
}

function selectDate(year, month, day) {
  let date = new Date(year, month, day).toISOString().substring(0, 10);
  input.value = date;
}

//need to add selectDate function to the buttons
