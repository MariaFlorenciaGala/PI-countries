const { Router } = require('express')

const {getAllCountries , getCountryById, getCountryByName } = require('')

const router = Router();

router.get('/',getAllCountries)
router.get('/:idPais', getCountryById)
router.get('/name', getCountryByName)


