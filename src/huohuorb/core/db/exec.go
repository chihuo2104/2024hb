package db

import "database/sql"

func (db *HuohuoDB) Exec(sql string) sql.Result {
	resp, err := db.instance.Exec(sql)
	if err != nil {
		panic(err.Error())
	}
	return resp
}
