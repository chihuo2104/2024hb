<script setup>
import { ref } from 'vue'
const activityStatus = ref('Pending')
const now = (new Date()).getTime()
// if (now > 1674266400000 && now < 1674352800000) activityStatus.value = 'Active'
// if (now > 1674352800000) activityStatus.value = 'Ended'
activityStatus.value = 'Active'
function go () {
	window.location.href='https://rb.chihuo2104.dev/[cyno_clientid]/quiz0-signup'
}
</script>

<template>
	<div class="bg-gray-300 flex place-items-center justify-center">
		<div id="container" class="container max-w-xl shadow-xl m-10 p-5 backdrop-blur-lg">
			<h1 class="font-bold text-2xl p-2">chi的小红包冒险&nbsp;<small>v.e.r. 2024</small></h1>
			<div class="text-lg p-2">一共花了四五个小时写代码和组题，祝大家龙年快乐啦~<br/>活动时间：2024.2.9 10:00 - 2024.2.10 10:00<br/>官方题解将会在2024.2.10 14:00发布（x</div>
			<hr/>
			<div v-if="activityStatus === 'Pending'" class="text-xl p-2 m-2">活动还没有开始哦~</div>
			<div v-else-if="activityStatus === 'Active'" class="text-xl p-2 m-2">
				<div class="text-xl my-2">活动开始啦~<button @click="go">戳我前往第一题</button></div>
				<hr/>
				<h2 class="font-bold text-xl p-2">小提示：</h2>
				<div class="text-lg p-2">啊哦，这里暂无小提示！</div>
			</div>
			<div v-else-if="activityStatus === 'Ended'" class="text-xl p-2 m-2">活动结束啦~等待明年的红包挑战吧~</div>
			<hr/>
			<h2 class="font-bold text-xl p-2">Q&As</h2>
			<div class="text-xl p-2">本次红包活动的红包是支付宝的口令红包，你可以打开支付宝，搜索红包，输入口令来领取红包</div>
			<div class="text-xl p-2">本次活动的口令形式为 '2023[四个汉字]'</div>
			<div class="text-xl p-2">获取口令后，请对口令<a href="https://www.strerr.com/cn/sha1.html" target="_blank">进行sha1加密</a>并取前16位数字才为支付宝红包中输入的口令</div>
			<div class="text-md p-2">e.g. '2023野兽先辈' -> sha1('2023野兽先辈') -> 217498b12154b8893eec8b52c80657fb84c1a88a -> (取前16位) 217498b12154b889 -> 输入支付宝 -> 获取红包</div>
			<div class="font-bold text-xl p-2">红包设置</div>
			<div class="text-xl pl-2">quiz0 48红包 20.24 CNY 拼手气</div>
			<div class="text-xl pl-2">quiz1 24红包 20.24 CNY 拼手气</div>
			<div class="text-xl pl-2">quiz2 12红包 20.24 CNY 拼手气</div>
			<div class="text-xl pl-2">quiz3 6红包 20.24 CNY 拼手气</div>
			<div class="text-xl p-2">还有几个隐藏红包，等着你们发现（x</div>
			<div class="text-xl p-2">小提示：在做题过程中你会使用到手机无法使用的工具，使用电脑才能愉快的玩耍。如果你们是组团做题的，不要贪心多领哦~</div>
			<hr/>
			<p class="text-md p-2">chihuo2104 powered&copy;2024. </p>
		</div>
	</div>
</template>