const express =require('express')
const app =express();
app.use(express.static('static'));
app.listen(3000,()=>{
    console.log('app started port 3000');
})