package utils

import (
	"chihuo2104.dev/huohuorb/core/db"
	"log"
)

func GetNote(cid string, reqid string) string {
	start := a{}
	conn := db.New()
	// requires challenge0-in otherwise it is not authorized.
	resp := conn.Query("SELECT * FROM `clientids` WHERE `cid`=\"" + cid + "\" AND `action`=\"" + reqid + "\"")
	if resp.Next() {
		resp.Scan(&start.Cid, &start.Action, &start.Time, &start.Note, &start.Id)
		err := resp.Close()
		conn.Close()
		if err != nil {
			log.Fatalln(err.Error())
		}
		return start.Note
	} else {
		conn.Close()
		err := resp.Close()
		if err != nil {
			log.Fatalln(err.Error())
		}
		return ""
	}
	return ""
}
