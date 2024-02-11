package handler

import (
	"chihuo2104.dev/huohuorb/core/db"
	"chihuo2104.dev/huohuorb/core/utils"
	"strconv"
	"time"
)

func Challenge3Comment(cid string, comment string) bool {
	conn := db.New()
	time := int(time.Now().Unix())
	if utils.CheckRequirements(cid, "challenge3-comment") {
		conn.Exec("UPDATE `clientids` SET `note` = '" + comment + "' WHERE `cid` = '" + cid + "' AND `action`='challenge3-comment'")
		return true
	}
	if utils.CheckRequirements(cid, "challenge3-in") {
		// requires challenge0-in otherwise it is not authorized.
		conn.Exec("INSERT INTO `clientids`  VALUES (\"" + cid + "\",\"challenge3-comment\"," + strconv.Itoa(time) + ",\"" + comment + "\", NULL)")
		conn.Close()
		return true
	} else {
		return false
	}
}
