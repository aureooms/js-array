"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.group = group;
function group(key, iterable, out) {

	var i, len, curr, next, tuple, item, items;

	len = iterable.length;

	if (len === 0) {
		return out;
	}

	i = 0;
	item = iterable[i];
	next = key(item);

	do {
		curr = next;
		items = [item];
		tuple = [curr, items];

		++i;

		while (i < len) {

			item = iterable[i];
			next = key(item);

			if (next !== curr) {
				break;
			}

			items.push(item);
			++i;
		}

		out.push(tuple);
	} while (i < len);

	return out;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXAvZ3JvdXAuanMiXSwibmFtZXMiOlsiZ3JvdXAiLCJrZXkiLCJpdGVyYWJsZSIsIm91dCIsImkiLCJsZW4iLCJjdXJyIiwibmV4dCIsInR1cGxlIiwiaXRlbSIsIml0ZW1zIiwibGVuZ3RoIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFDZ0JBLEssR0FBQUEsSztBQUFULFNBQVNBLEtBQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxRQUF0QixFQUFnQ0MsR0FBaEMsRUFBc0M7O0FBRTVDLEtBQUlDLENBQUosRUFBT0MsR0FBUCxFQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QkMsS0FBeEIsRUFBK0JDLElBQS9CLEVBQXFDQyxLQUFyQzs7QUFFQUwsT0FBTUgsU0FBU1MsTUFBZjs7QUFFQSxLQUFLTixRQUFRLENBQWIsRUFBaUI7QUFDaEIsU0FBT0YsR0FBUDtBQUNBOztBQUVEQyxLQUFJLENBQUo7QUFDQUssUUFBT1AsU0FBU0UsQ0FBVCxDQUFQO0FBQ0FHLFFBQU9OLElBQUtRLElBQUwsQ0FBUDs7QUFFQSxJQUFHO0FBQ0ZILFNBQU9DLElBQVA7QUFDQUcsVUFBUSxDQUFDRCxJQUFELENBQVI7QUFDQUQsVUFBUSxDQUFDRixJQUFELEVBQU9JLEtBQVAsQ0FBUjs7QUFFQSxJQUFFTixDQUFGOztBQUVBLFNBQVFBLElBQUlDLEdBQVosRUFBa0I7O0FBRWpCSSxVQUFPUCxTQUFTRSxDQUFULENBQVA7QUFDQUcsVUFBT04sSUFBS1EsSUFBTCxDQUFQOztBQUVBLE9BQUtGLFNBQVNELElBQWQsRUFBcUI7QUFDcEI7QUFDQTs7QUFFREksU0FBTUUsSUFBTixDQUFZSCxJQUFaO0FBQ0EsS0FBRUwsQ0FBRjtBQUNBOztBQUVERCxNQUFJUyxJQUFKLENBQVVKLEtBQVY7QUFFQSxFQXRCRCxRQXNCVUosSUFBSUMsR0F0QmQ7O0FBeUJBLFFBQU9GLEdBQVA7QUFFQSIsImZpbGUiOiJncm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwICgga2V5LCBpdGVyYWJsZSwgb3V0ICkge1xuXG5cdHZhciBpLCBsZW4sIGN1cnIsIG5leHQsIHR1cGxlLCBpdGVtLCBpdGVtcztcblxuXHRsZW4gPSBpdGVyYWJsZS5sZW5ndGg7XG5cblx0aWYgKCBsZW4gPT09IDAgKSB7XG5cdFx0cmV0dXJuIG91dDtcblx0fVxuXG5cdGkgPSAwO1xuXHRpdGVtID0gaXRlcmFibGVbaV07XG5cdG5leHQgPSBrZXkoIGl0ZW0gKTtcblxuXHRkbyB7XG5cdFx0Y3VyciA9IG5leHQ7XG5cdFx0aXRlbXMgPSBbaXRlbV07XG5cdFx0dHVwbGUgPSBbY3VyciwgaXRlbXNdO1xuXG5cdFx0KytpO1xuXG5cdFx0d2hpbGUgKCBpIDwgbGVuICkge1xuXG5cdFx0XHRpdGVtID0gaXRlcmFibGVbaV07XG5cdFx0XHRuZXh0ID0ga2V5KCBpdGVtICk7XG5cblx0XHRcdGlmICggbmV4dCAhPT0gY3VyciApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGl0ZW1zLnB1c2goIGl0ZW0gKTtcblx0XHRcdCsraTtcblx0XHR9XG5cblx0XHRvdXQucHVzaCggdHVwbGUgKTtcblxuXHR9IHdoaWxlICggaSA8IGxlbiApO1xuXG5cblx0cmV0dXJuIG91dDtcblxufVxuXG4iXX0=