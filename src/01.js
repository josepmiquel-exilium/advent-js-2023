// https://adventjs.dev/challenges/2023/1

const giftIds = [1, 10, 2, 10, 20, 50, 7, 0, 0, 7];

function findFirstRepeated(gifts) {
  let seenGifts = {};

  for (const gift of gifts) {
    if (seenGifts[gift]) {
      return gift;
    }
    seenGifts[gift] = true;
  }

  return -1;
}

console.log(findFirstRepeated(giftIds));
