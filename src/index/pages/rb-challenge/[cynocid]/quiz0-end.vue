<script lang="ts" setup>
import {generate} from "~/scripts/clientid";
import config from "~/scripts/config";
import {GenerateToken} from "~/scripts/token";

useHead({
	title: '妲塞爆鸣成功'
})

const show = ref(false)
const $route = useRoute()
const resp = await useFetch('/api/huohuorb?module=userinfo')
const res = JSON.parse(resp.data.value)
const cid = generate(res.data.ua, res.data.ip)

const { data } = await useFetch("/api/huohuorb?module=gettime&c=challenge0-signup&cid=" + $route.params.cynocid)
const d = JSON.parse(data.value)
if (d.code ===200 &&  cid === $route.params.cynocid) {
	show.value = true
}

const url = "/rb-challenge/" + cid + "/quiz1"

function go () {
	location.href = url
}
</script>

<template>
	<div class="bg-gray-200 h-screen w-screen" v-if="show">
		<div class="container max-w-2xl p-2 mx-auto shadow-md">
			<div class="text-3xl font-bold text-center m-2">吃网杯贰拾壹食姬嘤郁欣喜鸡书妲塞</div>
			<div class="text-2xl font-bold text-center m-2">报名成功！</div>
			<div class="text-xl  text-center">
				{username}，欢迎参加吃网杯贰拾壹食姬嘤郁欣喜鸡书妲塞！<br/>
				红包码为：xxxxxxxxxxx,不要告诉别人哦，共48个20.24元。<br/>
				初赛即将开始，请做好准备！
			</div>
			<div class="text-center">
				<button class="text-2xl hover:shadow-2xl shadow-md bg-cyan-200 border-r-2 p-2  transition-all m-2" @click="go">点我进入初赛</button>
				<button class="text-2xl hover:shadow-2xl shadow-md bg-cyan-200 border-r-2 p-2  transition-all m-2" onclick="generate()">点我生成证书</button>
			</div>
		</div>
	</div>
	<div v-else>
		<img src="https://upload-bbs.mihoyo.com/upload/2022/10/19/02711c97bc7fa445d87655db1666e851_2779652806545815616.png"/><h1>啊哦，你被大风机关盯上了！[Errno -1]</h1>您的网络环境存在风险，请稍后再试。
	</div>
</template>

<style>
body{
	width: 100%;
	height: 100%;
}
</style>