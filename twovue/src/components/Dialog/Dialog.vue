<template>
  <div>
    <div id="dialog" title="Basic dialog" style="overflow:hidden;display: none">
      <p>这是一个动画显示的对话框，用于显示信息。对话框窗口可以移动，调整尺寸，默认可通过 'x' 图标关闭。</p>
    </div>
  </div>

</template>

<script>
    export default {
      name: "dialogUse",
      data() {
         return{

         }
      },
      mounted:function(){
        $( "#dialog" ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 1000
          },
          hide: {
            effect: "explode",
            duration: 1000
          }
        });
      },
      methods:{
        openDialog:function(){
          debugger
          $( "#dialog" ).dialog( "open" );
        }
      }
    }
</script>

<style scoped>

</style>
