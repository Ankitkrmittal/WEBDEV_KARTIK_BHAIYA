let url ="https:codingblocks.com/course/cpp"
//convert the given ult  to following object

let x = url.split('/');
//console.log(x);

let courseName = x.pop();
let courseCategory = x.pop();
let companyDomain = x.pop();

let companyName = companyDomain.split('.').shift();

// console.log(courseName);
// console.log(courseCategory);
// console.log(companyName);


let obj = {}

if(!obj[companyName]) {
    obj[companyName] ={}
}
if(!obj[companyName][courseCategory]) {
    obj[companyName][courseCategory] = [courseName]
} else {
    obj[companyName][courseCategory].push(courseName);
}
console.log(obj);


//build small - small projects using javascripts


