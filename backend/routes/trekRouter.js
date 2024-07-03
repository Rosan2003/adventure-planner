const express= require('express');
const app = express();
const {addTrek,getTrek,deleteTrek} = require('../controller/trekController');

const router = express.Router();

router.post('/add',addTrek);
router.get('/home',getTrek);
router.delete('/:id',deleteTrek)

module.exports = router;