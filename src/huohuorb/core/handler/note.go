package handler

import "chihuo2104.dev/huohuorb/core/utils"

func CheckNote(cid string, challenge string) string {
	if utils.CheckRequirements(cid, challenge) {
		return utils.GetNote(cid, challenge)
	} else {
		return ""
	}
}
