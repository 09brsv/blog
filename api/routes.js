const { Router } = require("express")
const { getPresentation, getCampaign, getServices, getMarketing, getPlans } = require("./controllers")

const router = Router()

router.get('/api/presentations', getPresentation)

router.get('/api/campaigns', getCampaign)

router.get('/api/services', getServices)

router.get('/api/marketings', getMarketing)

router.get('/api/plans', getPlans)


module.exports = router