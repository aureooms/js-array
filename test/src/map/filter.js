import test from 'ava';
import * as array from '../../../src';

test( "filter", t => {
var one = function ( predicate, iterable, out ) {

	var msg;

	msg = "filter " + JSON.stringify( iterable );

	t.deepEqual( array.filter( predicate, iterable, [] ), out, msg );
};


	var positive = function (x) {
		return x > 0;
	};

	one( positive, [], [] );
	one( positive, [0], [] );
	one( positive, [6], [6] );

	one( positive, [-6], [] );
	one( positive, [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6] );
	one( positive, [0, 0, 1, 2, 0, 3, 0, 4, -7, 5, 6], [1, 2, 3, 4, 5, 6] );
});
