package utils

import (
	"chihuo2104.dev/huohuorb/config"
	"crypto/sha1"
	"encoding/hex"
	"io"
)

func CheckConnectionToken(time string, token string) bool {
	str := "tk:" + config.Token + ";t:" + time
	h := sha1.New()
	io.WriteString(h, str)
	sha1_hash := h.Sum(nil)
	//fmt.Println(str, hex.EncodeToString(sha1_hash))
	return hex.EncodeToString(sha1_hash) == token
}
