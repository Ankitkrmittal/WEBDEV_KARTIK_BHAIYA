function outer() {
    let x = 10;
    x++;
    function inner() {
        x++;
        console.log(x);
    }
    return inner;
}
let fn = outer();

fn();
fn();
fn();
