const blockstack = require('blockstack')

export default (redirectURI, manifestURI, permissionsArray) => {
    try{
       	return blockstack.redirectToSignIn(redirectURI, manifestURI, permissionsArray);
    } catch(err) {
        console.log(err);
   	}  
}