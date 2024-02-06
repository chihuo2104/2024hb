<script lang="ts" setup>
useHead({
	title: '初赛反馈结果'
})
</script>

<template>
	<div class="bg-gray-200 h-screen w-screen">
		<div class="container max-w-2xl p-2 mx-auto shadow-md">
			<div class="text-3xl font-bold text-center m-2">吃网杯贰拾壹食姬嘤郁欣喜鸡书妲塞</div>
			<div class="text-2xl font-bold text-center m-2">初赛反馈结果</div>
			<div class="text-xl  text-center">
				{username}，感谢参加吃网杯贰拾壹食姬嘤郁欣喜鸡书妲塞初赛！<br/>
				您的分数是：{score}<br/>
				红包码为：xxxxxxxxxxx,不要告诉别人哦，共24个20.24元。<br/>
				复赛即将开始，请做好准备！
			</div>
			<div class="text-xl  text-center">
				AD:欢迎加入chigroup！<br/>
				杜叔叔(Telegram):<br/>
				矩阵(Matrix):<br/>
				微信(WeChat):<br/>
				Slack:<br/>
				欢迎来玩！
			</div>
			<div class="text-center">
				<button class="text-2xl hover:shadow-2xl shadow-md bg-cyan-200 border-r-2 p-2  transition-all m-2" onclick="go">点我进入复赛</button>
				<button class="text-2xl hover:shadow-2xl shadow-md bg-cyan-200 border-r-2 p-2  transition-all m-2" onclick="generate">点我生成证书</button>
			</div>
		</div>
	</div>
</template>

<style>
body{
	width: 100%;
	height: 100%;
}
</style>