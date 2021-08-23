#### vue 项目引入 elementui-plus 运行 npm run serve 出现如下图错误

```
warning in ./src/App.vue?vue&type=template&id=7ba5bd90

"export ‘createElementBlock’ (imported as ‘\_createElementBlock’) was not found in ‘vue’

warning in ./src/App.vue?vue&type=template&id=7ba5bd90

"export ‘createElementVNode’ (imported as ‘\_createElementVNode’) was not found in ‘vue’
```

解决办法：升级 vue 到最新版本 执行 `npm install vue@3.2.4 --force`
