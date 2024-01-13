// 静态文件 HTML 页
export default defineEventHandler((event) => {
    const name = getRouterParam(event, 'name')

    return `Hello, ${name}!`
})