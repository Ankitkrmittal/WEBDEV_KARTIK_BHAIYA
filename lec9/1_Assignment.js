
function createCounter() {
    let count =0;
    return {
        increment(){
            count++;
 
        },
        decrement(){
            count--;
        },
        getcount(){
            return count;
        }
    }
}
let counter = createCounter();
counter.increment();
console.log(counter.getcount());
counter.increment();
counter.increment();
console.log(counter.getcount());
counter.decrement();
console.log(counter.getcount());