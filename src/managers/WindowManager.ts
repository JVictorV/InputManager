import ref from 'ref-napi';

import { RectStruct } from '../utils/structs';
import { User32 } from './FFI';

export function GetDesktopWindow() {
	let Handle = User32.GetDesktopWindow();
	return Handle;
}

export function GetWindowRect() {
	let Handle = GetDesktopWindow();
	let rect: Buffer = ref.alloc(RectStruct);
	let result: Boolean = User32.GetWindowRect(Handle, rect);
	//@ts-ignore
	//!deref not defined on Buffer
	return result ? rect.deref() : result;
}
