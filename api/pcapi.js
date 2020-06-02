let express = require("express")
let app = express()

/**
 * 获取轮播图数据
 */
app.get("/api/index/banner", (req, res) => {
    let banner  = require("./data/index/banner.json")
    res.json({
        "code": 200,
        "msg": "操作成功",
        "data": {
            ...banner
        }
    })
})

/**
 * 获取推荐商品数据
 */
app.get("/api/index/group", (req, res) => {
    let group  = require("./data/index/group.json")
    res.json({
        "code": 200,
        "msg": "操作成功",
        "data": {
            ...group
        }
    })
})

app.listen(3000, () => {
    console.log("serve is runing 3000")
})