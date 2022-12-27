export default function orderByProps(obj, arr) {
  const firstArr = [];
  const secondArr = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const secondObj = { key, value: obj[key] };
      if (arr) {
        arr.forEach((el) => {
          if (el === key) {
            let firstObj = {};
            firstObj = { key, value: obj[key] };
            firstArr.push(firstObj);
          }
        });
        if (!arr.includes(key)) {
          secondArr.push(secondObj);
        }
      }
      secondArr.sort((a, b) => b.value - a.value);
    }
  }

  return [...firstArr, ...secondArr];
}
