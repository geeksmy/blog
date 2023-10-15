import type {PluginOption} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import {viteBuildInfo} from './vite-build-info'

export function createVitePlugins(env: Record<string, string>) {
    const vitePluginList: (PluginOption | PluginOption[])[] = [
        vue(),
        vueJsx(),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                '@vueuse/core',
                'pinia',
            ],
            dts: 'types/auto-imports.d.ts',
            dirs: ['src/stores', 'src/composables'],
        }),
        Components({
            resolvers: [AntDesignVueResolver()],
            dts: 'types/components.d.ts',
            dirs: ['src/components', 'src/view', 'src/pages'],
            deep: true,
            include: [""]
        }),
        Unocss(),
        viteBuildInfo(env.VITE_APP_NAME),
    ]
    return vitePluginList
}
