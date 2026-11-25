// Have You Tried Turning It Off? — entry program.
//
// Writes one funny line from a hopeless tech support agent to a
// desperate customer to /output/entry.txt. No network, no model calls,
// fully deterministic: the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hear you — have you tried turning it off and on again? The computer, the router, or honestly, just the whole day?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
