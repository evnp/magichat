export declare function magicHatIsValidSeed(seed: string): boolean;
export declare function magicHatBegin(seed: string | null, handler: (seed: string, question: string) => void): [string, string, number];
export declare function magicHatNext(seed: string, seconds?: number | null): [string, string];
export declare function magicHatBack(seed: string, seconds?: number | null): [string, string];
export declare function magicHatGo(seed: string, seconds?: number | null): [string, string];
export declare function magicHatStartRepeat(seed: string, seconds: number, handler: (seed: string, question: string) => void): [string, string, number];
export declare function magicHatStopRepeat(seed?: string | null): [string, string];
