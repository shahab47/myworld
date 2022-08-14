const express = require('express')
const route = express.Router()
const posts =[{
    id : 'p1',
    Title : 'Post Title',
    description : 'Post Description',
    creator : 'u1'
}]
route.get('/:pid',(req,res,next)=>{
    const reqpid =req.params.pid
    const post = posts.find((p)=>{
        return p.id === reqpid
    })
    res.json({ postis: post})

})

module.exports= route

