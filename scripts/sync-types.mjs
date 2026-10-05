#!/usr/bin/env node
// Copies the Sanity-generated types from the CMS app to the web app.
// Run after `yarn typegen` (which extracts the schema and regenerates types).
import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const from = path.join(root, 'apps/cms/sanity.types.ts');
const to = path.join(root, 'apps/web/src/types/sanity.types.ts');

copyFileSync(from, to);
console.log(`synced types:\n  ${from}\n  -> ${to}`);
