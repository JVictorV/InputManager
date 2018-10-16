import { InputType, KeyEventF, KeysAsSimbols, VKC } from '../utils/enums';
import { KeyBoardStruct } from '../utils/structs';
import { _CBSIZE, kUser32 } from './FFI';

function SendKeyEvent(
	key: VKC,
	evtType: KeyEventF,
	time: number = 0,
	debug: boolean = false
): void {
	let Input = new KeyBoardStruct();
	Input.type = InputType.KeyBoard;
	Input.wVK = key;
	Input.wScan = 0;
	Input.dwFlags = evtType;
	Input.time = time;
	Input.dwExtraInfo = 0;
	let Send = kUser32.SendInput(1, Input, _CBSIZE);
	if (debug) console.log(`DEBUG::InputManager SendKeyEvent => ${Send}`);
}

export function SendKey(key: VKC, time: number = 0, debug: boolean = false) {
	SendKeyEvent(key, KeyEventF.KeyDown, time, debug);
	SendKeyEvent(key, KeyEventF.KeyUp, time, debug);
}

export function SendUpperKey(
	key: VKC,
	time: number = 0,
	debug: boolean = false
) {
	SendKey(VKC.CAPSLOCK, 0);
	SendKey(key, time, debug);
	SendKey(VKC.CAPSLOCK, 0);
}

export function GetKeyCode(keyName: any): number {
	let k: keyof typeof VKC = keyName.toUpperCase();
	return VKC[k];
}

export function SendKeyChain(keyChain: string): void {
	let keyArray: any[] = keyChain.split("", keyChain.length);
	let newKeyArray: any[] = keyArray.map(
		char =>
			char in KeysAsSimbols
				? (char = KeysAsSimbols[char])
				: (char =
						char && !isNaN(char)
							? (char = `K${char}`)
							: (char = char))
	);

	newKeyArray.forEach(char => {
		let kc = GetKeyCode(char);
		char === char.toLowerCase() ? SendKey(kc) : SendUpperKey(kc);
	});
}
