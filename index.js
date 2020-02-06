const expensesChart = {
  // can be extensible to add more items
  "dailyNewsPaper" : [
    {
      name: 'TOI',
      price: { 
        weekDays: 3,
        saturday: 5,
        sunday: 6
      }
    },
    {
      name: 'HINDU',
      price: { 
        weekDays: 2.5,
        saturday: 4,
        sunday: 4
      }
    },
    {
      name: 'ET',
      price: {
        weekDays: 2,
        saturday: 2,
        sunday: 10
      }
    },
    {
      name: 'BM',
      price: {
        weekDays: 1.5,
        saturday: 1.5,
        sunday: 1.5
      }
    },
    {
      name: 'HT',
      price: {
        weekDays: 2,
        saturday: 4,
        sunday: 4
      }
    }
  ]
}

function getDailyNewsPaperExpenses(newsPapers, weekDays, saturdays, sundays) {
  const newsPaperExpenses = expensesChart['dailyNewsPaper']
    .filter(paper => newsPapers.includes(paper.name))
    .map(paper => paper.price);
  let expense = 0;
  newsPaperExpenses.forEach(newsPaperExpense => {
    expense += newsPaperExpense.weekDays * weekDays + newsPaperExpense.saturday * saturdays + newsPaperExpense.sunday * sundays
  });
  return expense;
}

function getDays(year, month, dayNum = 0) {
  var day, counter, date;
  day = 1;
  counter = 0;
  date = new Date(year, month, day);
  while (date.getMonth() === month) {
      if (date.getDay() === dayNum) {
          counter += 1;
      }
      day += 1;
      date = new Date(year, month, day);
  }
  return counter;
}

function calculateSubscriptionPrice(papersSubscribedTo = [], month = new Date().getMonth()) {
  const year = new Date().getFullYear();
  const noOfDaysInMonth = new Date(year, month, 0).getDate();
  const saturdays = getDays(year, month, 6);
  const sundays = getDays(year, month);
  const weekDays = noOfDaysInMonth - (saturdays + sundays);
  return getDailyNewsPaperExpenses(papersSubscribedTo, weekDays, saturdays, sundays);
}

var expense = calculateSubscriptionPrice(['TOI', 'HINDU', 'ET', 'BM', 'HT']);
console.log(expense);