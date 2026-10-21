import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    deps: {
      // tsdown <0.23 compatibility: resolve external dependency subpaths.
      // Remove to preserve subpath imports as written (the new default).
      // https://tsdown.dev/options/dependencies#deps-resolvedepsubpath
      resolveDepSubpath: true,
    },
    dts: {
      generator: "tsgo",
    },
    exports: true,
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    sortImports: true,
    sortPackageJson: true,
  },
  run: {
    tasks: {
      sponsorkit: {
        command: "vpx sponsorkit",
        env: {
          SPONSORKIT_GITHUB_TOKEN: process.env.SPONSORKIT_GITHUB_TOKEN,
          SPONSORKIT_GITHUB_LOGIN: process.env.SPONSORKIT_GITHUB_LOGIN,
        },
      },
    }
  }
});
