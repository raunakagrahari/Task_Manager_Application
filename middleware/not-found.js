const notFound = (req,res)=>{
    res.status(404).send('Route Dose not Exist');
}

module.exports= notFound;