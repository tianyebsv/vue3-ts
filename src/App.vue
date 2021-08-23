<template>
  <el-container>
    <el-header
      ><div id="nav">
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div></el-header
    >
    <el-main
      ><router-view />

      <el-button>登录</el-button>
      <el-button type="primary">注册</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button></el-main
    >
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #030f0b;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
