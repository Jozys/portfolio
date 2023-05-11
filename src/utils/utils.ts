export const getAge = (): number => {
  let birthDate = new Date("2004-06-07");
  let currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  if (months < 0) {
    age--;
  }
  return age;
};
