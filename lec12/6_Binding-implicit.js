let obj ={
    a:"hello",
    hello: function() {
        console.log(this);
        this.c = "world"
    }
}
obj.hello();
console.log(obj);
