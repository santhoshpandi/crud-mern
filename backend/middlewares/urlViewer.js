const urlViewer = (req,res,next)=>{
  console.log(req.method+' '+req.url)
  next()
}

module.exports = urlViewer