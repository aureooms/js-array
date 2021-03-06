import test from 'ava';
import * as array from '../../../src';


test( "any", t => {
var one = function ( obj, val ) {
	t.deepEqual( array.any( obj ), val, "any " + JSON.stringify( obj ) );
};


	one( [], false );
	one( [true], true );
	one( [false], false );

	one( [true, true, true, true], true );
	one( [false, false, false, false], false );

	one( [false, true, true, true], true );
	one( [true, false, true, true], true );
	one( [true, true, false, true], true );
	one( [true, true, true, false], true );

	one( [true, false, false, false], true );
	one( [false, true, false, false], true );
	one( [false, false, true, false], true );
	one( [false, false, false, true], true );

});
