// const path = require('path')

module.exports = {
  // 配置方式一：覆盖webpack内部的配置
  outputDir: './build',
  // 配置方式二： 新增内部配置
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      }
    }
  }
  // 配置方式三：重写内部配置
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // 配置方式四：重写内部配置
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  // }
}
