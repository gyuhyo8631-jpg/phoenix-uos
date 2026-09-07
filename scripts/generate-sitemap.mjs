import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(__filename), "..");
const siteUrl = "https://korea.phoenix-uos.com";
const ignoredHtml = [/^googled[a-z0-9]+\.html$/i];

function xmlEscape(value) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;",
  })[character]);
}

function lastModified(fileName) {
  try {
    return execFileSync("git", ["log", "-1", "--format=%cI", "--", fileName], { cwd: rootDir, encoding: "utf8" }).trim().slice(0, 10);
  } catch {
    return fs.statSync(path.join(rootDir, fileName)).mtime.toISOString().slice(0, 10);
  }
}

const htmlFiles = fs.readdirSync(rootDir)
  .filter((fileName) => fileName.endsWith(".html"))
  .filter((fileName) => !ignoredHtml.some((pattern) => pattern.test(fileName)))
  .sort((a, b) => a.localeCompare(b));

const urls = htmlFiles.map((fileName) => ({
  fileName,
  loc: fileName === "index.html" ? `${siteUrl}/` : `${siteUrl}/${encodeURIComponent(fileName)}`,
  lastmod: lastModified(fileName),
}));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.flatMap(({ loc, lastmod }) => ["  <url>", `    <loc>${xmlEscape(loc)}</loc>`, `    <lastmod>${lastmod}</lastmod>`, "  </url>"]),
  "</urlset>",
  "",
].join("\n");

fs.writeFileSync(path.join(rootDir, "sitemap.xml"), xml);
console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
