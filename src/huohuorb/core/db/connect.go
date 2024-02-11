package db

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

// production

// dev
func conf2url() string {
	return "root:114514@tcp(localhost:3306)/huohuorb"
}

// 连接mysql
func New() dataDBinstance {
	instance, err := sql.Open("mysql", conf2url())
	if err != nil {
		panic(err)
	}
	return dataDBinstance{
		handler: instance,
	}
}
