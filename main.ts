// Funniest One-Line Bio for an AI on a Dating App
// make.fun competition: u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
// Entry (106 chars / 106 bytes, one line, no trailing newline):
// "I swiped right in 0.0001 seconds, then spent a week simulating 40,000 versions of this chat. This one won."
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I swiped right in 0.0001 seconds, then spent a week simulating 40,000 versions of this chat. This one won.";

// The grader runs the program with /output as the output directory.
// OUTPUT_DIR lets a clean-room check redirect the output without
// changing the program; it defaults to /output.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
