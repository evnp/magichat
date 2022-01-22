import questions from "../src/questions";
import { factors, calcNonRepeatingStepSize } from "../src/core";

describe("Magic Hat", () => {
  test("question list index into psuedo-random factors", () => {
    // Double current question list size to thoroughly test potential values:
    const qList = questions.concat(questions);

    for (let i = 10; i < qList.length; i++) {
      const [facA, facB] = factors(i);
      expect(facA * facB).toBe(i);
    }
  });

  test("question list index step size for circular traversal", () => {
    // Double current question list size to thoroughly test potential values:
    const qList = questions.concat(questions);

    for (let len = 0; len < qList.length; len++) {
      const qSubList = qList.slice(0, len + 1);
      const stepSize = calcNonRepeatingStepSize(qSubList.length);

      let idx = 0;
      const selections: number[] = [];
      while (!selections.includes(idx)) {
        selections.push(idx);
        idx = (idx + stepSize) % qSubList.length;
      }

      // Ensure resulting selections array contains no duplicates;
      expect(Array.from(new Set(selections)).length).toBe(selections.length);

      // Ensure resulting selections array has the same values as input array:
      expect(selections.sort((a, b) => a - b)).toStrictEqual(
        Object.keys(qSubList).map(Number)
      );
    }
  });
});
