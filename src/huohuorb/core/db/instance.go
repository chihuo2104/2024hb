package db

import "database/sql"

type dataDBinstance struct {
	handler *sql.DB
}
