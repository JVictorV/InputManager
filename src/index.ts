import * as K from './managers/keyboardManager';
import * as M from './managers/mouseManager';
import * as W from './managers/WindowManager';
import * as U from './utils/enums';
import { getPosition } from './utils/screenHelper';

export { VKC } from "./utils/enums";

export class Mouse {
	constructor(
		public screenWidth: number = new Window().GetWindowRect().right,
		public screenHeight: number = new Window().GetWindowRect().bottom
	) {}
	Move(PosX: number, PosY: number, debug?: boolean): void {
		let x = getPosition(PosX, this.screenWidth);
		let y = getPosition(PosY, this.screenHeight);
		return M.MoveMouse(x, y, debug);
	}

	RightClick(debug?: boolean): void {
		return M.RClick(debug);
	}

	LeftClick(debug?: boolean): void {
		return M.LClick(debug);
	}
}

export class Keyboard {
	GetKeyCode(Key: string): number {
		return K.GetKeyCode(Key);
	}

	SendKey(Key: U.VKC, Time?: number, Debug?: boolean): void {
		return K.SendKey(Key, Time, Debug);
	}

	SendUpperKey(Key: U.VKC, Time?: number, Debug?: boolean): void {
		return K.SendUpperKey(Key, Time, Debug);
	}

	SendMultipleKeys(Keys: string): void {
		return K.SendKeyChain(Keys);
	}
}

export class Window {
	GetDesktopWindow(): Buffer {
		return W.GetDesktopWindow();
	}
	GetWindowRect(): {
		left: number;
		top: number;
		right: number;
		bottom: number;
		"ref.buffer": Buffer;
	} {
		return W.GetWindowRect();
	}
}
