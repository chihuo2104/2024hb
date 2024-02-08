package db

func (db *HuohuoDB) Close() {
	db.instance.Close()
}
