package handler

import (
	"chihuo2104.dev/huohuorb/core/db"
	"chihuo2104.dev/huohuorb/core/utils"
	"strconv"
	"time"
)

func Challenge0Signup(cid string, username string) bool {
	conn := db.New()
	time := int(time.Now().Unix())
	if utils.CheckRequirements(cid, "challenge0-signup") {
		return true
	}
	if utils.CheckRequirements(cid, "challenge0-in") {
		// requires challenge0-in otherwise it is not authorized.
		conn.Exec("INSERT INTO `clientids`  VALUES (\"" + cid + "\",\"challenge0-signup\"," + strconv.Itoa(time) + ",\"" + username + "\", NULL)")
		conn.Close()
		return true
	} else {
		return false
	}
}
