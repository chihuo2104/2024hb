package routes

import (
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

			break
		default:
			ctx.Status(404)
		}
	} else {
		ctx.Status(403)
	}
}
