import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let words1 =[];
  let words2 = [];
  const lines = input.split("\n");
  for (const l of lines) {
    const words = l.split("   ");
    words1.push(words[0]);
    words2.push(words[1]);
  }
  words1 = words1.sort();
  words2 = words2.sort();
  let result =0;
  for (let i = 0 ; i<words1.length;i++){
    result+= Math.abs(Number(words1[i])-Number(words2[i]));
  }
  console.log("result",result);
  return result;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let words1 =[];
  let words2 = [];
  const lines = input.split("\n");
  for (const l of lines) {
    const words = l.split("   ");
    words1.push(words[0]);
    words2.push(words[1]);
  }
  let score = 0;
  for (const w1 of words1){
    let freq = 0;
    for(const w2 of words2){
      if(w1==w2){
        freq++;
      }
    }
    score+= Number(w1) * freq;
  }
  return score;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
