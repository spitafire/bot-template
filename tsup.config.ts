import type { Options } from "tsup";

export const tsup: Options = {
	clean: true,
	dts: false,
	entryPoints: ["src/**/*.ts", "!src/**/*.d.ts", "!src/lib/**/*"],
	format: ["cjs"],
	minify: true,
	skipNodeModulesBundle: true,
	sourcemap: false,
	target: "esnext"
};
