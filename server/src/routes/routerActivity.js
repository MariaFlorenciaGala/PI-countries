const { Router } = require('express')
const router = Router();

const {getAllActivitiesHandler , postActivityHandler } = require('../handlers/activitiesHandler')

router.get('/activities',getAllActivitiesHandler)
router.post('/activities', postActivityHandler)

module.exports = router;
