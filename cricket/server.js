

var mongoose=require("mongoose");
var dbURI = "mongodb://localhost:27017/cricket";
mongoose.connect(dbURI);
var database=mongoose.connection;
var express=require("express");
const { exit } = require("process");
var app=express();



app.get("/",function(req,res)
{
   res.setHeader("Access-Control-Allow-Origin","*");
   res.json({message:true,data:"ajith"});
});



app.get("/update",function(req,res)
{
    res.setHeader("Access-Control-Allow-Origin","*");
    var query=req.query;

    
    database.collection("player").findOne({name:req.query.name},function(error,result)
    {
       if(error){
       
         throw error;
        
       }
       else
       {
           if(result==null){
            console.log("Player details not found");
            res.json({message:""});
           }
           else
           {

            var myquery = { name: req.query.name };
            var newvalues = { $set: {age: req.query.age, jno: req.query.jno , runs: req.query.runs , rating: req.query.rating , team: req.query.team} };

            database.collection("player").updateOne(myquery,newvalues,function(error,result)
            {
            if(error)
                throw error;
            else{
                res.json({message:true});
                console.log("updation successfull");
            }})
        }
    }
    })
});


app.get("/tupdate",function(req,res)
{
    res.setHeader("Access-Control-Allow-Origin","*");
    var query=req.query;

    
    database.collection("team").findOne({tname:req.query.tname},function(error,result)
    {
       if(error)
         throw error;
       else
       {
           if(result==null){
            //alert("Team details not found");
            res.json({message:""});
           }
           else
           {

            var myquery = { tname: req.query.tname };
            var newvalues = { $set: {tid: req.query.tid, noofwins: req.query.noofwins , nooflosses: req.query.nooflosses } };

            database.collection("team").updateOne(myquery,newvalues,function(error,result)
            {
            if(error)
                throw error;
            else{
                res.json({message:true});
                console.log("updated team details successfully");
            }})
        }
    }
    })
});




app.get("/insert",function(req,res)
{
    res.setHeader("Access-Control-Allow-Origin","*");
    var query=req.query;

    var data = {name:query.name,age:query.age,jno:query.jno,runs:query.runs,rating:query.rating,team:query.team};
    
            database.collection("player").insertOne(data,function(error,result){
            
            if(error)
                throw error;
            else{
                res.json({message:true});
                console.log("Insertion successfull");
            
            }})
        }
    
    );

    app.get("/tinsert",function(req,res)
    {
        res.setHeader("Access-Control-Allow-Origin","*");
        var query=req.query;
    
        var data = {tid:query.tid,tname:query.tname,noofwins:query.noofwins,nooflosses:query.nooflosses};
        
                database.collection("team").insertOne(data,function(error,result){
                
                if(error)
                    throw error;
                else{
                    res.json({message:true});
                    console.log("Inserted team successfully");
                
                }})
            }
        
        );



app.get("/display",function(req,res)
    {
        res.setHeader("Access-Control-Allow-Origin","*");
        var query=req.query;
    
        database.collection("player").find({}).toArray(function(error,result){
                
        if(error)
            throw error;
        else{
                res.json(result);
                console.log("Displaying data...");
                
                }})
    });


    app.get("/display1",function(req,res)
    {
        res.setHeader("Access-Control-Allow-Origin","*");
        var query=req.query;
    
        database.collection("player").find({}).toArray(function(error,result){
                
        if(error)
            throw error;
        else{
                res.json(result);
                console.log("Displaying data...");
                
                }})
    });


    app.get("/tdisplay",function(req,res)
    {
        res.setHeader("Access-Control-Allow-Origin","*");
        var query=req.query;
    
        database.collection("team").find({}).toArray(function(error,result){
                
        if(error)
            throw error;
        else{
                res.json(result);
                console.log("Displaying data...");
                
                }})
    });


    app.get("/tdisplay1",function(req,res)
    {
        res.setHeader("Access-Control-Allow-Origin","*");
        var query=req.query;
    
        database.collection("team").find({}).toArray(function(error,result){
                
        if(error)
            throw error;
        else{
                res.json(result);
                console.log("Displaying data...");
                
                }})
    });



app.get("/search",function(req,res)
    {
        res.setHeader("Access-Control-Allow-Origin","*");
        var query=req.query;
        var name = {name : req.query.name};
    
        database.collection("player").find(name).toArray(function(error,result){
                
        if(error)
            throw error;
        if(result == null){

            //res.json({message:""});
            res.json(result);
            console.log("No player found");
            
        }
        else{
                res.json(result);
                console.log("Record Found");
                
                }})
    });



    app.get("/search1",function(req,res)
    {
        res.setHeader("Access-Control-Allow-Origin","*");
        var query=req.query;
        var name = {name : req.query.name};
    
        database.collection("player").find(name).toArray(function(error,result){
                
        if(error)
            throw error;
            if(result == null){
                //alert("No player found");
                res.json(result);
                console.log("No player found");
            }
        else{
                res.json(result);
                console.log("Record Found");
                
                }})
    });

    
app.get("/tsearch",function(req,res)
{
    res.setHeader("Access-Control-Allow-Origin","*");
    var query=req.query;
    var tname = {tname : req.query.tname};

    database.collection("team").find(tname).toArray(function(error,result){
            
    if(error)
        throw error;
        if(result == null){
            //alert("No team found");
            console.log("No team found");
        }
    else{
            res.json(result);
            console.log("Record Found");
            
            }})
});

app.get("/tsearch1",function(req,res)
{
    res.setHeader("Access-Control-Allow-Origin","*");
    var query=req.query;
    var tname = {tname : req.query.tname};

    database.collection("team").find(tname).toArray(function(error,result){
            
    if(error)
        throw error;
    if(result == null){
            //alert("No team found");
            console.log("No team found");
        }
    else{
            res.json(result);
            console.log("Record Found");
            
            }})
});





app.get("/delete",function(req,res)
{
    res.setHeader("Access-Control-Allow-Origin","*");
    var query=req.query;

    var data = {name: req.query.name};
    
            database.collection("player").deleteOne(data,function(error,result){
            
            if(error)
                throw error;
                if(result == null){
                    //alert("No player found");
                    res.json({message:""});
                    console("No player found");
                    
                }
            else{
                res.json({message:true});
                console.log("1 record deleted...");
            
            }})
        }
    
    );
        


    app.get("/tdelete",function(req,res)
    {
        res.setHeader("Access-Control-Allow-Origin","*");
        var query=req.query;
    
        var data = {tname: req.query.tname};
        
                database.collection("team").deleteOne(data,function(error,result){
                
                if(error)
                    throw error;
                    if(result == null){
                        //alert("No team found");
                        res.json({message:""});
                        console.log("No team found");
                        
                    }
                else{
                    res.json({message:true});
                    console.log("1 team deleted...");
                
                }})
            }
        
        );



app.listen(5000);
console.log("listening to port 5000");

