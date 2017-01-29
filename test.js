import fs from 'fs';
import path from 'path';
import test from 'ava';
import tempWrite from 'temp-write';
import jsonFnFile from './';

test('Error handling', t => {
  t.throws(() => jsonFnFile(false), TypeError);
  t.throws(() => jsonFnFile('a', false), TypeError);

  const testJson = JSON.stringify({a: 1});
  const inputFilePath = tempWrite.sync(testJson, 'a.json');
  t.throws(() => jsonFnFile(inputFilePath, tempWrite.sync('b'), 1), TypeError);

  t.notThrows(() => jsonFnFile(inputFilePath, tempWrite.sync('b')));
  t.notThrows(() => jsonFnFile(inputFilePath, tempWrite.sync('b'), () => {}));
});

test('converts file', t => {
  const testJson = JSON.stringify({
    key1: 'Value1',
    key2: 'Value2'
  });
  const inputFilePath = tempWrite.sync(testJson, 'a.json');
  const outputFilePath = path.resolve(inputFilePath, '..', 'test.txt');
  jsonFnFile(inputFilePath, outputFilePath, input => Object.keys(input));

  t.is(fs.readFileSync(outputFilePath, 'utf8'), 'key1,key2');
});
