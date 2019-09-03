 exports.getTimestamp=(timestamp)=>{
   var time;
   if(!timestamp)
     {
       time=new Date()
     }
   else
     {
       if(!isNaN(timestamp))
         {
           console.log(timestamp)
           time= new Date(timestamp*1000)
           console.log(time)
         }
       else
         {
          time= new Date(timestamp) 
         }
       if(!time)
         {
           //return {"unix":null , "utc":"Invalid Date"}
           return {"error":"Invalid Date"}
         }
     }   
   return{"unix":time.getTime() , "utc":time.toUTCString()}
 }