<template>
  <div class="father" flex="cross:center dir:top main:justify">
    {{msg}}
    <span>haha</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "这是index"
    };
  },
  methods: {},
  mounted() {},
  components: {}
};
</script>
<style lang="less" scoped>
.animation-wh{
    
}
.father {
  width: 100px;
  height: 100px;
  color: green;
  transition:all .3s;
  transform:translate(100px,100px);
  border-radius:5px;
  border:1px solid #acacac;
  > span {
    color: yellow;
  }
}
.father:hover{
    width:102px;
    height: 102px;
    // border:none;
    box-shadow:#ccc 5px 5px 15px 0px;
}
</style>

