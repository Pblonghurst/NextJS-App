import { defineConfig, globalIgnores } from "eslint/config";
import { createRequire } from "node:module";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const require = createRequire(import.meta.url);
let prettierConfig = null;
try {
  prettierConfig = require("eslint-config-prettier");
} catch {
  // Optional: only applied once eslint-config-prettier is installed.
  prettierConfig = null;
}

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  ...(prettierConfig ? [prettierConfig] : []),
]);

export default eslintConfig;
