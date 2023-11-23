import { range } from "./range";

let names: string[] = range(1, 6).map((val, i) => `[${i}]:${val}`);
