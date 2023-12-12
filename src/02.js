// https://adventjs.dev/challenges/2023/2

const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

function manufacture(gifts, materials) {
  return gifts.filter((gift) => {
    for (const letter of gift) {
      if (!materials.includes(letter)) {
        return false;
      }
    }
    return true;
  });
}

console.log(manufacture(gifts, materials));
