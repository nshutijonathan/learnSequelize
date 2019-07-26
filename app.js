import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import router from './src/routes/blogsRoute';
config.config();
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);
app.get('/',(req,res)=>{
    return res.status(200).send({
        status:200,
        message:'Welcome to this app '
    })
})
const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`)
});
export default app;
