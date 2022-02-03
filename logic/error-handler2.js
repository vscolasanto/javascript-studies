function displayHour(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError('Parameter must be a instance of Date!');
  }

  if (!date) {
    date = new Date();
  }

  return date.toLocaleTimeString('pt-br', {
    hour12: false,
  });
}

try {
  const date = new Date('08-30-1988 05:44');
  const hour = displayHour(date);
  console.log(hour);
} catch (error) {
  console.log(error.message);
} finally {
  console.log('FINNALY: sempre executando');
}
