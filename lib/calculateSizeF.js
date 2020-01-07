//require node modules

const calculateSizeF = stats => {
    //file size in bytes
    const filesizeBytes = stats.size;  //by default in  bytes
    
    //size in human readable format
    const units = "BKMGT";

    //......1000 ......100000......1000000000
    //log10
    //......3..........6...........9.........
    //log10(filesize)/3
    //0.....1..........2...........3..........

    const index = Math.floor(Math.log10(filesizeBytes)/3);

    //700 -> 700/1024^0
    //10000 -> 10000/1024^1
    //10000000 -> 10000000/1024^2

    const filesizeHuman = (filesizeBytes/Math.pow(1024,index)).toFixed(1);
    
    const unit = units[index];
    
    filesize = `${filesizeHuman}${unit}`;

    return [filesize,  filesizeBytes];
};

module.exports = calculateSizeF;

// 1 M = 1024*1024 bytes
// 1 k = 1024 bytes