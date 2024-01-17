import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { marked } from 'marked';
import * as templates from './templates.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const dogs = JSON.parse(readFileSync(join(__dirname, 'data/dogs.json'), 'utf-8'));

for (const dog of dogs) {
    const articlePath = join(__dirname, 'data/', dog.slug + '.md');
    if (existsSync(articlePath)) {
        dog.markdownFound = true;
        const html = marked(readFileSync(articlePath, 'utf-8'));
        const article = templates.Article(dog, html);
        const outputPath = join('public/data/', dog.slug + '.html');
        console.log(`writing '${outputPath}'`);
        writeFileSync(outputPath, article, 'utf-8');
    }
    else {
        // console.log(`markdown file '${articlePath}' not found`);
    }
}

const html = templates.ImageGrid(dogs);
console.log(`writing 'public/data/image-grid.html'`);
writeFileSync('public/data/image-grid.html', html, 'utf-8');


