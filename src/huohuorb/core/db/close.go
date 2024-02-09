package db

// 关闭连接
func (ctx *dataDBinstance) Close() {
	ctx.handler.Close()
}
