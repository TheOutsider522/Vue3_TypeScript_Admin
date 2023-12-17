<template>
  <div class="box">
    <h1>App根组件</h1>
  </div>
</template>

<script setup lang="ts">
const str = 'App'

for (let i = 0; i < 100; i++) {
  console.log(i)
}
</script>

<style scoped lang="scss">
.box {
  width: 600px;
  height: 400px;
  background-color: black;
  h1 {
    color: white;
  }
}
</style>
