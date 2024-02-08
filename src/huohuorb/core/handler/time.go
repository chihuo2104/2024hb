package handler

import "chihuo2104.dev/huohuorb/core/utils"

func CheckTime(cid string, challenge string) int {
	if utils.CheckRequirements(cid, challenge) {
		return utils.GetTime(cid, challenge)
	} else {
		return -1
	}
}
