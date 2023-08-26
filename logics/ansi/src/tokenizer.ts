import { ESCAPE, QUERY_DEVICE_CODE, QUERY_DEVICE_STATUS, REPORT_DEVICE_CODE_EX, REPORT_DEVICE_OK } from './constants.js'
import type { Token } from './types.js'

export function tokenizer(text: string): Token[] {
	return text.split(ESCAPE).reduce<Token[]>((p, node) => {
		let matches: RegExpExecArray | null
		switch (true) {
			case node.startsWith(QUERY_DEVICE_CODE): {
				p.push({ type: 'query_device_code' })
				const text = node.slice(QUERY_DEVICE_CODE.length)
				if (text) {
					p.push({ type: 'text', text })
				}
				break
			}
			case ((matches = REPORT_DEVICE_CODE_EX.exec(node)), !!matches): {
				p.push({ type: 'report_device_code', code: matches![1]! })
				if (matches![2]) {
					p.push({ type: 'text', text: matches![2] })
				}
				break
			}
			case node.startsWith(QUERY_DEVICE_STATUS): {
				p.push({ type: 'query_device_status' })
				const text = node.slice(QUERY_DEVICE_STATUS.length)
				if (text) {
					p.push({ type: 'text', text })
				}
				break
			}
			case node.startsWith(REPORT_DEVICE_OK): {
				p.push({ type: 'report_device_ok' })
				const text = node.slice(REPORT_DEVICE_OK.length)
				if (text) {
					p.push({ type: 'text', text })
				}
				break
			}
			default: {
				if (node) p.push({ type: 'text', text: node })
				break
			}
		}
		return p
	}, [])
	return [
		{
			type: 'text',
			text
		}
	]
}
