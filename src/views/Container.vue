<template>
  <div class="content">
    <input type="text" v-if="input_flag" @keyup.enter="add" />
    <div class="card" v-for="(todo,index) in todos" :key="todo.id">
      <div class="card-content">
        <div class="card-content-inner">
          <p>{{todo.task}}</p>
          <div class="content-botton pull-right">
            <p>
              <button
                href="#"
                class="button button-success"
                :class="{'button-fill': todo.done }"
                @click="changeContainerFlag (index)"
              >
                <span class="icon icon-check"></span>
              </button>
            </p>
            <p>
              <button href="#" class="button button-danger" @click="checkDone(index)">
                <span class="icon icon-remove"></span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Bus from '../assets/Bus';

export default {
  props: ["todos"],
  data() {
    return {
      input_flag: false
    };
  },
  methods: {
    changeContainerFlag(index) {
      this.$emit("change_flage", index);
    },
    checkDone(index) {
      this.$emit("check", index);
    },
    add(e) {
      this.$emit("add_item", e.target.value);
      this.input_flag = false;
    }
  },
  mounted() {
    var that = this;
   Bus.$on("input_flag_change", function() {
      that.input_flag = !that.input_flag;
    });
  }
};
</script>
<style lang="stylus" scoped>
.card-content-inner 
  width 100%
  height 120px


.content-botton 
  display flex


.content-botton p .button-success 
  margin-right 10px

</style>