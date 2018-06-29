import { MouseStruct } from "../utils/structs";
import { MouseEventF, InputType } from "../utils/enums";
import { mUser32, _CBSIZE } from "./FFI";

function SendMouseEvent(x:number,y:number,evtType:MouseEventF,debug:boolean)
{
    let Input = new MouseStruct();
    Input.type = InputType.Mouse;
    Input.dx = x;
    Input.dy = y;
    Input.mouseData = 0;
    Input.dwFlags = evtType;
    Input.dwExtraInfo = 0;
    let Send = mUser32.SendInput(1,Input,_CBSIZE);
    if (debug) console.log(`DEBUG::InputManager SendMouseEvent => ${Send}`);
}

export function MoveMouse(x:number,y:number,debug:boolean = false)
{
    let relativeX = Math.ceil(x);
    let relativeY = Math.ceil(y);
    SendMouseEvent(relativeX,relativeY,MouseEventF.Move | MouseEventF.Absolute,debug);
}

export function RClick(debug:boolean = false)
{
    SendMouseEvent(0,0,MouseEventF.RightDown,debug);
    SendMouseEvent(0,0,MouseEventF.RightUp,debug);
}

export function LClick(debug:boolean = false)
{
    SendMouseEvent(0,0,MouseEventF.LeftDown,debug);
    SendMouseEvent(0,0,MouseEventF.LeftUp,debug);
}