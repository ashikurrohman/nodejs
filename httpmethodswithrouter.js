const router = require('express').Router();

router.get('/:prodId',(req,res)=>{
    res.send('All Post are There = ' + req.params.prodId)
})

router.post('/',(req,res)=>{
    res.send('create new post')
});

router.put('/:postId',(req,res)=>{
    res.send('Update the post = ' + req.params.postId)
})

router.delete('/:postId',(req,res)=>{
    res.send('Delete the post = ' + req.params.postId)
})



module.exports = router;
