# InputManager

### Instalation

> $ npm i inputmanager

### Usage:

#### TypeScript
```ts
import {Keyboard, Mouse, VKC } from "inputmanager";

const ScreenW = 1366;
const ScreenH = 768;

const MManager = new Mouse(ScreenW, ScreenH);
const KManager = new Keyboard();

MManager.Move(800, 600);
MManager.LeftClick();

KManager.SendMultipleKeys("Welcome Input Manager");
```

#### JavaScript
```js
var inputmanager = require("inputmanager")
var ScreenW = 1366;
var ScreenH = 768;
var MManager = new inputmanager.Mouse();
var KManager = new inputmanager.Keyboard();

MManager.Move(800, 600);
MManager.LeftClick();

KManager.SendMultipleKeys("Welcome Input Manager");
```