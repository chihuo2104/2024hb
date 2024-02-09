cyno clientid计算方式

sha1('cip:' + clientip + ';cua:' + useragent)

huohuorb后台验证方式

sha1('tk:' + token + ';t:' + time(unixtime in seconds))