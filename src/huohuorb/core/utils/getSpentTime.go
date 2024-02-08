package utils

import (
	"chihuo2104.dev/huohuorb/config"
	"chihuo2104.dev/huohuorb/core/db"
	"log"
)

type a struct {
	Cid    string
	Action string
	Time   int
	Note   string
	Id     int
}

func GetSpentTime(cid string, startreqid string, endreqid string) int {
	start := a{}
	end := a{}
	conn := db.New(config.DB)
	// requires challenge0-in otherwise it is not authorized.
	resp := conn.Query("SELECT * FROM `clientids` WHERE `cid`=\"" + cid + "\" AND `action`=\"" + startreqid + "\"")
	if resp.Next() {
		resp.Scan(&start.Cid, &start.Action, &start.Time, &start.Note, &start.Id)
		err := resp.Close()
		if err != nil {
			log.Fatalln(err.Error())
		}
		resp := conn.Query("SELECT * FROM `clientids` WHERE `cid`=\"" + cid + "\" AND `action`=\"" + endreqid + "\"")
		if resp.Next() {
			resp.Scan(&end.Cid, &end.Action, &end.Time, &end.Note, &end.Id)
			err := resp.Close()
			if err != nil {
				log.Fatalln(err.Error())
			}
			return end.Time - start.Time
		}
	} else {
		conn.Close()
		err := resp.Close()
		if err != nil {
			log.Fatalln(err.Error())
		}
		return -1
	}
	return -1
}
