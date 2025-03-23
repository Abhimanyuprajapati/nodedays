<!-- to Enter in mongodb we need to open terminal and type 
mongosh

after hitting enter we will enter in this screen 

PS D:\Abhimanyu\all manu folder\Node js code\nodedays\mongodb> mongosh
Current Mongosh Log ID: 67dead6cf7034827deb71235
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.2
Using MongoDB:          6.0.8
Using Mongosh:          2.4.2

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2025-03-17T23:42:43.462+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------


1. For seeing database 

==== show dbs      (will show your collection)

==== use dbs (will allow you to use that dbs )

==== show collections (will show all collection in that dbs)

==== db.collection_name.find (will always give you all data)
    IMP****  Using find method will always return an array of object    

==== db.collection_name.findOne.  (will always return one starting data)

==== db.collection_name.find( {"key":"value"} )   (will always return the data match )
    e.g 
    mydb> db.student.find({"gmail":"mansi@gmail.com"})
    [
    {
        _id: ObjectId('67d716c87a13ccb213b71295'),
        name: 'Mansi',
        id: 117,
        rollno: 142,
        gmail: 'mansi@gmail.com',
        age: 25
    }
    ]

==== db.collection_name.find().count()   ( return a total count of collection )
    
==== db.collection_name.find(  
    {
        price:{
        $eq: 2.25
            }
    }
    )   ( Equal to operator is used to find based on condition )


==== db.collection_name.find(  
    {
        price:{
        $ne: 2.25
            }
    }
    )   ( Not Equal to operator is used to find based on condition and return all data which is not equal )


==== db.collection_name.find({         (expr will always compare if a> b return that)
$expr:{
        $gt: ["$price", "$count"]      
    }
})



==== db.student.find({}, {"name:1", "gmail:1"});  (projection will always return what you want with defauld paramerter id)

 -->