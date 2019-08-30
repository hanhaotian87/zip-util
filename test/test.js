'use strict';

var test = require('tap').test;
var path = require('path');
var zipUtil = require('../zipUtil');

test("verify unzip work",async function (t) {
    var src = path.join(__dirname, '../testData/data.zip');
    var dest = path.join(__dirname, '../testData/data');
    let result = await zipUtil.unzip(src,dest);
    t.end();
  });

  test("verify zip work",async function (t) {
      var src = path.join(__dirname, '../testData/data');
    var dest = path.join(__dirname, '../testData/data.zip');
    let result = await zipUtil.zip(src,dest);
    t.end();
  });