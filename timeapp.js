 exports.getTimestamp=(timestamp)=>{
   var time;
   if(!timestamp)
     {
       time=new Date()
     }
   else
     {
       time= new Date(timestamp)
       if(!time)
         {
           //return {"unix":null , "utc":"Invalid Date"}
           return {"error":"Invalid Date"}
         }
     }   
   return{"unix":time.getTime() , "utc":time.toUTCString()}
 }