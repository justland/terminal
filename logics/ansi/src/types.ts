export interface TextToken {
	type: 'text'
	text: string
}

export interface QueryDeviceCodeToken {
	type: 'query_device_code'
}

export interface ReportDeviceCodeToken {
	type: 'report_device_code'
	code: string
}

export interface QueryDeviceStatusToken {
	type: 'query_device_status'
}

export interface ReportDeviceOkToken {
	type: 'report_device_ok'
}
export interface ColorToken {
	type: 'color'
	color: string
}

export interface CursorToken {
	type: 'cursor'
	x: number
	y: number
}

export type Token =
	| TextToken
	| QueryDeviceCodeToken
	| ReportDeviceCodeToken
	| QueryDeviceStatusToken
	| ReportDeviceOkToken
	| ColorToken
