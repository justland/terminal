import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		name: 'ansi',
		// `lib` holds the compiled output, spec files included. Without this vitest
		// collects each spec twice and reports the duplicates as skipped.
		include: ['src/**/*.spec.?(c|m)[jt]s?(x)'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'lcov'],
			// Without this, a source file no test imports is simply absent from the
			// report, and the percentage flatters the repo.
			include: ['src/**/*.{ts,tsx}'],
			exclude: ['src/**/*.spec.*'],
			thresholds: {
				statements: 98,
				branches: 100,
				functions: 100,
				lines: 98
			}
		}
	}
})
