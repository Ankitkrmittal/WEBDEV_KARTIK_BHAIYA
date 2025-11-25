

db.marks.insertMany([
    {name:'vinay',cgpa:8.8},
    {name:'Aditya',cgpa:8.2},
    {name:'Anshul',cgpa:7.8}

])

db.create.Collection('marks',{

    validator : {
  
  $jsonSchema:{
  
  bsonType:'object',
  
  required:['name','cgpa'],
  
  properties:{
  
  name:{
  
  bsonType:'string',
  
  description:"name must me a string and is required"
  
  },
  
  cgpa:{
  
  bsonType:'number',
  
  description:'cgpa must be a number'
  
  }
  
  }
  
  }
  
  }
  
  })


  //ascending order

  db.marks.find().sort({cgpa:1}).toArray()

  //descending order
  db.marks.find().sort({cgpa:-1}).toArray()


  