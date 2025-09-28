db.createCollection('students');
db.students.insertOne({
    name:'pushkar',
    age:5
});

db.inserts.insertMany([
    {name:'vikas',age:3},
    {name:'ankit',age:5}

])

db.students.find({});