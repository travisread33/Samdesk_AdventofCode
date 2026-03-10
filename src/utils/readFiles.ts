import fs from "fs";

export async function readInputsFile(filePath: string): Promise<string[]> {
  let inputs = await fs.promises.readFile(filePath, "utf8");
  return inputs.split("\n");
}
