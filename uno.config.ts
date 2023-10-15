import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    transformerCompileClass,
    transformerDirectives,
    transformerVariantGroup
} from "unocss";
import presetChinese from 'unocss-preset-chinese'
import presetEase from 'unocss-preset-ease'
import {presetExtra} from 'unocss-preset-extra'

export default defineConfig({
    transformers: [
        transformerDirectives(),
        transformerCompileClass(),
        transformerVariantGroup()
    ],
    presets: [
        presetUno(),
        presetAttributify({
            prefix: 'un-',
            prefixedOnly: true
        }),
        presetTypography(),
        // presetTagify(),
        presetChinese(),
        presetEase(),
        presetExtra(),
        presetIcons({
            warn: true
        })
    ],
    rules: [
        [/^grid-area-(.+)$/, ([, s]) => {
            return {'grid-area': s}
        }],
    ]
})