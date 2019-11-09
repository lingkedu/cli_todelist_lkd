<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->


    <!--标题组件  star-->
                <Tab></Tab>
    <!--标题组件  end-->

     <!-- Container组件 -- start -->
                <Container 
                :todos="newTodos" 
                @change_flage="changeFlag" 
                @check="check"
                @add_item = "addItem"
                >
                </Container>
    <!-- Container组件 -- end -->

     <!-- my-mask组件 -- start -->
                <Maske  v-if = "mask_flag"
                :close_mask = "closeMask"
                :active_index = "active_index"
                :remove = "remove" 
                >
                </Maske>
     <!-- my-mask组件 -- end -->

     <!-- tabbar组件 -- start -->
                <TabBar :type = "type" @get_type = "changeType" ></TabBar>

      <!-- tabbar组件 -- end -->
  </div>
</template>

<script>
import Tab from './views/Tab'
import Container from './views/Container'
import Maske from './views/Maske'
import TabBar from './views/TabBar'
export default {
  name: 'app',
  components: {
   Tab,
   Container,
   Maske,
   TabBar,
  },
  data(){
      return{
        active_index: "",
        mask_flag: false,
        type: 'A',
        todos: [
            {
                id: 1,
                task: '任务一',
                done: true,//done表示任务是否已经完成
            },
            {
                id: 2,
                task: '任务二',
                done: true
            }
        ]
      }
  }, 
    methods: {
        changeFlag(index) {
            this.todos[index].done = !this.todos[index].done
        },
        check(index) {
            /* index作用就是要让我们知道我们点的是哪一个 */
            const flag = this.todos[index].done
            if (flag) {
                // true 那么表示任务已经完成，那么可以直接删除
                this.remove(index)
            } else {
                // false 那么表示任务没有完成，那么不可以直接删除，我们应该弹框提示
                this.active_index = index
                this.changeMaskFlag()
            }
        },
        remove(index) {
            /* 数组删除一条 */
            this.todos.splice(index, 1)
        },
        changeMaskFlag() {
            /* 开启遮罩 */
            this.mask_flag = true
        },
        closeMask() {
            this.mask_flag = false
        },
        addItem(val) {
            /* 我们要往todos中添加一条 */
            this.todos.push({
                id: sort(this.todos)[0].id + 1,
                task: val,
                done: true
            })
        },
        changeType(val) {
            this.type = val
        },
    },
    computed: {
        newTodos() {
            switch (this.type) {
                case 'A':
                    return this.todos
                    break;
                case 'F':
                    return this.todos.filter(item => item.done)
                    break;
                case 'U':
                    return this.todos.filter(item => !item.done)
                    break;

                default:
                    break;
            }
        }
  }

}
function sort(arr) {
    return arr.sort(function (a, b) {
      return b.id - a.id
    })
  }
</script>

<style lang="stylus">
  
</style>
