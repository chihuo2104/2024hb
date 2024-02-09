// huohuorb反向代理页
import config from "~/scripts/config";
import {GenerateToken} from "~/scripts/token";

export default defineEventHandler(async (event) => {
	const mod = getQuery(event).module
	let query
	switch (mod) {
		case 'userinfo':
			const head = getHeaders(event)
			return JSON.stringify({
				code: 200,
				data: {
					"ua": head["user-agent"],
					"ip": head["x-forwarded-for"]
				}
			})
		case 'challenge1-commit':
			query = getQuery(event)
			if (query.ans1 !== undefined && query.ans2 !== undefined && query.ans3 !== undefined && query.ans4 !== undefined && query.ans5 !== undefined && query.cid !== undefined) {
				const  t = Math.floor(new Date().getTime() / 1000)
				const respt = await fetch(config.huohuorb + "?module=challenge1-commit&t=" + t + "&cid=" + query.cid + "&tk=" + GenerateToken(config.token, t) + "&ans1=" + query.ans1 + "&ans2=" + query.ans2 + "&ans3=" + query.ans3 + "&ans4=" + encodeURIComponent(query.ans4) + "&ans5=" + query.ans5, {method:"POST"})
				const rest = await respt.json()
				if (rest.code === 200) {
					return JSON.stringify({
						code: 200,
						data: rest.data,
						score: rest.score
					})
				} else {
					return JSON.stringify({
						code: 403,
						data: "",
						score: -1
					})
				}
			} else {
				return JSON.stringify({
					code: 400,
					data: "",
					score: ""
				})
			}
		case 'challenge2-commit':
			query = getQuery(event)
			if (query.ans !== undefined && query.cid !== undefined) {
				const  t = Math.floor(new Date().getTime() / 1000)
				const respt = await fetch(config.huohuorb + "?module=challenge2-commit&t=" + t + "&cid=" + query.cid + "&tk=" + GenerateToken(config.token, t) + "&ans=" + encodeURIComponent(query.ans), {method:"POST"})
				const rest = await respt.json()
				if (rest.code === 200) {
					return JSON.stringify({
						code: 200,
						data: rest.data,
						score: rest.score
					})
				} else {
					return JSON.stringify({
						code: 403,
						data: "",
						score: -1
					})
				}
			} else {
				return JSON.stringify({
					code: 400,
					data: "",
					score: ""
				})
			}
		case 'challenge-in':
			query = getQuery(event)
			if (query.id !== undefined && query.cid !== undefined) {
				const  t = Math.floor(new Date().getTime() / 1000)
				const respt = await fetch(config.huohuorb + "?module=challenge" + query.id + "-in&t=" + t + "&cid=" + query.cid + "&tk=" + GenerateToken(config.token, t), {method:"POST"})
				const rest = await respt.json()
				if (rest.code === 200) {
					return JSON.stringify({
						code: 200
					})
				} else {
					return JSON.stringify({
						code: 403
					})
				}
			} else {
				return JSON.stringify({
					code: 400
				})
			}
		case 'challenge0-signup':
			query = getQuery(event)
			if (query.token !== undefined && query.username !== undefined) {
				const  t = Math.floor(new Date().getTime() / 1000)
				const respt = await fetch(config.huohuorb + "?module=challenge0-signup&t=" + t + "&user=" + query.username + "&cid=" + query.token + "&tk=" + GenerateToken(config.token, t), {method:"POST"})
				const rest = await respt.json()
				if (rest.code === 200) {
					return JSON.stringify({
						code: 200
					})
				} else {
					return JSON.stringify({
						code: 403
					})
				}
			} else {
				return JSON.stringify({
					code: 400
				})
			}
		case 'gettime':
			query = getQuery(event)
			if (query.c !== undefined && query.cid !== undefined) {
				const  t = Math.floor(new Date().getTime() / 1000)
				const respt = await fetch(config.huohuorb + "?module=gettime&t=" + t + "&challenge=" + query.c + "&cid=" + query.cid + "&tk=" + GenerateToken(config.token, t), {method:"POST"})
				const rest = await respt.json()
				if (rest.code === 200) {
					return JSON.stringify({
						code: 200,
						time: rest.time
					})
				} else {
					return JSON.stringify({
						code: 403,
						time: -1
					})
				}
			} else {
				return JSON.stringify({
					code: 400
				})
			}
		default:
			setResponseStatus(event, 403)
	}
})