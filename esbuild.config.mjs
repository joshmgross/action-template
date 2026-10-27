import { build } from "esbuild";

await build({
    entryPoints: ["src/index.ts"],
    outdir: "dist",
    bundle: true,
    platform: "node",
    format: "esm",
    target: "node24",
    packages: "bundle",
    // Some CommonJS dependencies call `require` at runtime, which doesn't exist in ESM output
    banner: { js: "import { createRequire } from 'module'; const require = createRequire(import.meta.url);" }
});
