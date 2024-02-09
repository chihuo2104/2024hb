package utils

import (
	"chihuo2104.dev/huohuorb/core/db"
)

func CheckRequirements(cid string, reqid string) bool {
	conn := db.New()
	// requires challenge0-in otherwise it is not authorized.
	resp := conn.Query("SELECT * FROM `clientids` WHERE `cid`=\"" + cid + "\" AND `action`=\"" + reqid + "\"")
	if resp.Next() {
		conn.Close()
		err := resp.Close()
		if err != nil {
			return false
		}
		return true
	} else {
		conn.Close()
		err := resp.Close()
		if err != nil {
			return false
		}
		return false
	}
}
