const express = require('express')
const router  = express.Router()
const skillsCtrl = require('../controllers/skills')

// This is at skills !important
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.newSkill)
router.get('/:id', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.deleteSkill)

module.exports = router
