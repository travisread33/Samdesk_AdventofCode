import { readInputsFile } from "./utils/readFiles";
import { processSafeInputs } from "./inputProcesses";

const input = await readInputsFile("./inputs/inputs.txt");

let numSafe = processSafeInputs(input, { maxIncrease: 3 });
console.log("Number of safe inputs:", numSafe);
