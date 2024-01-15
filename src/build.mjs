import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync, writeFileSync } from 'fs';
import * as templates from './templates.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const data = JSON.parse(readFileSync(join(__dirname, 'data/dogs.json'), 'utf-8'));
const html = templates.ImageGrid(data);
writeFileSync('public/data/image-grid.html', html, 'utf-8');


