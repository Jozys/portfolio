export const getAge = (): number => {
  const birthDate = new Date(
    import.meta.env.VITE_USER_BIRTHDATE ?? "1970-01-01"
  );
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  // 05 - 06 => negative, age calculated before is not reached
  const months = currentDate.getMonth() - birthDate.getMonth();
  // 06 - 07 = -1 => negative age calculated before is not reached;
  const days = currentDate.getDate() - birthDate.getDate();
  if (months <= 0) {
    if (months < 0 || (months === 0 && days < 0)) {
      age--;
    }
  }
  return age;
};
