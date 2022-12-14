const express = require('express')

const customerController = require('../controllers/customer-controller')

const router = express.Router()

router.post('/get_approval', customerController.getApprovals)

module.exports = router