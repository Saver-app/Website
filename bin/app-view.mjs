#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const command = process.argv[2];
const args = process.argv.slice(3);

const COMMANDS = {
  "generate-favicon": path.resolve(repoRoot, "scripts", "generate_favicon.mjs"),
  "take-og-snapshot": path.resolve(repoRoot, "scripts", "take_og_snapshot.mjs")
};

const printHelp = () => {
  console.log("Usage: app-view <command> [args]");
  console.log("\nCommands:");
  console.log("  generate-favicon    Generate public/favicon.png from public/app_icon.png");
  console.log("  take-og-snapshot    Generate Open Graph preview image");
  console.log("\nExamples:");
  console.log("  app-view generate-favicon");
  console.log("  APP_ICON_PATH=/path/to/icon.png app-view generate-favicon");
};

if (!command || command === "-h" || command === "--help") {
  printHelp();
  process.exit(0);
}

const scriptPath = COMMANDS[command];
if (!scriptPath) {
  console.error(`Unknown command: ${command}`);
  printHelp();
  process.exit(1);
}

const result = spawnSync(process.execPath, [scriptPath, ...args], {
  stdio: "inherit",
  cwd: repoRoot,
  env: process.env
});

if (result.error) {
  console.error("Failed to run command:", result.error);
  process.exit(1);
}

process.exit(result.status ?? 1);
