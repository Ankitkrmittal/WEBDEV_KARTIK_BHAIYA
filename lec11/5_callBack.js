//1. file read time in 3 sec from http://fakeurl.com/solve.mp3
//2.solve.mp3 is completed is compressed to solve.zip in 3 sec
//3solve.zip is up loaded to new url http://newfakeurl.com/solve.zip in 3 sec

let url = "http://fakeurl.com/solve.mp3"
function readFile(url,cb) {
    console.log("start readfile");

    setTimeout(()=>{
       let file=  url.split('/').pop();
       console.log("read file completed",file);
       cb(file,uploadFile);
       

    },3000)
    

}

function compressFile(file,cb) {
    console.log("file compressing started");
    setTimeout(()=>{
      console.log("compression complete")
      let cmpfile = file.split('.')[0]+'.zip';
      cb(cmpfile);
     
    },3000)
}
function uploadFile(cb) {
    console.log("uploading starts");
    setTimeout(()=>{
        let newurl =" http://newfakeurl.com";
     console.log("uplaoding complete",newurl);
    },3000);
    
}
readFile(url,compressFile);