function readfile(url) {
     return new Promise((res,rej)=>{
        if(!url) return rej("url is not working");
         setTimeout(()=>{
            let file = url.split('/').pop();
            console.log("file read successfully");
            res(file);
         },3000)
     })
}
function compressfile(file){
      return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("file cpmpress successfully");
            let cmpFile = file.split('.')[0] + '.zip'
            res(cmpFile);
        },2000)
      })
}
function uploadfile(cmpfile) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
           let newurl = "http//fakeurl2.com" +cmpfile;
           res(newurl)
        },3000)
    })
}
let url = 'http://fakeUrl.com/solve.mp3';

readfile(url)
    .then(compressfile)
    .then(uploadfile)
    .then((url)=>{
         console.log(url)
    })
    .catch((err)=>{
        console.log("err");
    })