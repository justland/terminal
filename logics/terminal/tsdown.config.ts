import { defineConfig } from 'tsdown'

/**
 * One ESM output under `lib`, matching what `tsc -p tsconfig.build.json` emitted:
 *
 * - `unbundle` keeps one output file per source module, so `lib/*.js` and the
 *   `exports` map do not move.
 * - `outExtensions` pins `.js` / `.d.ts`; without it tsdown writes `.mjs` /
 *   `.d.mts` and every published path changes.
 * - Specs are excluded from `entry` rather than filtered afterwards, so the
 *   test-only imports never reach the declaration build.
 */
export default defineConfig({
	entry: ['src/**/*.ts', 'src/**/*.tsx', '!src/**/*.spec.*'],
	format: 'esm',
	outDir: 'lib',
	platform: 'neutral',
	unbundle: true,
	dts: { sourcemap: true },
	outExtensions: () => ({ js: '.js', dts: '.d.ts' }),
	clean: ['lib']
})
