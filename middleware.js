


function middleWare(req,res,next){
    if(req.url === '/help'){
        res.send('<h2>You have not permisson</h2>')
    }
    next()
}



app.use(middleWare)
