import redirectToSignIn from './src/redirectToSignIn.js'
import isUserSignedIn from './src/isUserSignedIn.js'
import isSignInPending from './src/isSignInPending.js'
import signUserOut from './src/signUserOut.js'
import loadUserData from './src/loadUserData.js'
import putFile from './src/putFile.js'
import getFile from './src/getFile.js'
import handlePendingSignIn from './src/handlePendingSignIn.js'


export default class ElrnID {
	constructor(options){
		let defaultOptions = {};
		this.options = Object.call(defaultOptions, options);
	}
	isUserSignedIn(){
		return isUserSignedIn.call(this.options);
	}
	redirectToSignIn(redirectURI, manifestURI, permissionsArray){
		return redirectToSignIn.call(this.options, redirectURI, manifestURI, permissionsArray);
	}
	isSignInPending(){
		return isSignInPending.call(this.options);
	}
	handlePendingSignIn(nameURL){
		return handlePendingSignIn.call(this.options, nameURL );
	}
	loadUserData(){
		return loadUserData.call(this.options);
	}
	signUserOut(optionalRedirect){
		return signUserOut.call(this.options, optionalRedirect);
	}
	putFile(filePath,content, options){
		return putFile.call(this.options,filePath,content,options);
	}
	getFile(filePath, options){
		return getFile.call(this.options, filePath, options);
	}

};