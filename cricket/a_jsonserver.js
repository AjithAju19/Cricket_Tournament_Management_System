var mysql = require('mysql')
var express = require('express')
var app = express();
var con;

function makeConnection()
{
  con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ajith",
    database:"cricket",port:3308
  });
}

app.get("/insert",function(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");
  res.json({message:true});
  makeConnection();

  var name = req.query.name;
  var age = req.query.age;
  var runs = req.query.runs;
  var rating = req.query.rating;
  var jno = req.query.jno;
  var team = req.query.team;


  con.connect(function(err){

    if(err) throw err;

    sql = "insert into player values("+"'"+name+"',"+age+","+jno+","+runs+","+rating+",'"+team+"')";

    con.query(sql,function(err,result){

      if(err) throw err;

      res.write(name+" record inserted successfully...");
      res.end();

    });

  });


});


app.get("/tinsert",function(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");
  res.json({message:true});
  makeConnection();

  var tname = req.query.tname;
  var tid = req.query.tid;
  var noofwins = req.query.noofwins;
  var nooflosses = req.query.nooflosses;
  


  con.connect(function(err){

    if(err) throw err;

    sql = "insert into team values("+tid+", '"+tname+"' ,"+noofwins+","+nooflosses+")";

    con.query(sql,function(err,result){

      if(err) throw err;

      res.write(tname+" record inserted successfully...");
      res.end();

    });

  });


});






app.get("/update",function(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");
  res.json({message:true});
  makeConnection();

  var name = req.query.name;
  var age = req.query.age;
  var runs = req.query.runs;
  var rating = req.query.rating;
  var jno = req.query.jno;
  var team = req.query.team;


  con.connect(function(err){

    if(err) throw err;

    sql = "update player set age = "+age +" ,runs = "+runs+" ,rating = "+rating+", jno = "+jno+" ,team = '"+team+"' where name='"+name+"'";


    con.query(sql,function(err,result){

      if(err) throw err;

      res.write(name+" record updated successfully...");
      res.end();

    });

  });


});



app.get("/tupdate",function(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");
  res.json({message:true});
  makeConnection();

  var tid = req.query.tid;
  var tname = req.query.tname;
  var noofwins = req.query.noofwins;
  var nooflosses = req.query.nooflosses;



  con.connect(function(err){

    if(err) throw err;

    sql = "update team set tid = "+tid+",noofwins = "+noofwins+", nooflosses="+nooflosses +" where tname = '"+tname+"'";

    con.query(sql,function(err,result){

      if(err) throw err;

      res.write(tname+" record updated successfully...");
      res.end();

    });

  });


});


app.get("/delete",function(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");
  res.json({message:true});
  makeConnection();

  var name = req.query.name;
  

  con.connect(function(err){

    if(err) throw err;

    sql = "delete from player where name = '"+name+"'";


    con.query(sql,function(err,result){

      if(err) throw err;
      res.write(name+" record deleted successfully...");
      res.end();

    });

  });


});


app.get("/tdelete",function(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");
  res.json({message:true});
  makeConnection();

  var tname = req.query.tname;
  

  con.connect(function(err){

    if(err) throw err;

    sql = "delete from team where tname = '"+tname+"'";


    con.query(sql,function(err,result){

      if(err) throw err;
      res.write(tname+" record deleted successfully...");
      res.end();

    });

  });


});



app.get("/display",function(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");
  makeConnection(); 
  var data=[]
  
  con.connect(function(err){

    if(err) throw err;

    sql = "select * from player";
    
    

    con.query(sql,function(err,result){

      if(err) throw err;
    
      data = [];

      for(i = 0; i < result.length ; i++){

      data.push({name:result[i].name,age:result[i].age,jno:result[i].jno,runs:result[i].runs,rating:result[i].rating,team:result[i].team});

      }
      
      res.json(data);

    });

  });


});


app.get("/tdisplay",function(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");
  makeConnection(); 
  var data=[]
  var winper;

  con.connect(function(err){

    if(err) throw err;

    sql = "select * from team";
    
    

    con.query(sql,function(err,result){

      if(err) throw err;
    
      data = [];


      for(i = 0; i < result.length ; i++){

        winper = result[i].noofwins + result[i].nooflosses;

      data.push({tid:result[i].tid,tname:result[i].tname,noofwins:result[i].noofwins,nooflosses:result[i].nooflosses});

      }
      
      res.json(data);

    });

  });


});


app.get("/search",function(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");
  makeConnection(); 
  var data=[];
  var name = req.query.name;
  con.connect(function(err){

    if(err) throw err;

    sql = "select * from player where name='"+name+"'";
    
    

    con.query(sql,function(err,result){

      if(err) throw err;
    
      data = [];

      for(i = 0; i < result.length ; i++){

      data.push({name:result[i].name,age:result[i].age,jno:result[i].jno,runs:result[i].runs,rating:result[i].rating,team:result[i].team});

      }
      
      res.json(data);

    });

  });


});


app.get("/tsearch",function(req,res){

  res.setHeader("Access-Control-Allow-Origin","*");
  makeConnection(); 
  var data=[];
  var tname = req.query.tname;
  con.connect(function(err){

    if(err) throw err;

    sql = "select * from team where tname='"+tname+"'";
    
    

    con.query(sql,function(err,result){

      if(err) throw err;
    
      data = [];

      for(i = 0; i < result.length ; i++){

      data.push({tid:result[i].tid,tname:result[i].tname,noofwins:result[i].noofwins,nooflosses:result[i].nooflosses });

      }
      
      res.json(data);

    });

  });


});




app.listen(5000);
console.log("Node.js running @port 5000...");
