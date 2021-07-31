const { Router } = require('express')
const router= Router()
const taksController =require('../controllers/tasks.controller')
const authJwt =require('../middlewares/verifyToken')

router.get('/',        authJwt.verifyTokenUser,   taksController.getTaks)
router.get('/:id',     authJwt.verifyTokenUser,   taksController.getTaksById)
router.post('/',       authJwt.verifyTokenUser,   taksController.createTak)
router.put('/:id',     authJwt.verifyTokenUser,   taksController.updateTakById)
router.delete('/:id',  authJwt.verifyTokenUser,   taksController.deleteTaksById)

module.exports = router


