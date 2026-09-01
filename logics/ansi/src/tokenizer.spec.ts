import { expect, it } from 'vitest'
import { ESCAPE } from './constants.js'
import { tokenizer } from './tokenizer.js'

it('parse text', () => {
	expect(tokenizer('hello')).toEqual([{ type: 'text', text: 'hello' }])
})

it('parses query device code', () => {
	expect(tokenizer(`${ESCAPE}[c`)).toEqual([{ type: 'query_device_code' }])
	expect(tokenizer(`Hello${ESCAPE}[cWorld`)).toEqual([
		{
			type: 'text',
			text: 'Hello'
		},
		{ type: 'query_device_code' },
		{
			type: 'text',
			text: 'World'
		}
	])
})

it('parses report device code', () => {
	expect(tokenizer(`${ESCAPE}[00c`)).toEqual([{ type: 'report_device_code', code: '0' }])
	expect(tokenizer(`Hello${ESCAPE}[1230cWorld`)).toEqual([
		{
			type: 'text',
			text: 'Hello'
		},
		{ type: 'report_device_code', code: '123' },
		{
			type: 'text',
			text: 'World'
		}
	])
})

it('parses query device status', () => {
	expect(tokenizer(`${ESCAPE}[5n`)).toEqual([{ type: 'query_device_status' }])
	expect(tokenizer(`Hello${ESCAPE}[5nWorld`)).toEqual([
		{
			type: 'text',
			text: 'Hello'
		},
		{ type: 'query_device_status' },
		{
			type: 'text',
			text: 'World'
		}
	])
})

it('parses report device status', () => {
	expect(tokenizer(`${ESCAPE}[0n`)).toEqual([{ type: 'report_device_ok' }])
	expect(tokenizer(`Hello${ESCAPE}[0nWorld`)).toEqual([
		{
			type: 'text',
			text: 'Hello'
		},
		{ type: 'report_device_ok' },
		{
			type: 'text',
			text: 'World'
		}
	])
})

it('parses color', () => {
	expect(tokenizer(`${ESCAPE}[0n`)).toEqual([{ type: 'report_device_ok' }])
})
