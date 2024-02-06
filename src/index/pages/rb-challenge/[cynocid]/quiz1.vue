<script setup>
useHead({
	title: '吃网杯贰拾壹食姬嘤郁欣喜鸡书妲塞初赛答题平台'
})
</script>
<template>
	<div class="bg-gray-300 flex place-items-center justify-center">
		<div id="container" class="container max-w-5xl shadow-xl m-10 p-5 backdrop-blur-lg">
			<h1 class="font-bold text-3xl p-2">前情提要</h1>
			<div class="text-lg p-2">
				经过重重较量，你进入了初赛。<br/>
				“初赛采用线上答题的方式。我们将会从题库中抽取5道题目来让参赛者进行作答，限时60秒，只有一次机会。初赛线上答题60分及以上即可晋级复赛。80分及以上可获取红包。”文件内如是写道。<br/>
				“草！”你惊叹道，“你这比小米HyperOS解锁还鸡贼啊...”<br/>
				这时候，你就不得不惊慌失措了。<br/>
				突然，你的大脑里突然出现了一个朦胧的幻影。<br/>
				“白嫖之神！我还有白嫖之神这一招还没有用！”<br/>
				于是你信心十足地大喊：“白嫖之神，我这里有免费的RTX4090领，快发动你的白嫖之力吧！”<br/>
				天空中雷电一闪。你感动了白嫖之神，祂决定给你无限时和无限次提交机会。
			</div>
			<hr/>
			<h1 class="font-bold text-3xl p-2">吃网杯贰拾壹食姬嘤郁欣喜鸡书妲塞初赛答题平台</h1>
			<div class="text-xl p-2 m-2">
				Q1: 在“2023宁外这一年”汉字艺术展中，宁波外国语学校S2505班的司翰诺同学使用了什么词语来总结宁外这一年？(20分)<br/>
				<input type="text" placeholder="输入答案(提示：2个汉字)" class="m-2 p-1 w-full"/>
			</div>
			<div class="text-xl p-2 m-2">
				Q2: 在2023年10月左右，Archlinux的什么编程语言相关包升级使得pacman本地产生冲突必须手动处理后才可以升级？(20分)<br/>
				<input type="text" placeholder="输入答案(提示：1个编程语言，大小写不敏感)" class="m-2 p-1 w-full"/>
			</div>
			<div class="text-xl p-2 m-2">
				Q3: 如图所示的是一个连杆机构，在力Fd和Fr的作用下处于平衡状态，此时推杆1、推杆2水平，摆杆处于垂直位置，请问在这个连杆中，销轴的受力形式是什么？(20分)<br/>
				<img src="@/public/static/quiz1-3.jpg" class="w-1/2"/>
				<input type="text" placeholder="输入答案(提示：3个汉字，“受”开头)" class="m-2 p-1 w-full"/>
			</div>
			<div class="text-xl p-2 m-2">
				Q4: 如果用数据结构的队列构建杨辉三角，编写输出前n行杨辉三角的python程序代码如下，请在程序划线处填入合适的代码。(20分)<br/>
				<code>
					n = input()<br/>
					que = []<br/>
					head = tail = 0<br/>
					que[tail] = 1<br/>
					print(que[tail])<br/>
					tail += 1<br/>
					for i in range(2, n+1):<br/>
					&nbsp;&nbsp;que[tail] = 1<br/>
					&nbsp;&nbsp;print(que[tail], end=“”)<br/>
					&nbsp;&nbsp;tail += 1<br/>
					&nbsp;&nbsp;for j in range(i-2):<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;que[tail] = (你需要填入的地方)<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;print(que[tail], end=“”)<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;tail += 1<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;head += 1<br/>
					&nbsp;&nbsp;que[tail] = 1<br/>
					&nbsp;&nbsp;print(que[tail], end=“”)<br/>
					&nbsp;&nbsp;tail += 1<br/>
					&nbsp;&nbsp;head += 1
				</code>
				<input type="text" placeholder="输入答案(提示：一段python代码，空格已忽略)" class="m-2 p-1 w-full"/>
			</div>
			<div class="text-xl p-2 m-2">
				Q5: 浙江省八一学校是浙江省军民共建的第一所学校，那么请问浙江省八一学校在什么时候成立？(20分)<br/>
				<input type="text" placeholder="输入答案(提示：日期格式为YYYYMMDD，如11450514为1145年5月14日)" class="m-2 p-1 w-full"/>
			</div>
			<button class="text-2xl hover:shadow-2xl shadow-md bg-cyan-200 border-r-2 p-2  transition-all m-2" onclick="signup()">提交</button>
		</div>
	</div>
</template>
<style>
body {
	font-family: "MiSans", "Noto Sans SC", sans-serif;
}
</style>