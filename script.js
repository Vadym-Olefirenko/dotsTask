
function dots (item) {
    let arr = [item];
     for (let i = 0; i < item.length; i++) {
         if (i < item.length - 1) {
            let newItem = item.replace(item[i], item[i] + '.')
            arr.push(newItem);
         }
     }
     
     let allDots = item.split('').join('.');
     arr.push(allDots);
    return arr; 
  }
  console.log(dots('abc'))

