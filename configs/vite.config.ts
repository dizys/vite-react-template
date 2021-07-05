import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import {minifyHtml, injectHtml} from 'vite-plugin-html';
import tsconfigPath from 'vite-tsconfig-paths';
import vitePluginImp from 'vite-plugin-imp';

import {DIST_DIR, SRC_DIR, TSCONFIG_PATH} from './paths';

export default defineConfig({
  root: SRC_DIR,
  build: {
    outDir: DIST_DIR,
  },
  plugins: [
    reactRefresh(),
    minifyHtml(),
    injectHtml(),
    tsconfigPath({projects: [TSCONFIG_PATH]}),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: name => `antd/lib/${name}/style/index.css`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
