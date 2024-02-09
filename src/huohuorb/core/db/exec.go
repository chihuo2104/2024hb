package db

import "database/sql"

func (db *dataDBinstance) Exec(sql string) sql.Result {
	result, err := db.handler.Exec(sql)
	if err != nil {
		panic(err)
	}
	return result
}
