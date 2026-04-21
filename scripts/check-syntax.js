const { readdirSync, statSync } = require("node:fs");
const { join, relative } = require("node:path");
const { spawnSync } = require("node:child_process");

const root = join(__dirname, "..");
const sourceDirectories = ["src", "javascript", "playground", "tests", "scripts"];
let failed = false;

function javascriptFiles(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);

    if (statSync(path).isDirectory()) {
      return javascriptFiles(path);
    }

    return path.endsWith(".js") ? [path] : [];
  });
}

for (const directory of sourceDirectories) {
  const files = javascriptFiles(join(root, directory));

  for (const file of files) {
    const result = spawnSync(process.execPath, ["--check", file], {
      encoding: "utf8",
    });

    if (result.status !== 0) {
      failed = true;
      console.error(`Syntax error in ${relative(root, file)}`);
      console.error(result.stderr.trim());
    }
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log("All JavaScript files passed syntax checks.");
}
