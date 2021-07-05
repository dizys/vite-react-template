import * as Path from 'path';

export const PROJECT_DIR = Path.join(__dirname, '..');

export const SRC_DIR = Path.join(PROJECT_DIR, 'src');
export const TSCONFIG_PATH = Path.join(SRC_DIR, 'tsconfig.json');

export const DIST_DIR = Path.join(PROJECT_DIR, 'dist');
