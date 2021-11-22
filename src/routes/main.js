const express = require('express');
const router = express.Router();
const {index,admin,login,register,products,detail} = require('../controllers/mainController')
const accessAdmin = require('../middelware/accessAdmin')



router.get('/',index)
router.get('/admin',accessAdmin,admin)
router.get('/login',login)
router.get('/register',register)
router.get('/detail',products)
router.get('/products',detail)

module.exports = router;