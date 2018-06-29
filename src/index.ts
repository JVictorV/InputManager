import * as K from './managers/keyboardManager';
import * as M from './managers/mouseManager';
import * as U from './utils/enums';
import { getPosition } from './utils/screenHelper';

export { VKC } from "./utils/enums";

export class Mouse 
{
    constructor(public screenWidth:number = 1366, public screenHeight:number = 768) {}
    Move(PosX:number, PosY: number, debug?: boolean):void
    {
        let x = getPosition(PosX,this.screenWidth );
        let y = getPosition(PosY,this.screenHeight);
        return M.MoveMouse(x,y,debug);
    }

    RightClick(debug?:boolean):void
    {
        return M.RClick(debug);
    }

    LeftClick(debug?:boolean):void
    {
        return M.LClick(debug);
    }
} 

export class Keyboard
{
    GetKeyCode(Key:string):number
    {
        return K.GetKeyCode(Key);
    }

    SendKey(Key:U.VKC,Time?:number,Debug?:boolean):void
    {
        return K.SendKey(Key,Time,Debug);
    }

    SendUpperKey(Key:U.VKC,Time?:number,Debug?:boolean)
    {
        return K.SendUpperKey(Key,Time,Debug);
    }

    SendMultipleKeys(Keys:string)
    {
        return K.SendKeyChain(Keys);
    }

}
