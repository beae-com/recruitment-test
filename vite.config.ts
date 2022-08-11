import { defineConfig, searchForWorkspaceRoot } from "vite";
import * as path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    esbuild: {
        jsxFactory: "h",
        jsxFragment: "Fragment"
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            vue: 'vue/dist/vue.esm-bundler.js',
        }
    },
    plugins: [
        vue({
            script: {
                refSugar: true
            }
        })
    ],
    server: {
        port: 8123,
        host: "127.0.0.1",
        fs: {
            allow: [
                searchForWorkspaceRoot(process.cwd()),
                "/public"
            ]
        }
    }
});
