import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked Alexa to play something relaxing. She played rain sounds, then read my 3 a.m. search history out loud.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
