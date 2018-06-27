const blockstack = require('blockstack')

export default () => {
    try{
       return blockstack.isSignInPending();
    } catch(err) {
    	console.log(err);
    }  
}