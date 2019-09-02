'use strict';

var test = require('tap').test;
var path = require('path');
var fs = require('fs');
var zipUtil = require('../zipUtil');

 test("verify unzip work",async function (t) {
    var src = path.join(__dirname, '../testData/data.zip');
    var dest = path.join(__dirname, '../testData/data');
    let result = await zipUtil.unzip(src,dest);
    t.end();
  }); 

  test("verify zip dir work",async function (t) {
    var src = path.join(__dirname, '../testData/data');
    var dest = path.join(__dirname, '../testData/data.zip');
    let result = await zipUtil.zip(src,dest);
    t.end();
  });

 test("verify zip file no name work",async function (t) {
    var src = path.join(__dirname, '../testData/data/architect201701.pdf');
    var dest = path.join(__dirname, '../testData/architect201701.zip');
    let result = await zipUtil.zip(src,dest);
    t.end();
}); 

 test("verify zip file new name work",async function (t) {
  var src = path.join(__dirname, '../testData/data/architect201701.pdf');
  var dest = path.join(__dirname, '../testData/architect201701a.zip');
  var newName = '1.pdf'
  let result = await zipUtil.zip(src,dest,newName);
  t.end();
});

test("verify zip string work",async function (t) {
  var src = 'Test zip string';
  var dest = path.join(__dirname, '../testData/b.zip');
  var newName = 'teststring.txt'
  let result = await zipUtil.zip(src,dest,newName);
  t.end();
});

test("verify zip buffer work",async function (t) {
  var src = Buffer.from('Test zip string as buffer');
  var dest = path.join(__dirname, '../testData/c.zip');
  var newName = 'testbuffer.txt'
  let result = await zipUtil.zip(src,dest,newName);
  t.end();
}); 

test("verify zip stream work",async function (t) {
  var file1 = path.join(__dirname, '../testData/data/architect201701.pdf');
	let src = fs.createReadStream(file1)
  var dest = path.join(__dirname, '../testData/d.zip');
  var newName = 'teststream.txt'
  let result = await zipUtil.zip(src,dest,newName);
  t.end();
});