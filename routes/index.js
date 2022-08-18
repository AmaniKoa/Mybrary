import express from "express"
const router = express.Router()
router.get('/',(req,res)=>{

    // res.render('index')
    res.send('the first app')

})

export default router