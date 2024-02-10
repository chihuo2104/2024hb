package handler

import (
	"chihuo2104.dev/huohuorb/core/db"
	"chihuo2104.dev/huohuorb/core/utils"
	"strconv"
	"time"
)

func Challenge2Commit(cid string, score string) bool {
	conn := db.New()
	time := int(time.Now().Unix())
	if utils.CheckRequirements(cid, "challenge2-commit") {
		return true
	}
	if utils.CheckRequirements(cid, "challenge2-in") {
		// requires challenge0-in otherwise it is not authorized.
		conn.Exec("INSERT INTO `clientids`  VALUES (\"" + cid + "\",\"challenge1-commit\"," + strconv.Itoa(time) + ",\"" + score + "\", NULL)")
		conn.Close()
		return true
	} else {
		return false
	}
}
