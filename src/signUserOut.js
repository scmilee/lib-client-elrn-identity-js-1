const blockstack = require('blockstack')

export default (optionalRedirect) => {
	try{
    	return blockstack.signUserOut(optionalRedirect);
    } catch(err) {
       	console.log(err);
    }
}