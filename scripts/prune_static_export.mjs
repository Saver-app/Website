import { readdir, rm } from "node:fs/promises";
import path from "node:path";

const exportDirectory = path.resolve(process.cwd(), "out");
const sourceScreenshotPattern =
  /^(?:Simulator Screenshot .+|saver_(?:tasks|bookmarks|habits|spaces))\.png$/;

const generatedTargets = [
  "app_view/sim_screenshot.png",
  "app_view/saver_app_icon_dark.png",
  "app_view/saver_app_icon_white.png",
];

const exportFiles = await readdir(exportDirectory);
const assetFiles = await readdir(path.join(exportDirectory, "assets"));

for (const exportFile of exportFiles) {
  if (/^open-graph-builder(?: \d+)?(?:\.(?:html|txt))?$/.test(exportFile)) {
    generatedTargets.push(exportFile);
  }
}

for (const assetFile of assetFiles) {
  if (sourceScreenshotPattern.test(assetFile)) {
    generatedTargets.push(path.join("assets", assetFile));
  }
}

await Promise.all(
  generatedTargets.map((target) =>
    rm(path.join(exportDirectory, target), {
      force: true,
      recursive: true,
    }),
  ),
);

console.log(
  `Pruned ${generatedTargets.length} source-only and development artifacts from out/.`,
);
