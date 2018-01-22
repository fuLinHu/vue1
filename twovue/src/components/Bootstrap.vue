<template>
  <div>
    <div style="margin-top: 10px">
      <button class="btn-default" @onclick="openDialog()"></button>
      <table id="table"></table>
    </div>
    <dialogUse></dialogUse>
  </div>
</template>

<script>
export default {
  name: 'bootstrap',
  mounted:function(){
   $('#table').datagrid({
      url:'my.json',
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
