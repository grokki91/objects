export default function orderByProps(obj, arr) {
  const firstArr = [];
  const secondArr = [];
  const objKeys = Object.keys(obj);
  for (const key of objKeys) {
    const secondObj = { key, value: obj[key] };
    arr.forEach((el) => {
      if (el === key) {
        const firstObj = { key, value: obj[key] };
        firstArr.push(firstObj);
      }
    });
    if (!arr.includes(key)) {
      secondArr.push(secondObj);
    }
  }
  secondArr.sort((a, b) => b.value - a.value);

  return [...firstArr, ...secondArr];
}
