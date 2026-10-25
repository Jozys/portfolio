#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

// Parse CLI flags
const args = process.argv.slice(2);
const helpFlag = args.includes("--help") || args.includes("-h");
const deleteOriginal = args.includes("--delete-original") || args.includes("-d");
const forceKeepLarger = args.includes("--force");

function getArgValue(flag, defaultValue) {
  const index = args.indexOf(flag);
  if (index !== -1 && args[index + 1]) {
    return args[index + 1];
  }
  return defaultValue;
}

const maxWidth = parseInt(getArgValue("--max-width", "1200"), 10);
const quality = parseInt(getArgValue("--quality", "82"), 10);
const targetInput = args.find((a) => !a.startsWith("-")) || "src/assets";

if (helpFlag) {
  console.log(`
🖼️  Portfolio Image Optimizer (WebP)

Usage:
  node scripts/optimize-images.mjs [targetPath] [options]
  yarn optimize:images [targetPath] [options]

Options:
  --max-width <number>   Max width for resizing (default: 1200)
  --quality <number>     WebP quality 1-100 (default: 82)
  --delete-original, -d  Delete original PNG/JPG after successful smaller conversion
  --force                Keep WebP even if it is larger than original
  --help, -h             Show this help message

Examples:
  yarn optimize:images
  yarn optimize:images src/assets/life/photo.jpg
  yarn optimize:images src/assets/projects --max-width 800 --quality 80
`);
  process.exit(0);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function collectImages(targetPath) {
  const resolved = path.resolve(process.cwd(), targetPath);
  if (!fs.existsSync(resolved)) {
    console.error(`❌ Path not found: ${targetPath}`);
    process.exit(1);
  }

  const stat = fs.statSync(resolved);
  if (stat.isFile()) {
    const ext = path.extname(resolved).toLowerCase();
    if ([".png", ".jpg", ".jpeg"].includes(ext)) {
      return [resolved];
    }
    console.log(`ℹ️  File is not a PNG/JPG image: ${targetPath}`);
    return [];
  }

  const results = [];
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!["node_modules", "build", "dist", ".git"].includes(entry.name)) {
          walk(fullPath);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if ([".png", ".jpg", ".jpeg"].includes(ext)) {
          results.push(fullPath);
        }
      }
    }
  }

  walk(resolved);
  return results;
}

console.log(`\n🔍 Searching for PNG / JPG images in "${targetInput}"...`);
const images = collectImages(targetInput);

if (images.length === 0) {
  console.log("✨ No unconverted PNG/JPG images found. Everything is up to date!\n");
  process.exit(0);
}

console.log(`Found ${images.length} image(s) to process.\n`);

let totalOriginalBytes = 0;
let totalWebpBytes = 0;
let convertedCount = 0;
let skippedCount = 0;

for (const imagePath of images) {
  const relPath = path.relative(process.cwd(), imagePath);
  const ext = path.extname(imagePath);
  const outputPath = imagePath.slice(0, -ext.length) + ".webp";
  const relOutputPath = path.relative(process.cwd(), outputPath);

  const originalSize = fs.statSync(imagePath).size;

  try {
    // Run sharp-cli with prefer-offline and withoutEnlargement
    const npxBin = process.platform === "win32" ? "npx.cmd" : "npx";
    const cmd = `${npxBin} --prefer-offline sharp-cli -i "${imagePath}" -o "${outputPath}" -f webp -q ${quality} resize ${maxWidth} --withoutEnlargement`;
    execSync(cmd, { stdio: "pipe" });

    const newSize = fs.statSync(outputPath).size;

    if (newSize >= originalSize && !forceKeepLarger) {
      // Discard larger WebP
      fs.unlinkSync(outputPath);
      skippedCount++;
      console.log(
        `⏭️  ${relPath} (${formatBytes(originalSize)}): WebP would be larger (${formatBytes(newSize)}) -> skipped & kept original PNG/JPG`
      );
      continue;
    }

    totalOriginalBytes += originalSize;
    totalWebpBytes += newSize;
    convertedCount++;

    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(
      `✔ ${relPath} (${formatBytes(originalSize)}) -> ${relOutputPath} (${formatBytes(newSize)}) [${savings}% smaller]`
    );

    if (deleteOriginal) {
      fs.unlinkSync(imagePath);
      console.log(`  🗑️ Deleted original: ${relPath}`);
    }
  } catch (err) {
    console.error(`❌ Failed to convert ${relPath}:`, err.message);
  }
}

console.log("\n==========================================");
console.log(`🎉 Converted: ${convertedCount} image(s)`);
if (skippedCount > 0) {
  console.log(`⏭️  Skipped:   ${skippedCount} image(s) (WebP was larger than original)`);
}
if (totalOriginalBytes > 0) {
  const totalSavingsPercent = (
    (1 - totalWebpBytes / totalOriginalBytes) *
    100
  ).toFixed(1);
  console.log(`📦 Original:   ${formatBytes(totalOriginalBytes)}`);
  console.log(`⚡ WebP:       ${formatBytes(totalWebpBytes)}`);
  console.log(
    `💾 Total saved: ${formatBytes(totalOriginalBytes - totalWebpBytes)} (-${totalSavingsPercent}%)`
  );
}
console.log("==========================================\n");
