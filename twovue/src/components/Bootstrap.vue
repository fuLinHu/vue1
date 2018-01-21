<template>
  <div>
    <div>
      <table id="table"></table>
    </div>
  </div>
</template>

<script>
//import Message from 'static/jquery-easyui-1.5.4/jquery.easyui.min.js'
export default {
  name: 'bootstrap',
  mounted:function(){
    debugger
   $('#table').datagrid({
      url:'datagrid_data.json',
      columns:[[
        {field:'code',title:'Code',width:100},
        {field:'name',title:'Name',width:100},
        {field:'price',title:'Price',width:100,align:'right'}
      ]]
    });
  }
}
</script>

<style>

</style>
