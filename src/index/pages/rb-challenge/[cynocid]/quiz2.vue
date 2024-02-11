<script setup>
import {generate} from "~/scripts/clientid";
import config from "~/scripts/config";
import {GenerateToken} from "~/scripts/token";

useHead({
	title: '吃网杯贰拾壹食姬嘤郁欣喜鸡书妲塞复赛答题平台'
})

const show = ref(false)
const $route = useRoute()
const resp = await useFetch('/api/huohuorb?module=userinfo')
const res = JSON.parse(resp.data.value)
const cid = generate(res.data.ua, res.data.ip)
console.log($route.params)


const { data } = await useFetch("/api/huohuorb?module=challenge-in&id=2&cid=" + $route.params.cynocid)
const d = JSON.parse(data.value)
if (d.code === 200 && cid === $route.params.cynocid) {
	show.value = true
}

const ans = ref('')

async function commit () {
	const res = await fetch("/api/huohuorb?module=challenge2-commit&cid=" + cid + "&ans=" + encodeURIComponent(ans.value))
	const res2 = await res.json()
	alert('您的分数：' + res2.score + ";您获得的红包码：" + res2.data)
	if(parseInt(res2.score) >= 60) {
		alert("恭喜您晋级！")
		go()
	}
}

const url = "/rb-challenge/" + cid + "/quiz2-end"

function go () {
	location.href = url
}
</script>
<template>
	<div class="bg-gray-300 flex place-items-center justify-center" v-if="show">
		<div id="container" class="container max-w-5xl shadow-xl m-10 p-5 backdrop-blur-lg">
			<h1 class="font-bold text-3xl p-2">前情提要</h1>
			<div class="text-lg p-2">
				在白嫖之神的帮助下，你成功进入了复赛。<br/>
				“复赛采用线上作文的方式。本期复赛的作文题目为“My favorite Programming Language”，要求如下：...我们将会邀请专业评委对你的文章进行评选，80分以上将晋级决赛。”文件内如是写道。<br/>
				“啊？作文？还是英语的？我最讨厌写作文了！”你大喊道。<br/>
				但是你不得不通过复赛，因为只有这样才能在大家面前展示你的技术力。<br/>
				“这时候就不得不找吃了，原来还不想麻烦他的。”<br/>
				当你在文件中看到了吃货，你就有想找他聊聊的意思了。但是你想凭借自己的能力赢得这场比赛。<br/>
				于是你打开了杜叔叔，点击和“尾巴藿藿”的聊天对话，开始和吃聊起了天<br/>
				“btw 你们学校最近是不是办了个什么比赛 我妈要求我必须参加...”<br/>
				“你说那个比赛啊，可烦死我了”<br/>
				“......”<br/>
				在长达6小时的交谈中，你得知由于组委会的层层克扣，原来100万的比赛经费补助到他那边只有两千了。用这些钱请您播歪果鱼学校的学生当评委都不够，没办法，死马当作活马医，只能上个AI当评委了。<br/>
				由于你和吃的交情过硬，他给你写了个训练程序帮助你训练自己的作文并让AI评委打分，训练后的作文交上去，肯定能过关。
				<a href="/static/quiz2.zip">点我下载chi的训练程序</a>
			</div>
			<hr/>
			<h1 class="font-bold text-3xl p-2">吃网杯贰拾壹食姬嘤郁欣喜鸡书妲塞复赛答题平台</h1>
			<div class="text-xl p-2 m-2">
				请输入你的小作文：<br/>
				<textarea placeholder="这里输入你的小作文" class="w-full h-1/2" v-model="ans"/>
			</div>
			<button class="text-2xl hover:shadow-2xl shadow-md bg-cyan-200 border-r-2 p-2  transition-all m-2" @click="commit">提交</button>
		</div>
	</div>
	<div v-else>
		<img src="https://upload-bbs.mihoyo.com/upload/2022/10/19/02711c97bc7fa445d87655db1666e851_2779652806545815616.png"/><h1>啊哦，你被大风机关盯上了！[Errno -1]</h1>您的网络环境存在风险，请稍后再试。
	</div>
</template>
<style>
body {
	font-family: "MiSans", "Noto Sans SC", sans-serif;
}
</style>