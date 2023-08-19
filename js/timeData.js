const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const age = () => {
  const birthDate = new Date('1996-11-17');
  const monthDifference = currentDate.getMonth() <= birthDate.getMonth();

  let age = currentYear - birthDate.getFullYear();
  monthDifference && age--;
  
  return age;
}

const formatTimeDigits = (digit) => {
  return String(digit).padStart(2, '0');
}

const currentTime = () => {
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const hoursAndMinutes = formatTimeDigits(hours) + ':' + formatTimeDigits(minutes);
  
  return hoursAndMinutes;
}

export {
  age, currentTime, currentYear
}
