//require node modules
const {execSync} = require('child_process');

const calculateSizeD = itemFullStaticPath => {
    //escape spaces, tabs, etc
    const itemFullStaticPathCleaned = itemFullStaticPath.replace(/\s/g, '\ ');   //regular exp \s-space g- gloabal
    
    const commandOutput = execSync(`du -sh "${itemFullStaticPathCleaned}"`).toString();
    
//    console.log(commandOutput);
    
    //remove all spaces, tabs, etc
    let filesize = commandOutput.replace(/\t/g,'\\');   //\t -tab \\ - for \
    filesize = filesize.replace(/\s/g,'');
//    console.log(filesize);
    //split filesize using the '\' separator
    filesize = filesize.split('\\');
    
    //human readable size is the first item of the array
    filesize = filesize[0];
    
//    console.log(filesize);
    //unit 
    const  filesizeUnit = filesize.replace(/\d|\./g,'');  //\d - for digit
//    console.log(filesizeUnit);
    
    //size number
    const filesizeNumber = parseFloat(filesize.replace(/[a-z]/i,''));  // i -case insensitive
//    console.log(filesizeNumber);
    
    //to convert size in bytes
    const units = "BKMGT";
    
    //B 10B-> 10 bytes (*1024^0)
    //K 10K-> 10*1024 bytes  (*1024^1)
    //M 10M-> 10*1024*1024 bytes (*1024^2)
    //G 10G-> 10*1024*1024*1024 bytes (*1024^3)
    //T 10T-> 10*1024*1024*1024*1024 bytes (*1024^4)
    const filesizeBytes = filesizeNumber * Math.pow(1024, units.indexOf(filesizeUnit));
    
//    console.log(filesizeBytes);

    
    return [filesize,  filesizeBytes];   //second parameter is the byte size for html
};

module.exports = calculateSizeD;

// 1 M = 1024*1024 bytes
// 1 k = 1024 bytes