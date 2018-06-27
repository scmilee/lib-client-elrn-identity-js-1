const blockstack = require('blockstack')

export default () => {	
	try{
       	return blockstack.loadUserData();
    } catch(err) {
    	console.log(err);
    }   
}