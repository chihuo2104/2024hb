package handler

import "chihuo2104.dev/huohuorb/core/utils"

func CheckSpentTime(cid string, challenges string, challengee string) int {
	if utils.CheckRequirements(cid, challenges) && utils.CheckRequirements(cid, challengee) {
		return utils.GetSpentTime(cid, challenges, challengee)
	} else {
		return -1
	}
}
