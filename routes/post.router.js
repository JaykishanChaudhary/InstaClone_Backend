const router=require('express').Router();
const UserModel=require('../model/user.model');



router.post('/post',async(req,res)=>{
    try{
        // console.log(req.body);
            const {author,location,description,img}=req.body;
            // console.log(author,location,description,img);
            const newpost=await UserModel.create({
                author,
                location,
                description,
                img
            });
            res.status(200).json({
                status:"Created new post successfully",
                result:newpost
            })
        

    }catch(err)
    {
        throw err
    }
})


router.get('/getpost',async(req,res)=>{
    try{
        const PostData=await UserModel.find({});
        console.log(PostData)
        if(PostData)
        {
            res.status(200).json({
                status:'find the data',
                result:PostData
            })
        }
        else{
            res.status(400).json({
                status:"Not able to get data"
            })
        }
    }catch(err)
    {
        throw err
    }
})


module.exports=router;