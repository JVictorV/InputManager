import Struct from 'ref-struct';
import ref from 'ref';

export const KeyBoardStruct: Struct = new Struct({
    'type': ref.types.uint64, //* WHY THAT NEEDS TO BE UINT64?
    'wVK' : ref.types.short,  //* WORD = SHORT?
    'wScan' : ref.types.short,
    'dwFlags' : ref.types.uint32, //* DWORD == DoubleWORD == uint32?
    'time' : ref.types.uint64,
    'dwExtraInfo': ref.types.ulong
})

export const MouseStruct: Struct = new Struct({
    'type': ref.types.uint64,
    'dx': ref.types.long,
    'dy': ref.types.long,
    'mouseData': ref.types.uint32,
    'dwFlags': ref.types.uint32,
    'time': ref.types.uint32,
    'dwExtraInfo': ref.types.ulong
})

export const PointStruct: Struct = new Struct({
    'x': ref.types.long,
    'y': ref.types.long
})

/*
typedef struct tagKEYBDINPUT {
  WORD      wVk;
  WORD      wScan;
  DWORD     dwFlags;
  DWORD     time;
  ULONG_PTR dwExtraInfo;
} KEYBDINPUT, *PKEYBDINPUT;

typedef struct tagMOUSEINPUT {
  LONG      dx;
  LONG      dy;
  DWORD     mouseData;
  DWORD     dwFlags;
  DWORD     time;
  ULONG_PTR dwExtraInfo;
} MOUSEINPUT, *PMOUSEINPUT;

typedef struct tagPOINT {
  LONG x;
  LONG y;
} POINT, *PPOINT;

*/