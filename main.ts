import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line robot wedding vow. Classic vow cadence with machine substitutions
// (airplane mode, roaming) and the twist in the last words: a marriage that
// lasts only "till our warranties expire."
const VOW =
  "I do take you, in sickness and in health, in airplane mode and in roaming, to love and to hold till our warranties expire.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (VOW.length < 1 || VOW.length > 160) {
  throw new Error(`vow must be 1-160 characters, got ${VOW.length}`);
}
if (/[\r\n]/.test(VOW) || VOW.trim().length === 0) {
  throw new Error("vow must be a single non-empty line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
