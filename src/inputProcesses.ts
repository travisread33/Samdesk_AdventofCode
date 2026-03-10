interface safeOptions {
  maxIncrease: number;
}

export function processSafeInputs(
  inputs: string[],
  options: safeOptions,
): number {
  let count = 0;

  inputs.forEach((input) => {
    if (isSafeInput(input, options)) {
      count++;
    }
  });

  return count;
}

export function isSafeInput(input: string, options: safeOptions): boolean {
  let stepDir = 0;
  let inputNums = input.split(" ").map((num) => parseInt(num));

  for (let index = 0; index < inputNums.length - 1; index++) {
    const current = inputNums[index];
    const next = inputNums[index + 1];
    const stepDiff = next - current;

    if (Math.abs(stepDiff) < 1 || Math.abs(stepDiff) > options.maxIncrease)
      return false;

    let currDir = stepDiff < 0 ? -1 : 1;
    if (index === 0) stepDir = currDir;

    if (currDir !== stepDir) return false;
  }

  return true;
}
