const blockstack = require('blockstack')

export default (filePath, options) => {
    try{
    	return blockstack.getFile(filePath,options);
    } catch(err) {
    	reject(err);
    }
}