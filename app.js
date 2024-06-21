const express=require("express");
const app=express();
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    console.log("hi");
    res.render("simon.ejs");
})
app.use(express.static("public"));
app.listen(8080,()=>{
    console.log("server is listening to port 8080");

});
