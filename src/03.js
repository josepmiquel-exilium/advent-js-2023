// https://adventjs.dev/challenges/2023/3

function findNaughtyStep(original, modified) {
  const longerArray = Math.max(original.length, modified.length);

  for (let i = 0; i < longerArray; i++) {
    const originalElement = original[i];
    const modifiedElement = modified[i];

    if (originalElement !== modifiedElement) {
      if (original.length > modified.length) {
        return originalElement;
      } else {
        return modifiedElement;
      }
    }
  }

  return '';
}

console.log(findNaughtyStep('abcd', 'abcde')); // 'e'
