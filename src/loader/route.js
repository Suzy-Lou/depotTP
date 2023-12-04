const { Router } = require("express")
const ctrl = require("../api/controller.js")

exports.getRouter = function () {
    const router = Router()
    router.post('/tpnote/v1/login',ctrl.login)
    router.post('/tpnote/v1/newUser',ctrl.newUser)
    router.get('/tpnote/v1/searchAddress',ctrl.getAddress)

    return router
}