
//to get mime type of extension

//require node modules
const https = require('https');

//json file link
const mimeURL = 'https://gist.githubusercontent.com/AshHeskes/6038140/raw/27c8b1e28ce4c3aff0c0d8d3d7dbcb099a22c889/file-extension-to-mime-types.json';

const getMimeType = extension => {
    return new Promise((resolve, reject) => {
        //using https module of node js because mimeURL uses https template taken from node js site docu->https->https.get
        https.get(mimeURL, response => {
            if(response.statusCode < 200 || response.statusCode > 299){
                reject(`Error: Failed to load mime types json file: ${response.statusCode}`);
                console.log(`Error: Failed to load mime types json file: ${response.statusCode}`);
                return false;
            }
            
            let data = '';
            
            //you will receive data by chunks
            response.on('data', chunk => {
                data += chunk;
            });
            
            //Once you received all chunks of data
            response.on('end',() => {
               resolve(JSON.parse(data)[extension]);
            });

        }).on('error', (e) => {
          console.error(e);
        });
         
    });
};

module.exports = getMimeType;



//to get the mime type
//file extension to mime types json ash heskes
//https://gist.github.com/AshHeskes/6038140    : to get json file 
//to convert diff extensions to mime types  left : extname  right: mime type


//The MIME stands for Multi-Purpose Internet Mail Extensions. As the name indicates, it is an extension to the Internet email protocol that allows it's users to exchange different kinds of data files over the Internet such as images, audio, and video. The MIME is required if text in character sets other than ASCII.