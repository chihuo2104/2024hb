package routes

import "github.com/gin-gonic/gin"

func HandleIndexRoute(ctx *gin.Context) {
	ctx.Status(403)
}
