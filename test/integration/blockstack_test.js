/*eslint-env node, mocha, es6 */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const assert = chai.assert;
import Knockstack from './../';

suite('blockstack', function(){
	test('isUserSignedIn',function(){
		const elrnIdentity = new Knockstack();
		return elrnIdentity.isUserSignedIn()
		.then((bool) => {
			assert.equal(bool, false, 'should be true');
		});
	});

});