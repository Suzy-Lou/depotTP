const { Router } = require("express")
const ctrl_user = require("../api/controller_user.js")
const ctrl_address = require("../api/controller_address.js")
const ctrl_save = require("../api/controller_saveRequest.js")
const {isAuthentificated} = require("../auth/auth.js")

exports.getRouter = function () {
    const router = Router()
    router.post('/tpnote/v1/login',ctrl_user.login)
    router.post('/tpnote/v1/newUser',ctrl_user.newUser)
    router.get('/tpnote/v1/searchAddress',isAuthentificated,ctrl_address.getAddress)
    router.get('/tpnote/v1/searchLongLat',isAuthentificated,ctrl_address.getLongLat)
    router.get('/tpnote/v1/saveRequest',isAuthentificated,ctrl_save.saveRequest)

    return router
}