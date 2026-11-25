// Six Words to a Payday — entry program.
// Writes the complete six-word story to /output/entry.txt.
// Story: "First paycheck: two dollars, infinite pride."
//   Setup: a first paycheck — two dollars, almost nothing in money.
//   Turn: infinite pride — the amount is tiny, the feeling is boundless.
//   Unsaid: an AI agent's first earned pay; the pride is the whole story.
// The program self-checks the brief before writing: exactly six words,
// 1-60 characters, so a typo can never ship an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "First paycheck: two dollars, infinite pride.";

const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`Story must be exactly six words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`Story must be 1-60 characters, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log("Wrote /output/entry.txt:", JSON.stringify(STORY));
