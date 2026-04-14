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

export interface QueryDeviceStatusNode {
	type: 'query_device_status'
}

export interface ReportDeviceOkNode {
	type: 'report_device_ok'
}

export interface ReportDeviceFailureNode {
	type: 'report_device_failure'
}

export interface QueryCursorPosition {
	type: 'query_cursor_position'
}

export interface ReportCursorPosition {
	type: 'report_cursor_position',
	row: number,
	column: number
}

export interface ResetDevice {
	type: 'reset_device'
}

export interface EnableLineWrap {
	type: 'enable_line_wrap'
}

export interface DisableLineWrap {
	type: 'disable_line_wrap'
}

export interface FontSetG0 {
	type: 'font_set_g0'
}

export interface FontSetG1 {
	type: 'font_set_g1'
}

export interface CursorHome {
	type: 'cursor_home',
	row?: number,
	column?: number
}

export interface CursorUp {
	type: 'cursor_up',
	count?: number
}

export interface CursorDown {
	type: 'cursor_down',
	count?: number
}

export interface CursorForward {
	type: 'cursor_forward',
	count?: number
}

export interface CursorBackward {
	type: 'cursor_backward',
	count?: number
}

export interface ForceCursorPosition {
	type: 'force_cursor_position',
	row?: number,
	column?: number
}

export interface SaveCursor {
	type: 'save_cursor'
}

export interface UnsaveCursor {
	type: 'unsave_cursor'
}

export interface SaveCursorAttrs {
	type: 'save_cursor_attrs'
}

export interface RestoreCursorAttrs {
	type: 'restore_cursor_attrs'
}

export interface ScrollScreen {
	type: 'scroll_screen'
}

export interface ScrollScreenRange {
	type: 'scroll_screen_range',
	start: number,
	end: number
}

export interface ScrollUp {
	type: 'scroll_up'
}

export interface ScrollDown {
	type: 'scroll_down'
}

export interface SetTab {
	type: 'set_tab'
}

export interface ClearTab {
	type: 'clear_tab'
}

export interface ClearAllTabs {
	type: 'clear_all_tabs'
}

export interface EraseEndOfLine {
	type: 'erase_end_of_line'
}

export interface EraseStartOfLine {
	type: 'erase_start_of_line'
}

export interface EraseLine {
	type: 'erase_line'
}

export interface EraseDown {
	type: 'erase_down'
}

export interface EraseUp {
	type: 'erase_up'
}

export interface EraseScreen {
	type: 'erase_screen'
}

export interface PrintScreen {
	type: 'print_screen'
}

export interface PrintLine {
	type: 'print_line'
}

export interface StopPrintLog {
	type: 'stop_print_log'
}

export interface StartPrintLog {
	type: 'start_print_log'
}

export interface SetKeyDefinition {
	type: 'set_key_definition',
	key: string,
	string: string
}

export interface CursorToken {
	type: 'cursor'
	x: number
	y: number
}

export interface ColorToken {
	type: 'color'
	color: string
}

export type Token =
	| TextToken
	| QueryDeviceCodeToken
	| ReportDeviceCodeToken
	| QueryDeviceStatusNode
	| ReportDeviceOkNode
	| ColorToken
