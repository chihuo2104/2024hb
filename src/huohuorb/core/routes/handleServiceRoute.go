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
			username, _ := ctx.GetQuery("user")
			if handler.Challenge0Signup(token, username) {
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
		case "challenge1-in":
			handler.Challenge1In(token)
			ctx.JSON(200, gin.H{
				"code":   200,
				"status": "success",
			})
			break
		case "challenge1-commit":
			ans1, _ := ctx.GetQuery("ans1")
			ans2, _ := ctx.GetQuery("ans2")
			ans3, _ := ctx.GetQuery("ans3")
			ans4, _ := ctx.GetQuery("ans4")
			ans5, _ := ctx.GetQuery("ans5")
			score := 0
			if ans1 == "启航" {
				score += 20
			}
			if ans2 == "java" {
				score += 20
			}
			if ans3 == "受剪切" {
				score += 20
			}
			if ans4 == "que[tail]=que[head]+que[head+1]" {
				score += 20
			}
			if ans5 == "20230202" {
				score += 20
			}
			if score == 100 {
				handler.Challenge1Commit(token)
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"data":   "[Code1] [Code2]",
				})
			}
			if score >= 80 {
				handler.Challenge1Commit(token)
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"data":   "[Code1]",
				})
			}
			if score >= 60 {
				handler.Challenge1Commit(token)
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"data":   "[No Code]",
				})
			}
			break
		case "spendtime":
			res := handler.CheckSpentTime(token, "challenge0-in", "challenge0-signup")
			if res != -1 {
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"time":   res,
				})
			} else {
				ctx.Status(403)
			}
		case "gettime":
			challenge, _ := ctx.GetQuery("challenge")
			res := handler.CheckTime(token, challenge)
			if res != -1 {
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"time":   res,
				})
			} else {
				ctx.Status(403)
			}
		default:
			ctx.Status(404)
		}
	} else {
		ctx.Status(403)
	}
}
