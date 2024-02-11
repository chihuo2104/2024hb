package handler

import (
	"chihuo2104.dev/huohuorb/core/db"
	"chihuo2104.dev/huohuorb/core/utils"
	"strconv"
	"time"
)

func Challenge3In(cid string) bool {
	conn := db.New()
	time := int(time.Now().Unix())
	if utils.CheckRequirements(cid, "challenge3-in") {
		return true
	}
	if utils.CheckRequirements(cid, "challenge2-commit") {
		// requires challenge0-in otherwise it is not authorized.
		conn.Exec("INSERT INTO `clientids`  VALUES (\"" + cid + "\",\"challenge3-in\"," + strconv.Itoa(time) + ",\"checkin\",NULL)")
		conn.Close()
		return true
	} else {
		return false
	}
}
