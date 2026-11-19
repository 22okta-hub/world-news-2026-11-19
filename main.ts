import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./news.jpg', import.meta.url);
mkdirSync(outDir, { recursive: true });
if (statSync(source).size > 1_048_576) throw new Error('Image exceeds the 1 MiB contest limit.');
copyFileSync(source, join(outDir, 'entry.png'));
