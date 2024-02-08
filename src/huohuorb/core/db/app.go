package db

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

type HuohuoDB struct {
	instance *sql.DB // SQLite Instance
}

func New(url string) HuohuoDB {
	db, err := sql.Open("sqlite3", url+"?cache=shared&mode=rwc")
	if err != nil {
		log.Fatal(err)
	}
	return HuohuoDB{
		instance: db,
	}
}
