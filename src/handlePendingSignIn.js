const blockstack = require('blockstack')

export default (nameURL) => {
    try{
        return blockstack.handlePendingSignIn(nameURL);
    } catch(err) {
      	console.log(err);
    }
}