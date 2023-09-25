const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function (total, batch) {
  return total + batch;
}, 0);

// Testing
console.log(totalBatteries); // This should print 31
