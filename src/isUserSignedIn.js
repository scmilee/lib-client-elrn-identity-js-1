const blockstack = require('blockstack')

export default () => {
	try{
    	return blockstack.isUserSignedIn();
    } catch(err) {
    	console.log(err);
    } 
}