
export function all ( iterable ) {

	var i, len;

	len = iterable.length;

	for ( i = 0 ; i < len ; ++i ) {

		if ( ! iterable[i] ) {
			return false;
		}

	}

	return true;
}

