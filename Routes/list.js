
const express= require('express')
const router=express.Router()

const { createList,getList,deleteList,findList,updateList }=require('../Controller/list')

router.post('/addlist',createList)
router.post('/findlist',findList)
router.post('/deletelist/:id',deleteList)
router.get('/',getList)
router.put('/updatelist', updateList)
   

module.exports=router
