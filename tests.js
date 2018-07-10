QUnit.test('isEven()', function(assert) {
	assert.ok(isEven(0), 'Ноль - четное число');
	assert.ok(isEven(2), 'Два - тоже');
	assert.ok(isEven(-4), 'И отрицательное четыре - тоже четное число');
	assert.ok(!isEven(1), 'Один - нечетное число');
	assert.ok(!isEven(-7), 'Как и отрицательное семь - нечетное число');
	assert.ok(isEven('8'), ' Четные строки');
	assert.ok(!isEven('9'), 'Нечетные строки');
	assert.ok(isEven(9), 'Вот тут должна быть ошибка');
	assert.ok(!isEven(8), 'Тут тоже');
})