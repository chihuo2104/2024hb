package routes

import "github.com/gin-gonic/gin"

func HandleIndexRoute(ctx *gin.Context) {
	ctx.JSON(200, gin.H{
		"status": "200",
	})
}
