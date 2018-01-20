<template>
	<div id="app">
		<div>
			<div id="cc" class="easyui-layout" style="width:1275px;height:650px;">
				<div data-options="region:'north',title:'North Title',split:true" style="height:100px;"></div>
				<div data-options="region:'south',title:'South Title',split:true" style="height:100px;"></div>
				<div data-options="region:'east',title:'East',split:true" style="width:100px;"></div>
				<div data-options="region:'west',title:'West',split:true" style="width:100px;"></div>
				<div data-options="region:'center',title:'center title'" style="padding:5px;background:#eee;">
					<div>
						<!-- Nav tabs -->
						<ul class="nav nav-tabs" role="tablist">
							<li role="presentation" class="active">
								<a aria-controls="bootstrap" role="tab" data-toggle="tab">
									<router-link to="/bootstrap" >Go to Bootstrap</router-link>
								</a>
							</li>
							<li role="presentation" class="active">
								<a aria-controls="helloworld" role="tab" data-toggle="tab">
									<router-link to="/helloWorld" >HelloWorld</router-link>
								</a>
							</li>
							<li role="presentation">
								<a aria-controls="message" role="tab" data-toggle="tab">
									<router-link to="/message" >Message</router-link>
								</a>
							</li>
							<li role="presentation">
								<a aria-controls="setting" role="tab" data-toggle="tab">
									<router-link to="/setting">Setting</router-link>
								</a>
							</li>
						</ul>
						<router-view/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	.panel-body, .layout-body{
		background: rgba(255, 255, 255, .15)!important;
	}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
