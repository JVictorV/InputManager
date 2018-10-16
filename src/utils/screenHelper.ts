export function getPosition(cord: number, screenRelative: number): number {
	return cord > 0 ? cord * (65535 / screenRelative) : 1;
}
