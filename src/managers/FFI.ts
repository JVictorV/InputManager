import FFI from 'ffi-napi';
import { arch } from 'os';

import { HANDLE, KeyBoardStruct, LPRECT, MouseStruct } from '../utils/structs';

export const _CBSIZE: number = arch() === "x64" ? 40 : 28;

export const kUser32 = FFI.Library("user32", {
	SendInput: ["int", ["int", KeyBoardStruct, "int"]]
});

export const mUser32 = FFI.Library("user32", {
	SendInput: ["int", ["int", MouseStruct, "int"]]
});

export const User32 = FFI.Library("user32", {
	GetDesktopWindow: [HANDLE, []],
	GetWindowRect: ["bool", [HANDLE, LPRECT]]
});
