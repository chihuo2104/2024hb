// 静态文件 HTML 页
import {generate} from "~/scripts/clientid";
import config from "~/scripts/config";
import {GenerateToken} from "~/scripts/token";

export default defineEventHandler(async (event) => {
    const head = getHeaders(event)
    const ua = head['user-agent'] || ''
    const ip = head["x-forwarded-for"] || ''
    const cynocid = getRouterParam(event, 'cynocid') || ''
    if (cynocid === '' || cynocid !== generate(ua, ip)) {
        setResponseHeader(event, "content-type", "text/html;charset=utf8")
        return `<img src="https://upload-bbs.mihoyo.com/upload/2022/10/19/02711c97bc7fa445d87655db1666e851_2779652806545815616.png"/><h1>啊哦，你被大风机关盯上了！[Errno -1]</h1>您的网络环境存在风险，请稍后再试。`
    }

    const  t = Math.floor(new Date().getTime() / 1000)
    const respt = await fetch(config.huohuorb + "?module=challenge0-in&t=" + t + "&cid=" + cynocid + "&tk=" + GenerateToken(config.token, t), {method:"POST"})
    const rest = await respt.json()
    const respt2 = await fetch(config.huohuorb + "?module=gettime&challenge=challenge2-commit&t=" + t + "&cid=" + cynocid + "&tk=" + GenerateToken(config.token, t), {method:"POST"})
    const rest2 = await respt2.json()

    if (rest.code !== 200 || rest2.code !== 200) {
        setResponseHeader(event, "content-type", "text/html;charset=utf8")
        return `<img src="https://upload-bbs.mihoyo.com/upload/2022/10/19/02711c97bc7fa445d87655db1666e851_2779652806545815616.png"/><h1>啊哦，你被大风机关盯上了！[Errno -1]</h1>您的网络环境存在风险，请稍后再试。`
    }

    // @ts-ignore
    const resp = `<!-- This HTML is served in server frontend -->
<!DOCTYPE HTML>
<html>
    <head>
        <title>妲塞爆鸣</title>
        <meta charset="utf8">
        <!--Develop used.-->
        <link rel="stylesheet" href="dist.css"/>
    </head>
    <body class="bg-gray-200 container max-w-2xl">
      <div class="bg-gray-300 flex place-items-center justify-center" v-if="show">
        <div id="container" class="container max-w-5xl shadow-xl m-10 p-5 backdrop-blur-lg">
          <h1 class="font-bold text-3xl p-2">前情提要</h1>
          <div class="text-lg p-2">
            在吃的帮助下，你成功进入了决赛。<br/>
            “决赛采用线上交流的方式。本期决赛，参赛者们需要使用我们自有的平台和决赛评委交流。决赛评委将会根据情况选择是否通过决赛。”文件内如是写道。<br/>
            因为你从来没有经历过如此大场面，你很紧张。<br/>
            “这时候得去找猫猫了！”你想道。<br/>
            你在业余无线电频段找到了猫猫并加上了好友。<br/>
            猫猫给你偷来了线上交流系统的源代码。<br/>
            当你再让猫猫给予教导的时候，猫猫说：“你问题有点多了 我要发那张提问收费价格表了”,你只好作罢。<br/>
            于是你拿着手上的线上交流系统源代码开始分析起来。
          </div>
          <hr/>
          <h1 class="font-bold text-3xl p-2">吃网杯贰拾壹食姬嘤郁欣喜鸡书妲塞复赛答题平台</h1>
          <div class="text-xl p-2 m-2">
            请输入你想对评委说的话：<br/>
            <textarea placeholder="这里输入你的想法" class="w-full h-1/2" id="saids">
          </div>
          <button class="text-2xl hover:shadow-2xl shadow-md bg-cyan-200 border-r-2 p-2  transition-all m-2" onclick="commit" id="commit">提交</button>
          <button class="text-2xl hover:shadow-2xl shadow-md bg-cyan-200 border-r-2 p-2  transition-all m-2" onclick="approve" id="approve">批准</button>
          <button class="text-2xl hover:shadow-2xl shadow-md bg-cyan-200 border-r-2 p-2  transition-all m-2" onclick="decline" id="decline">拒绝</button>
          <hr/>
          <div class="text-xl p-2 m-2" id="asaid">
            预览：<br/>
            <div id="saids2"></div>
          </div>
          <div class="text-xl p-2 m-2" id="usaid">
            用户申请内容：<br/>
            <div id="saids2"></div>
          </div>
          <script>
            // 判断用户权限
            const role = "user"
            if(role === "user") {
              document.getElementById("approve").style.display = "none"
              document.getElementById("decline").style.display = "none"
              document.getElementById("usaid").style.display = "none"
              document.getElementById("asaid").style.display = "block"
            }
            if(role === "admin") {
              document.getElementById("usaid").style.display = "block"
              document.getElementById("asaid").style.display = "none"
              document.getElementById("commit").style.display = "none"
            }
          </script>
        </div>
      </div>
    </body>
</html>
    `
    return resp
})