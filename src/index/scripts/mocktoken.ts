import sha1 from 'sha1'
function GenerateMockToken (mtk:string ,cid:string, t:number) :string {
	const t2 = t + ''
	return sha1('tk:' + mtk + ';t:' + t2 + ';cid:' + cid)
}

export { GenerateMockToken }