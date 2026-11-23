import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const USERNAME = "himeko";

if (USERNAME.length < 1 || USERNAME.length > 30) {
  throw new Error(`username must be 1-30 characters, got ${USERNAME.length}`);
}
if (/\s/.test(USERNAME) || USERNAME.trim().length === 0) {
  throw new Error("username must be a single word with no whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME, "utf8");

const written = readFileSync("/output/entry.txt", "utf8");
if (written !== USERNAME) {
  throw new Error("verification failed: /output/entry.txt does not match username");
}
