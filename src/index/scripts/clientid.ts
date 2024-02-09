import sha1 from 'sha1'

function generate (ua: string, ip: string) {
	return sha1('cip:' + ip + ';cua:' + ua)
}

export {
  generate
}