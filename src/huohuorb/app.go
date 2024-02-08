package main

import (
	"chihuo2104.dev/huohuorb/core/routes"
	"github.com/gin-gonic/gin"
)

// Huohuorb designed for chi's redbag adventure v.e.r. 2024
// Powered by chihuo2104. All rights reserved (c)2018-2024

func main() {
	app := gin.Default()
	app.Use(gin.Logger())
	app.GET("/", routes.HandleIndexRoute)
	app.POST("/huohuorb", routes.HandleServiceRoute)
	app.Run(":8080")
}
