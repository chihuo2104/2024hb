package db

import "database/sql"

func (db *dataDBinstance) Query(sql string) *sql.Rows {
	result, err := db.handler.Query(sql)
	if err != nil {
		panic(err)
	}
	return result
}
