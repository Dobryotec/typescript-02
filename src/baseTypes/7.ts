/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  firstDay = "MONDAY",
  secondDay = "THUESDAY",
  thirdDay = "WEDNESDAY",
  fourthDay = "THURSDAY",
  fifthDay = "FRIDAY",
  sixthDay = "SATURDAY",
  seventhDay = "SUNDAY",
}

const isWeekend = (day: DayOfWeek): boolean => {
  let result: boolean;

  switch (day) {
    case "MONDAY":
    case "THUESDAY":
    case "WEDNESDAY":
    case "THURSDAY":
    case "FRIDAY":
      result = true;
      break;
    default:
      result = false;
  }

  return result;
};

console.log(isWeekend(DayOfWeek.seventhDay));
console.log(isWeekend(DayOfWeek.firstDay));

// let isWeekend: (day: DayOfWeek) => boolean;

// isWeekend = (day: string) => {
//   let result: boolean;
//   switch (day) {
//     case "MONDAY":
//     case "THUESDAY":
//     case "WEDNESDAY":
//     case "THURSDAY":
//     case "FRIDAY":
//       result = true;
//       break;
//     default:
//       result = false;
//   }

//   return result;
// };

// console.log(isWeekend(DayOfWeek.seventhDay));
