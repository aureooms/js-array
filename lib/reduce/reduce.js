"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.reduce = reduce;


/**
 * Applies the accumulator function iteratively on the
 * last return value of the accumulator and the next
 * value in the iterable. The initial value is the initializer
 * parameter.
 *
 * /!\ currently only works with an
 *     accumulator that is a function object
 *     and an array iterable
 */

function reduce(accumulator, iterable, initializer) {

	var i, len;

	i = 0;

	len = iterable.length;

	if (len === 0) {
		return initializer;
	}

	for (; i < len; ++i) {
		initializer = accumulator(initializer, iterable[i]);
	}

	return initializer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2UvcmVkdWNlLmpzIl0sIm5hbWVzIjpbInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiaXRlcmFibGUiLCJpbml0aWFsaXplciIsImkiLCJsZW4iLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7O1FBYWdCQSxNLEdBQUFBLE07OztBQVhoQjs7Ozs7Ozs7Ozs7QUFXTyxTQUFTQSxNQUFULENBQWtCQyxXQUFsQixFQUErQkMsUUFBL0IsRUFBeUNDLFdBQXpDLEVBQXVEOztBQUU3RCxLQUFJQyxDQUFKLEVBQU9DLEdBQVA7O0FBRUFELEtBQUksQ0FBSjs7QUFFQUMsT0FBTUgsU0FBU0ksTUFBZjs7QUFFQSxLQUFLRCxRQUFRLENBQWIsRUFBaUI7QUFDaEIsU0FBT0YsV0FBUDtBQUNBOztBQUVELFFBQVFDLElBQUlDLEdBQVosRUFBa0IsRUFBRUQsQ0FBcEIsRUFBd0I7QUFDdkJELGdCQUFjRixZQUFhRSxXQUFiLEVBQTBCRCxTQUFTRSxDQUFULENBQTFCLENBQWQ7QUFDQTs7QUFFRCxRQUFPRCxXQUFQO0FBRUEiLCJmaWxlIjoicmVkdWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qKlxuICogQXBwbGllcyB0aGUgYWNjdW11bGF0b3IgZnVuY3Rpb24gaXRlcmF0aXZlbHkgb24gdGhlXG4gKiBsYXN0IHJldHVybiB2YWx1ZSBvZiB0aGUgYWNjdW11bGF0b3IgYW5kIHRoZSBuZXh0XG4gKiB2YWx1ZSBpbiB0aGUgaXRlcmFibGUuIFRoZSBpbml0aWFsIHZhbHVlIGlzIHRoZSBpbml0aWFsaXplclxuICogcGFyYW1ldGVyLlxuICpcbiAqIC8hXFwgY3VycmVudGx5IG9ubHkgd29ya3Mgd2l0aCBhblxuICogICAgIGFjY3VtdWxhdG9yIHRoYXQgaXMgYSBmdW5jdGlvbiBvYmplY3RcbiAqICAgICBhbmQgYW4gYXJyYXkgaXRlcmFibGVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlICggYWNjdW11bGF0b3IsIGl0ZXJhYmxlLCBpbml0aWFsaXplciApIHtcblxuXHR2YXIgaSwgbGVuO1xuXG5cdGkgPSAwO1xuXG5cdGxlbiA9IGl0ZXJhYmxlLmxlbmd0aDtcblxuXHRpZiAoIGxlbiA9PT0gMCApIHtcblx0XHRyZXR1cm4gaW5pdGlhbGl6ZXI7XG5cdH1cblxuXHRmb3IgKCA7IGkgPCBsZW4gOyArK2kgKSB7XG5cdFx0aW5pdGlhbGl6ZXIgPSBhY2N1bXVsYXRvciggaW5pdGlhbGl6ZXIsIGl0ZXJhYmxlW2ldICk7XG5cdH1cblxuXHRyZXR1cm4gaW5pdGlhbGl6ZXI7XG5cbn1cblxuIl19