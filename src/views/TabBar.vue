<template>
         <footer>
            <ul>
               <li class="circle" 
                    v-for = "tabbar in tabbars" 
                    :key = " tabbar.id "
                    @click = "changeType( tabbar.text )" 
                    :class = "[ tabbar.class,type == tabbar.text && 'circle-fill']"                
                    >
                    {{ tabbar.text }}
                </li>
            </ul>
        </footer>                         
</template>
<script>
export default {
    props:["type"],
    data() {
        return {
            tabbars: [
                {
                    id: 1,
                    text: 'A',
                    class: 'circle-success'
                },
                {
                    id: 2,
                    text: 'F',
                    class: 'circle-primary'
                },
                {
                    id: 3,
                    text: 'U',
                    class: 'circle-danger'
                }
            ]
        }
    },
    methods: {
        changeType(val) {
            // console.log(val)
            this.$emit('get_type', val)
        }
    }
}
</script>

<style lang="stylus" scoped>
 *
  margin 0
  padding 0
  list-style none


footer
  position fixed
  left 0 
  bottom: 0

  width 100%
  height 80px
  border-top 1px, solid, #ccc


ul
  width 100%
  height 100%
  display flex
  justify-content space-around
  align-items center
.circle
  /* 这里写共用的样式 */
  width 60px
  height 60px

  color #ccc
  border 1px solid #ccc /* 默认边框 */
  text-align center
  line-height 60px

  border-radius 50%


.circle.circle-success
  border-color green
  color green

.circle.circle-success.circle-fill
  background green
  color white


.circle.circle-primary
  border-color blue
  color blue

.circle.circle-primary.circle-fill
  background blue
  color white


.circle.circle-danger
  border-color red
  color red

.circle.circle-danger.circle-fill
  background red
  color white

  
</style>