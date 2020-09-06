
const insertDots = (str, indexes) => {
  let result = str;
  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i] + i;
    result = result.substr(0, index) + "." + result.substr(index);
  }
  return result;
};


const allDotsVariants = (str, numberOfPoints, variants = [], occupiedIndexes= []) => {
  const startIndex = occupiedIndexes.length ? Math.max(...occupiedIndexes) + 1 : 1;

  for (let j = startIndex; j < str.length; j++) {
    const indexes = [...occupiedIndexes, j];
    
    if (indexes.length < numberOfPoints) {
        allDotsVariants(str, numberOfPoints, variants, indexes)
    } else {
      variants.push(indexes);
    }
  }

  return variants;
}

const dots = (str) => {
    let results = [str];
    
    for (let valueOfPoints = 1; valueOfPoints < str.length; valueOfPoints++) {
      const allIndexes = allDotsVariants(str, valueOfPoints);
        for(let index of allIndexes) {
          results.push(insertDots(str, index))
        }
    }

    return results;
}

console.log(dots('abcd'))


