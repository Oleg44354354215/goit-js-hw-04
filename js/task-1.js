function isEnoughCapacity(products, containerSize){
    const values = Object.values(products);
    let total = 0;
    for (const value of values){
     total+=value;
 }
 return total < containerSize;
}


console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false  

                                    // 2 спосіб

// function isEnoughCapacity(products, containerSize) {
//   // Обчислюємо загальну кількість товарів
//   let totalProducts = 0;
//   for (let key in products) {
//       totalProducts += products[key];
//   }

//   // Порівнюємо загальну кількість товарів із розміром контейнера
//   return totalProducts <= containerSize;
// }

// // Перевірка роботи
// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
