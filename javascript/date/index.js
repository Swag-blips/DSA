function activeSubscription(startDate) {
  const modifiedStartDate = new Date(startDate);
  const currentDate = new Date();

  const day = Math.floor((currentDate - modifiedStartDate) / 86400000);

  return day <= 7;
}

activeSubscription(" 2026-08-26");

function isPasswordExpired(lastChangedDate) {
  let divideFrom = 1000 * 60 * 60 * 24;

  let modifiedChangedDate = new Date(lastChangedDate);
  let currentDate = new Date(); 

  let dueForChange = Math.floor(
    (currentDate - modifiedChangedDate) / divideFrom,
  );

  return dueForChange >= 30;
}


console.log(isPasswordExpired(" 2026-07-20"))