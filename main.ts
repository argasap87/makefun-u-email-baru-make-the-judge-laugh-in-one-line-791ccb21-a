import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I asked Alexa to play something relaxing. She played rain sounds, then read my 3 a.m. search history out loud.";

// One-line joke must fit the 1–200 character limit.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(
    `Line must be 1-200 characters, got ${LINE.length}. Refusing to write.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the write round-tripped exactly (no trailing newline added).
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("Read-back mismatch: /output/entry.txt differs from the line.");
}

console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
