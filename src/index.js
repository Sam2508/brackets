module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
      return false;
  }
  const bracketsOn = [];
  let bracketsOff = {};
  bracketsConfig.forEach((arr) => {
      let startBracket = arr[0];
      bracketsOn.push(startBracket);
      let endBracket = arr[1];
      bracketsOff = {...bracketsOff,
          [endBracket]: startBracket
      };
  });
  const getSat = [];
  for (let i = 0; i < str.length; i++) {
      let bracketFist = str[i];
      let bracketLast = getSat[getSat.length - 1];
      if (bracketsOn.includes(bracketFist)) {
          if (bracketLast && bracketsOff[bracketLast] === bracketFist) {
              getSat.pop();
          } else {
              getSat.push(bracketFist);
          }
      } else {
          if (getSat.length === 0) {
              return false;
          }
          if (bracketsOff[bracketFist] === bracketLast) {
              getSat.pop();
          } else {
              return false;
          }
      }
  }
  return getSat.length === 0;
};