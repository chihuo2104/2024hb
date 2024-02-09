package handler

import (
	"chihuo2104.dev/huohuorb/core/db"
	"strconv"
	"time"
)

func Challenge0In(cid string) bool {
	conn := db.New()
	time := int(time.Now().Unix())
	// requires challenge0-in otherwise it is not authorized.
	conn.Exec("INSERT INTO `clientids`  VALUES (\"" + cid + "\",\"challenge0-in\"," + strconv.Itoa(time) + ",\"checkin\",NULL)")
	conn.Close()
	return true
}
