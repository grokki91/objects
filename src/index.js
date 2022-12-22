export default function orderByProps(obj, arr) {
  const firstArr = [];
  const secondArr = [];
  let firstObj = {};
  for (const key of Object.keys(obj)) {
    const secondObj = { key, value: obj[key] };
    if (arr) {
      arr.forEach((el) => {
        if (el === key) {
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

  return [...firstArr, ...secondArr];
}
