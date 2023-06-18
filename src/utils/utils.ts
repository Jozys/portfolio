export const getAge = (): number => {
  let birthDate = new Date("2004-06-07");
  let currentDate = new Date();
  // 2023-2004 = 19
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  // 05 - 06 => negative, age calculated before is not reached
  let months = currentDate.getMonth() - birthDate.getMonth();
  // 06 - 07 = -1 => negative age calculated before is not reached;
  let days = currentDate.getDate() - birthDate.getDate();
  if (months <= 0) {
    if (months < 0 || (months == 0 && days < 0)) {
      age--;
    }
  }
  return age;
};
