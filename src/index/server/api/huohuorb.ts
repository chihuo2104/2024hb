// huohuorb反向代理页
export default defineEventHandler((event) => {
	const mod = getQuery(event).module
	switch (mod) {
		case 'userinfo':
			const head = getHeaders(event)
			return JSON.stringify({
				code: 200,
				data: head
			})
		default:
			setResponseStatus(event, 403)
	}
})