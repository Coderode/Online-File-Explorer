const {execSync : execSync} = require('child_process');


try{
    const result = execSync(`du -sh "/c/Users/hp/Desktop/web dev/Big projects/Node project1-File Explorer"`).toString();
    console.log(result);
}catch(err){
    console.log(`Error: ${err}`);
}


//to get size of the folder 
//using command line 
// du -sh folderwithlocation

