module.exports = {
    pluginOptions: {
        quasar: {
            importStrategy: 'kebab',
            rtlSupport: true,
            framework:{
                cssAddon:true
            }
        }
    },
    transpileDependencies: [
        'quasar'
    ],
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/styles/quasar.variables.scss";
                `
            }
        }
    }
}
