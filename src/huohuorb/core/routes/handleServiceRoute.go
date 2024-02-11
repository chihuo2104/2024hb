package routes

import (
	"chihuo2104.dev/huohuorb/config"
	"chihuo2104.dev/huohuorb/core/handler"
	"chihuo2104.dev/huohuorb/core/utils"
	"encoding/base64"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/url"
	"strconv"
)

func HandleServiceRoute(ctx *gin.Context) {
	token, _ := ctx.GetQuery("tk")
	t, _ := ctx.GetQuery("t")
	cid, _ := ctx.GetQuery("cid")
	fmt.Println(token, t)
	if utils.CheckConnectionToken(t, token) {
		module, _ := ctx.GetQuery("module")
		switch module {
		//第1个公开红包
		case "challenge0-signup":
			username, _ := ctx.GetQuery("user")
			if handler.Challenge0Signup(cid, username) {
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"data":   "[ENITCB19sF2]",
				})
			} else {
				ctx.JSON(403, gin.H{
					"code":   403,
					"status": "failed",
				})
			}
			break
		case "challenge0-in":
			handler.Challenge0In(cid)
			ctx.JSON(200, gin.H{
				"code":   200,
				"status": "success",
			})
			break
		case "challenge1-in":
			if handler.Challenge1In(cid) {
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
				})
			} else {
				ctx.JSON(403, gin.H{
					"code":   403,
					"status": "failed",
				})
			}
			break
		case "challenge1-commit":
			ans1, _ := ctx.GetQuery("ans1")
			ans2, _ := ctx.GetQuery("ans2")
			ans3, _ := ctx.GetQuery("ans3")
			ans4, _ := ctx.GetQuery("ans4")
			ans5, _ := ctx.GetQuery("ans5")
			score := 0
			if ans1 == "逐梦" {
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
			fmt.Println(ans4)
			if ans5 == "20230222" {
				score += 20
			}
			if score == 100 {
				// 爱学习的好赛文 隐藏红包
				// 第二个显示红包
				handler.Challenge1Commit(cid, strconv.Itoa(score))
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"data":   "[ENITC93dJ90] [ENITCAXXhsw]",
					"score":  score,
				})
				return
			}
			if score >= 80 {
				handler.Challenge1Commit(cid, strconv.Itoa(score))
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"data":   "[ENITC93dJ90]",
					"score":  score,
				})
				return
			}
			if score >= 60 {
				handler.Challenge1Commit(cid, strconv.Itoa(score))
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"data":   "[No Code]",
					"score":  score,
				})
			} else {
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "failed",
					"data":   "[No Code]",
					"score":  score,
				})
			}
			break
		case "challenge2-in":
			if handler.Challenge2In(cid) {
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
				})
			} else {
				ctx.JSON(403, gin.H{
					"code":   403,
					"status": "failed",
				})
			}
			break
		case "challenge2-commit":
			ans, _ := ctx.GetQuery("ans")
			respo, _ := utils.GetContent(config.PythonBack + "?input=" + url.QueryEscape(ans))
			num, _ := strconv.Atoi(respo)
			if num >= 80 {
				if handler.Challenge2Commit(cid, respo) {
					ctx.JSON(200, gin.H{
						"code":   200,
						"status": "success",
						"data":   "[ENITCF320Dk]",
						"score":  num,
					})
				} else {
					ctx.JSON(403, gin.H{
						"code":   403,
						"status": "failed",
					})
				}
				return
			}
			if num >= 60 {
				if handler.Challenge2Commit(cid, respo) {
					ctx.JSON(200, gin.H{
						"code":   200,
						"status": "success",
						"data":   "no code",
						"score":  num,
					})
				} else {
					ctx.JSON(403, gin.H{
						"code":   403,
						"status": "failed",
					})
				}
			} else {
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"data":   "no code",
					"score":  num,
				})
			}
			break
		case "challenge3-in":
			if handler.Challenge3In(cid) {
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
				})
			} else {
				ctx.JSON(403, gin.H{
					"code":   403,
					"status": "failed",
				})
			}
			break
		case "challenge3-comment":
			comment, _ := ctx.GetQuery("comment")
			if handler.Challenge3Comment(cid, comment) {
				utils.GetContent(config.PythonBotBack + "?input=" + base64.StdEncoding.EncodeToString([]byte("https://rb.chihuo2104.dev/rb-challenge/"+config.MockVisitToken+"/quiz3-mockvisit?cid="+cid)))
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
				})
			} else {
				ctx.JSON(403, gin.H{
					"code":   403,
					"status": "failed",
				})
			}
			break
		case "challenge3-approve":
			if handler.Challenge3Approve(cid) {
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"data":   "[ENITCJ2dh89]",
				})
			} else {
				ctx.JSON(403, gin.H{
					"code":   403,
					"status": "failed",
					"data":   "[No code]",
				})
			}
			break
		case "spendtime":
			res := handler.CheckSpentTime(cid, "challenge0-in", "challenge0-signup")
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
			res := handler.CheckTime(cid, challenge)
			if res != -1 {
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"time":   res,
				})
			} else {
				ctx.JSON(403, gin.H{
					"code":   403,
					"status": "failed",
				})
			}
		case "getnote":
			challenge, _ := ctx.GetQuery("challenge")
			res := handler.CheckNote(cid, challenge)
			if res != "" {
				ctx.JSON(200, gin.H{
					"code":   200,
					"status": "success",
					"note":   res,
				})
			} else {
				ctx.JSON(403, gin.H{
					"code":   403,
					"status": "failed",
				})
			}
		default:
			ctx.Status(404)
		}
	} else {
		ctx.Status(403)
	}
}
