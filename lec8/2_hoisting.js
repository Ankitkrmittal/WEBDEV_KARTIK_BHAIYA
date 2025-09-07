hello();
var hello = function() {
    console.log("hello");
}

//only lhs is hoisted its value is not hoisted
//in this hello is hoisted and its value is undefined but when we call the hello() the undefined is called thats why it 
// throws an errot hello is not a function as undefined cannot be called

