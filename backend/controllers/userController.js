const getUserName=async(req,res)=>{
    const user=req.user

    if(!user){
        return res.status(404).json({msg:"username not found"})
    }

    return res.status(200).json({user})
}

module.exports=getUserName