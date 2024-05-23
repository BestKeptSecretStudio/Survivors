// * source for the `Increment` type:
// > https://stackoverflow.com/a/76233031

type _IncrementDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
type Digit = _IncrementDigit[number];

type _IncrementIntermediate<T extends string> = T extends `${infer F}${Digit}`
	? T extends `${F}${infer L extends Digit}`
		? `${L extends 9 ? _IncrementIntermediate<F> : F}${_IncrementDigit[L]}`
		: never
	: 1;

type Increment<T extends number> = number extends T
	? number
	: `${T}` extends `${string}${"." | "+" | "-" | "e"}${string}`
	? number
	: _IncrementIntermediate<`${T}`> extends `${infer N extends number}`
	? N
	: never;

type Enumerate<
	N extends number,
	Acc extends number[] = []
> = Acc["length"] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc["length"]]>;

export type Range<F extends number, T extends number> = Exclude<
	Enumerate<Increment<T>>,
	Enumerate<F>
>;

export type Percentile = Range<0, 100>;
