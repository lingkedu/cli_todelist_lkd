<template>
  <header class="bar bar-nav">
    <a class="icon icon-left pull-left"></a>
    <a class="icon icon-edit pull-right" @click="change_input_flag"></a>
    <h1 class="title">零刻度</h1>
  </header>
</template>

<script>
import Bus from "../assets/Bus"

export default {
  methods: {
    change_input_flag() {
      Bus.$emit("input_flag_change");
    }
  }
};
</script>

<style lang="stylus" scoped>

</style>