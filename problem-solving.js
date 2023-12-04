//  ********First Problem*********
// const numArray = [5, 11, 190, 30];

// console.log(findDivisorCount(numArray));

// function findDivisorCount(keys) {
//   const resultArray = Array(keys.length).fill(0);
//   const hashed = new Map();
//   for (let [index, key] of keys.entries()) {
//     let totalDivisors = 0;
//     for (let i = 1; i <= key; i++) {
//       if (i === 1 || i === 2) continue;
//       if (hashed.get(i) !== undefined) {
//         if (hashed.get(i) === 1) totalDivisors++;
//         continue;
//       }
//       let dividableCount = 0;
//       let j = 2;
//       while (j <= i / 2) {
//         if (i % j == 0) dividableCount++;
//         j++;
//       }
//       hashed.set(i, dividableCount);
//       if (dividableCount === 1) {
//         console.log(i);
//         totalDivisors++;
//       }
//     }
//     resultArray[index] = totalDivisors;
//   }
//   return resultArray;
// }

const cells = [0, -10, -20, -30, 50];
// const cells = [6, 0, -100, -100, -1, 0, -1];
// const cells = [4, 0, -10, 100, -20];
// const cells = [4, 0, 1, 2, 3];

console.log(maxGameScore(cells));
function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return n % 10 === 3;
}

function maxGameScore(rooms) {
  const n = rooms.length;
  let maxScore = 0;
  let i = 0;
  while (i < n - 1) {
    if (i === 0) {
      // maxScore += rooms[i];
    }
    let currentMax = rooms[i + 1];
    let currentIndex = i + 1;
    const difference = 3 - (currentIndex % 10);
    const newIndex = currentIndex + difference + (difference >= 0 ? 0 : 10);
    for (let j = newIndex; j < n; j += 10) {
      if (isPrime(j)) {
        currentMax = Math.max(currentMax, rooms[j + i]);
        if (currentMax === rooms[j + i]) {
          currentIndex = j + i;
        }
      }
    }
    maxScore += currentMax;
    i = currentIndex;
  }
  return maxScore;
}
