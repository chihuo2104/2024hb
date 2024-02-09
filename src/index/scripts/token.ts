import sha1 from 'sha1'
function GenerateToken (token:string, t:number) :string {
	const t2 = t + ''
	return sha1('tk:' + token + ';t:' + t2)
}

export { GenerateToken }