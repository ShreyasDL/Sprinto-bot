const express = require('express')

const policyController = require('../controllers/policy-controller')
const router = express.Router()

router.get('',
    policyController.getPolicies
)

module.exports = router