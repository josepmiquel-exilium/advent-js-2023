// https://adventjs.dev/challenges/2023/6

function maxDistance(movements) {
  let dir = 0;
  let all = 0;

  for (const mov of movements) {
    if (mov === '>') {
      dir++;
    } else if (mov === '<') {
      dir--;
    } else {
      all++;
    }
  }

  return all + Math.abs(dir);
}
