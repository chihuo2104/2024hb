package handler

import (
	"chihuo2104.dev/huohuorb/config"
	"chihuo2104.dev/huohuorb/core/db"
	"chihuo2104.dev/huohuorb/core/utils"
	"encoding/base64"
	"strconv"
	"time"
)

func Challenge3Comment(cid string, comment string) bool {
	conn := db.New()
	time := int(time.Now().Unix())
	utils.GetContent(config.PythonBotBack + "?input=" + base64.StdEncoding.EncodeToString([]byte("https://rb.chihuo2104.dev/rb-challenge/"+config.MockVisitToken+"/quiz3-mockvisit?cid="+cid)))
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
