<script setup>
import {generate} from "../scripts/clientid";

useHead({
	title: 'chi的小红包冒险 v.e.r. 2024'
})
import { ref } from 'vue'
const activityStatus = ref('Pending')
const now = ref((new Date()).getTime())

// production
const start = 1707566400000
const end = 1707652800000

if (now.value > start && now.value < end) activityStatus.value = 'Active'
if (now.value > end) activityStatus.value = 'Ended'

let i = setInterval(() => {
	now.value = (new Date()).getTime()
},1000)
onBeforeUnmount(() => clearInterval(i))

const resp = await useFetch('/api/huohuorb?module=userinfo')
const res = JSON.parse(resp.data.value)
const cid = generate(res.data.ua, res.data.ip)
const url = "/rb-challenge/" + cid + "/quiz0-signup"

// activityStatus.value = 'Active'
</script>

<template>
	<div class="bg-gray-300 flex place-items-center justify-center">
		<div id="container" class="container max-w-5xl shadow-xl m-10 p-5 backdrop-blur-lg">
			<h1 class="font-bold text-3xl p-2">chi的小红包冒险&nbsp;<small>v.e.r. 2024</small></h1>
			<div class="text-lg p-2">
				非常抱歉鸽了一天终于和大家再次见面了，小冒险马上就开始啦！<br/>
				花了挺长时间组题，这次的红包难度较去年有些许上升(最主要是区分度)，也加了主题背景以便大家更好地玩耍，在这里祝大家龙年快乐啦~<br/>
				活动时间：2024.2.10 20:00 - 2024.2.11 20:00<br/>
				官方题解将会在2024.2.12 14:00发布（x
			</div>
			<hr/>
			<div v-if="activityStatus === 'Pending'" class="text-xl p-2 m-2">
				<div class="text-xl p-2 m-2">
					活动还没有开始哦~<br/>
					距离活动开始还有
					{{Math.floor(Math.floor((start - now) / 1000) / (3600 * 24))}}天
					{{Math.floor(Math.floor((start - now) / 1000) % (3600 * 24) / 3600)}}小时
					{{Math.floor(Math.floor((start - now) / 1000) % 3600 / 60)}}分钟
					{{Math.floor(Math.floor((start - now) / 1000) % 60)}}秒
				</div>
			</div>
			<div v-else-if="activityStatus === 'Active'" class="text-xl p-2 m-2">
				<div class="text-xl p-2 m-2">
					quiz3写完了，现在已经开启。
				</div>
				<div class="text-xl p-2 m-2">
					活动已经开始啦~<br/>
					距离活动结束还有
					{{Math.floor(Math.floor((end - now) / 1000) / (3600 * 24))}}天
					{{Math.floor(Math.floor((end - now) / 1000) % (3600 * 24) / 3600)}}小时
					{{Math.floor(Math.floor((end - now) / 1000) % 3600 / 60)}}分钟
					{{Math.floor(Math.floor((end - now) / 1000) % 60)}}秒
				</div>
				<hr/>
				<div class="text-lg p-2">
					<b>*特别注明：此文中的一切内容为虚构，仅供剧情展开需要。其与一切实际生活中的个人、实体、组织、公司无关。</b><br/>
					2024年2月8日，周四，距离寒假结束还有10天。<br/>
					现在是08:24，不早了。<br/>
					此时此刻，你仍然在床上贪婪地享受着这为数不多的假期的早晨。<br/>
					“啵”，手机的通知不耐烦地把你从床上拍醒。<br/>
					“啊...有消息...?我记得我把所有不必要的通知都关了啊...”你喃喃道，一边伸懒腰，一边摸索着你那刷了MIUI14开发版养老搭载第二代骁龙8移动平台的小米13数字5G移动电话机。<br/>
					“微信？我回家就跟死了一样，怎么可能会有同学给我发消息...？”你非常纳闷。<br/>
					你用手按了下屏幕，点了点那个绿色软件，看见了人站立于地球卫星图上的宏伟场面。<br/>
					“哦，原来是太上皇啊。”你不情愿地嘟囔着，点进了对话。<br/>
					你亲爱的母亲给你发了一个PDF文件。<br/>
					"吃网杯贰拾壹食姬嘤郁欣喜鸡书妲塞.pdf"，你盯着眼前的一长串文件名，顿时傻了。<br/>
					于是你无奈的打开了那个文件。<br/>
					"习近平总书记曾殷切寄语“给孩子们的梦想插上科技的翅膀，让未来祖国的科技天地群英荟萃，让未来科学的浩瀚星空群星闪耀”...经教育部批准，在窗子懒裙卒，吃网工作室，射线和吃货等单位和个人的指导下，背歪服树您播歪果鱼学校(即"我们")作为主办方，举办本次吃网杯贰拾壹食姬嘤郁欣喜鸡书妲塞...本届大赛分初赛、复赛和决赛三个赛程...为充分调动参赛积极性，我们将在各个阶段将依据比赛成绩分别被授予参赛者不同等次的电子证书和红包奖励。2月8日前，参赛者可登录官方网站在线报名。官方网站：...(需在电脑浏览器下打开)..."它如是写道。<br/>
					你叹了一口气，打开了你那安装了创死人不偿命的ArchLinux系统和Gnome桌面环境的古早笔记本电脑。<br/>
					在短暂的等待后，你开启了Google Chrome Dev，输入网址，填写信息，点击报名，结果...<br/>
					你能找出报名页的端倪，成功提交你的信息吗？<br/>
					<a :href="url" target="_blank" class="text-cyan-700 hover:text-cyan-200 transition">点我打开报名页</a>&nbsp;<a href="/static/关于举办吃网杯贰拾壹食姬嘤郁欣喜鸡书妲塞的通知.pdf" target="_blank" class="text-cyan-700 hover:text-cyan-200 transition">点我打开pdf文件</a>
				</div>
				<hr/>
				<h2 class="font-bold text-xl p-2">小提示：</h2>
				<div class="text-lg p-2">2.10 22:00提示：quiz1的第一题可以去微信里面找一找</div>
			</div>
			<div v-else-if="activityStatus === 'Ended'" class="text-xl p-2 m-2">
				<div class="text-xl p-2 m-2">
					活动结束啦~期待2026年的红包挑战吧~
				</div>
				<div class="text-xl p-2 m-2">
					题解尚未发布
				</div>
			</div>
			<hr/>
			<h2 class="font-bold text-xl p-2">Q&As</h2>
			<div class="text-xl pl-2">
				1. 本次红包活动的红包是支付宝的口令红包，你可以打开支付宝，搜索红包，输入口令来领取红包<br/>
				本次活动的口令形式为 'ENITC'加上6个随机字母。<br/>
				获取口令后，请对口令<a href="https://lab.chihuo2104.dev/crysh" target="_blank" class="text-cyan-700 hover:text-cyan-200 transition">进行sha1加密</a>并取前8位数字才为支付宝红包中输入的口令<br/>
				e.g. 'ENITCh5oHu0' -> sha1('ENITCh5oHu0') -> 492139fe5f9cea24114ebdf35fba54ff8921674e -> (取前8位) 492139fe -> 输入支付宝 -> 获取红包
			</div>
			<div class="text-xl pl-2">
				2. 在做题过程中你可能会使用到手机无法使用的工具，使用电脑可以获得更愉快的玩耍体验。如果你的浏览器安装了ADBlockPlus,uBlockOrigin等广告拦截插件，请在此网站关闭它们以免误杀服务的正常上报动作。
			</div>
			<div class="text-xl pl-2">
				3. 在领取到红包后，请不要把红包码告诉别人。如果你们是组团做题的，不要贪心多领哦~
			</div>
			<div class="text-xl pl-2">
				4. 如果今年的题目解题过于困难或未达成某一题目解题成功的目标的话，会在小提示栏提示各位~敬请关注~<br/>
				定期检查投放时间：2024.2.10 22:00 2024.2.11 8:00 10:00 14:00 16:00 18:00，上下浮动不超过5分钟，可以提前蹲点（
			</div>
			<div class="text-xl pl-2">
				5. 今年新增新手友好助手。第一道题目的新手提示：熟悉JavaScript基本语法，电脑端浏览器按下Ctrl+Shift+I或者是F12打开Devtool可以解决很多问题！如果不会使用建议善用搜索引擎。
			</div>
			<div class="text-xl pl-2">
				6. 如果你真的看到你在做的题目没有思路了 推荐阅读：https://blog.chihuo2104.dev/posts/ustc-hackergame2023-writeups
			</div>
			<div class="text-xl pl-2">
				7. 由于去年的时候有通过奇技淫巧而非正规手段获得答案的情况，本年度的问答页管理将极为严格。请各位在做题时不要切换浏览器(包括但不限于更新浏览器，切换浏览器品牌等)，不要更换自己的设备，不要对本站开启代理服务（很容易误封），不要把自己的做题链接发送给他人，否则会被识别为滥用而被临时（表现为“啊哦，你被大风机关盯上了！[Errno -1]；您的网络环境存在风险，请稍后再试。”）或永久封禁（表现为“啊哦，你被大风机关制裁了！[Errno -2]；您的网络环境存在风险，请稍后再试。”）。（出现500错误同等原因。）
			</div>
			<div class="text-xl pl-2">
				8. 如果做题页面出现[Errno -1]和[Errno -2]但你并没有干过前一条提及过的情况，或者是对题目本身的bug等问题有疑惑，请联系组织者。<br/>
				组织者邮箱：i@chihuo2104.dev<br/>组织者tg: @moechihuobot(如果你熟悉组织者可以直接PM)
			</div>
			<div class="font-bold text-xl p-2">红包设置</div>
			<div class="text-xl pl-2">
				quiz0 48红包 20.24 CNY 拼手气<br/>
				quiz1 24红包 20.24 CNY 拼手气<br/>
				quiz2 12红包 20.24 CNY 拼手气<br/>
				quiz3 6红包 20.24 CNY 拼手气<br/>
				还有几个隐藏红包，等着你们发现（x<br/>
			</div>
			<hr/>
			<p class="text-md p-2">chihuo2104 powered&copy;2024. </p>
		</div>
	</div>
</template>
<style>
body {
	font-family: "MiSans", "Noto Sans SC", sans-serif;
}
</style>