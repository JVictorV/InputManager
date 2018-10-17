# InputManager

A NodeJS module to manage inputs using [FFI-NAPI](https://github.com/node-ffi-napi/node-ffi-napi)

## Installation
>$ yarn add inputmanager 

> $ npm i inputmanager
 
## Features

- Mouse
	- Move
	- Right Click
	- Left Click
- Keyboard
	- Send Key
	- Send Keys in CapsLock
	- Send Multiple Keys (with symbols support)
	- KeyCode from string
- Screen
	- Desktop HWND
	- Screen Width and Height
	
## Usage

### Typescript
```ts
import { Keyboard,  Mouse,  VKC,  Window } from  "inputmanager";

const mouse:Mouse = new Mouse();
const keyboard:Keyboard = new Keyboard();
const window:Window = new Window();

mouse.Move(800, 600);
mouse.LeftClick();
mouse.RightClick();

const XkeyCode: number = keyboard.GetKeyCode("X");

keyboard.SendKey(XkeyCode);
keyboard.SendUpperKey(VKC.X);
keyboard.SendMultipleKeys("Input Manager");

let windowHandle:Buffer = window.GetDesktopWindow();
let screenRect:any = window.GetWindowRect();

console.log(`${screenRect.right}x${screenRect.bottom}`);
```
### Javascript
```js
const { Keyboard, Mouse, VKC, Window } = require("inputmanager");

const mouse = new Mouse();
const keyboard = new Keyboard();
const window = new Window();

mouse.Move(800, 600);
mouse.LeftClick();
mouse.RightClick();

const XkeyCode = keyboard.GetKeyCode("X");

keyboard.SendKey(XkeyCode);
keyboard.SendUpperKey(VKC.X);
keyboard.SendMultipleKeys("Input Manager");

let windowHandle = window.GetDesktopWindow();
let screenRect = window.GetWindowRect();

console.log(`${screenRect.right}x${screenRect.bottom}`);
```
