const blockstack = require('blockstack')

export default (filePath,content, options) => { 
    try{
       	return blockstack.putFile(filePath,content,options);
    } catch(err) {
        console.log(err);
  	}
   
}