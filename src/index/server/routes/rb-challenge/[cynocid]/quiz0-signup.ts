// 静态文件 HTML 页
export default defineEventHandler((event) => {
    const cynocid = getRouterParam(event, 'cynocid')

    return `cynocid: ${cynocid}!`
})