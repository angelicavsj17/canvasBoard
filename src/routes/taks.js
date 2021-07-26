const { Router } = require('express')
const router= Router()
const taksController =require('../controllers/tasks.controller')

router.get('/',        taksController.getTaks)
router.get('/:id',     taksController.getTaksById)
router.post('/',       taksController.createTak)
router.put('/:id',     taksController.updateTak)
router.delete('/:id',  taksController.deleteTaksById)


