/**
 * 
 *Synchronous Programming
Code executes line by line.

Each step waits for the previous one to finish.

Blocking: If a task takes time (like a network request), everything waits.


Example (JavaScript):
javascript
Copy
Edit
console.log("Start");
let result = longTask();  // blocks until finished
console.log("End");
If longTask() takes 5 seconds, the "End" will only print after 5 seconds.



Asynchronous Programming
Code does not wait for time-consuming tasks to complete.

These tasks are delegated (to the browser, OS, or thread), and the next lines run immediately.

Non-blocking.

Example with setTimeout:
javascript
Copy
Edit
console.log("Start");
setTimeout(() => {
    console.log("Async Task Complete");
}, 2000);
console.log("End");
Output:

sql
Copy
Edit
Start
End
Async Task Complete
🧠 How It Works Behind the Scenes (JavaScript):
Call Stack: Executes code.

Web APIs: Handle timers, fetch, etc.

Callback Queue: Stores async callbacks.

Event Loop: Pushes tasks from the queue to the call stack when it's empty.

🔧 Use Cases for Asynchronous Programming:
Network requests (APIs)

File operations

Timers

User interactions

✅ Key Tools in Async Programming:
Callbacks

Promises

Async/Await
 */

function sabzilana(cb) {
    console.log("sabzi lene ja rhe h!");
      setTimeout(()=>{
        console.log("sabzi a gyi");
        cb(bartandhona);
      },2000)
}
function sabzibangyi(cb) {
      console.log("sabzi banna suru ho gyi");
      setTimeout(()=>{
        console.log("sabji ban gyi,maza a gya");
        cb();
      },4000)
}
function bartandhona(){
    console.log("bartan dhona shuru kr diya");
    setTimeout(()=>{
        console.log("bartan dhul gye ab to maze hi maze h :) ");
    },5000)
}
sabzilana(sabzibangyi);

// here we are doing asychronous task in synchronous manner  using call backs


