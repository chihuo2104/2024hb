package routes

import (
	"chihuo2104.dev/huohuorb/core/handler"
	"chihuo2104.dev/huohuorb/core/utils"
	"fmt"
	"github.com/gin-gonic/gin"
)

func HandleServiceRoute(ctx *gin.Context) {
	token, _ := ctx.GetQuery("tk")
	t, _ := ctx.GetQuery("t")
	fmt.Println(token, t)

	if utils.CheckConnectionToken(t, token) {
		module, _ := ctx.GetQuery("module")
		switch module {
		case "challenge0-signup":
			if handler.Challenge0Signup(token) {
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"data":   "[the first code]",
				})
			} else {
				ctx.JSON(403, gin.H{
					"code":   403,
					"status": "failed",
				})
			}
			break
		case "challenge0-in":
			handler.Challenge0In(token)
			ctx.JSON(200, gin.H{
				"code":   200,
				"status": "success",
			})
			break
		default:
			ctx.Status(404)
		}
	} else {
		ctx.Status(403)
	}
}
