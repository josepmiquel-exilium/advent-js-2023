// https://adventjs.dev/challenges/2023/4

function decode(message) {
  const stack = [];
  let result = '';

  for (const char of message) {
    if (char === '(') {
      stack.push(result);
      result = '';
    } else if (char === ')') {
      result = stack.pop() + result.split('').reverse().join('');
    } else {
      result += char;
    }

    console.log(result);
    console.log(stack);
  }

  return result;
}

console.log(decode('hola (odnum)'));
