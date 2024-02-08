package db

import (
	"database/sql"
	"log"
)

func (db *HuohuoDB) Query(sql string) *sql.Rows {
	rows, err := db.instance.Query(sql)
	if err != nil {
		log.Fatal(err)
	}
	return rows
}
