const { override, fixBabelImports, addWebpackAlias,addBabelPlugins } = require('customize-cra')
const path = require('path')

module.exports = override(
  ...addBabelPlugins(
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ),
  fixBabelImports('import', {
    libraryName: 'antd-mobile', 
    style: 'css',
  }),

  addWebpackAlias({
    ['assets']: path.resolve(__dirname, 'src/assets'),
    ['styles']: path.resolve(__dirname, 'src/assets/styles'),
    ['images']: path.resolve(__dirname, 'src/assets/images'),
    ['components']: path.resolve(__dirname, 'src/components'),
    ['utils']: path.resolve(__dirname, 'src/utils'),
    ['pages']: path.resolve(__dirname, 'src/pages'),
    ['store']: path.resolve(__dirname,'src/store')
  })
)