import FFI from 'ffi';
import Arch from 'os';
import { KeyBoardStruct, MouseStruct } from '../utils/structs';

export const _CBSIZE: number = Arch.arch() === 'x64' ? 40 : 28;

export const kUser32 = FFI.Library('user32', {
    SendInput: ['int', ['int', KeyBoardStruct, 'int']],
})

export const mUser32 = FFI.Library('user32', {
    SendInput: ['int', ['int', MouseStruct, 'int']],
})