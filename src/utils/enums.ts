export enum InputType {
	Mouse,
	KeyBoard,
	Hardware
}

export enum KeyEventF {
	KeyDown = 0x0000,
	ExtendedKey = 0x0001,
	KeyUp = 0x0002,
	Unicode = 0x0004,
	Scancode = 0x0008
}

export enum MouseEventF {
	Move = 0x0001,
	LeftDown = 0x0002,
	LeftUp = 0x0004,
	RightDown = 0x0008,
	RightUp = 0x0010,
	MiddleDown = 0x0020,
	MiddleUp = 0x0040,
	XDown = 0x0080,
	XUp = 0x0100,
	Wheel = 0x0800,
	VirtualDesk = 0x4000,
	Absolute = 0x8000
}

export enum VKC {
	LBUTTON = 0x01,
	RBUTTON = 0x02,
	CANCEL = 0x03,
	MBUTTON = 0x04,
	XBUTTON1 = 0x05,
	XBUTTON2 = 0x06,
	BACKSPACE = 0x08,
	TAB = 0x09,
	CLEAR = 0x0c,
	ENTER = 0x0d,
	SHIFT = 0x10,
	CONTROL = 0x11,
	ALT = 0x12,
	PAUSE = 0x13,
	CAPSLOCK = 0x14,
	ESC = 0x1b,
	SPACEBAR = 0x20,
	LEFT = 0x25,
	UP = 0x26,
	RIGHT = 0x27,
	DOWN = 0x28,
	K0 = 0x30,
	K1 = 0x31,
	K2 = 0x32,
	K3 = 0x33,
	K4 = 0x34,
	K5 = 0x35,
	K6 = 0x36,
	K7 = 0x37,
	K8 = 0x38,
	K9 = 0x39,
	A = 0x41,
	B = 0x42,
	C = 0x43,
	D = 0x44,
	E = 0x45,
	F = 0x46,
	G = 0x47,
	H = 0x48,
	I = 0x49,
	J = 0x4a,
	K = 0x4b,
	L = 0x4c,
	M = 0x4d,
	N = 0x4e,
	O = 0x4f,
	P = 0x50,
	Q = 0x51,
	R = 0x52,
	S = 0x53,
	T = 0x54,
	U = 0x55,
	V = 0x56,
	W = 0x57,
	X = 0x58,
	Y = 0x59,
	Z = 0x5a,
	LWIN = 0x5b,
	RWIN = 0x5c,
	N0 = 0x60,
	N1 = 0x61,
	N2 = 0x62,
	N3 = 0x63,
	N4 = 0x64,
	N5 = 0x65,
	N6 = 0x66,
	N7 = 0x67,
	N8 = 0x68,
	N9 = 0x69,
	MULTIPLY = 0x6a,
	ADD = 0x6b,
	DECIMAL = 0x6c,
	SUBTRACT = 0x6d,
	NCOMMA = 0x6e,
	DIVIDE = 0x6f,
	F1 = 0x70,
	F2 = 0x71,
	F3 = 0x72,
	F4 = 0x73,
	F5 = 0x74,
	F6 = 0x75,
	F7 = 0x76,
	F8 = 0x77,
	F9 = 0x78,
	F10 = 0x79,
	F11 = 0x7a,
	F12 = 0x7b,
	LSHIFT = 0xa0,
	RSHIFT = 0xa1,
	LCONTROL = 0xa2,
	RCONTROL = 0xa3,
	VOLUME_MUTE = 0xad,
	VOLUME_DOWN = 0xae,
	VOLUME_UP = 0xaf,
	MEDIA_NEXT_TRACK = 0xb0,
	MEDIA_PREV_TRACK = 0xb1,
	MEDIA_STOP = 0xb2,
	MEDIA_PLAY_PAUSE = 0xb3,
	PLUS = 0xbb,
	COMMA = 0xbc,
	MINUS = 0xbd,
	PERIOD = 0xbe
}

export enum KeysAsSimbols {
	"*" = "MULTIPLY",
	"+" = "ADD",
	"-" = "SUBTRACT",
	"." = "DECIMAL",
	"/" = "DIVIDE",
	"," = "COMMA",
	" " = "SPACEBAR"
}
