const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

// if (markBMI > johnBMI) {
//   console.log(`mark's BMI ${markBMI} is higher than john's ${johnBMI}`);
// } else {
//   console.log(`john's BMI ${johnBMI} is higher than mark's ${markBMI}`);
// }

//challenge2

const minScore = 100;
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106) / 3;
if (dolphinsAverage < koalasAverage && koalasAverage >= minScore)
  console.log("koala wins");
else if (dolphinsAverage > koalasAverage && dolphinsAverage >= minScore)
  console.log("Dolphin wins");
else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
)
  console.log("Tie");
else console.log("No one wins");
