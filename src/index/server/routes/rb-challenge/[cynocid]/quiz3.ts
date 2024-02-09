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
    const resp = `
    `
    return resp
})