import {TypescriptParser} from "typescript-parser";

const parser = new TypescriptParser();

// either:
const parsed = await parser.parseSource("/* typescript source code as string */");

// or a filepath
const parsed = await parser.parseFile('/user/myfile.ts', 'workspace root');