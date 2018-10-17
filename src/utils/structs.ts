import ref from 'ref-napi';
import StrType from 'ref-struct-di';

const StructType = StrType(ref);

export const KeyBoardStruct: StrType = new StructType({
	type: ref.types.uint64, //* WHY THAT NEEDS TO BE UINT64?
	wVK: ref.types.short, //* WORD = SHORT?
	wScan: ref.types.short,
	dwFlags: ref.types.uint32, //* DWORD == DoubleWORD == uint32?
	time: ref.types.uint64,
	dwExtraInfo: ref.types.ulong
});

export const MouseStruct: StrType = new StructType({
	type: ref.types.uint64,
	dx: ref.types.long,
	dy: ref.types.long,
	mouseData: ref.types.uint32,
	dwFlags: ref.types.uint32,
	time: ref.types.uint32,
	dwExtraInfo: ref.types.ulong
});

export const PointStruct: StrType = new StructType({
	x: ref.types.long,
	y: ref.types.long
});

export const RectStruct: StrType = new StructType({
	left: ref.types.long,
	top: ref.types.long,
	right: ref.types.long,
	bottom: ref.types.long
});

export const HANDLE = ref.refType(ref.types.void);
export const LPRECT = ref.refType(RectStruct);

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

typedef struct _RECT {
  LONG left;
  LONG top;
  LONG right;
  LONG bottom;
} RECT, *PRECT;

*/
