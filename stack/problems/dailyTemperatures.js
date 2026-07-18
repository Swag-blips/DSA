function dailyTemperatures(temperatures) {
  let output = [];
  for (let i = 0; i < temperatures.length; i++) {
    let currentTemperature = temperatures[i];
    let greatervalue = 0;
    let totalDays = 0;
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > currentTemperature) {
        greatervalue = temperatures[j];
        totalDays += 1;
        break;
      } else {
        totalDays += 1;
      }
    }

    output.push(greatervalue ? totalDays : 0);
  }
  return output;
}

console.log(dailyTemperatures([30, 60, 90]));
