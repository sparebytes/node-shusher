#!/usr/bin/env node
'use strict';

var stdin = process.stdin;
if (stdin.isTTY) {
    // Do nothing
} else {
    stdin.resume();
    stdin.setEncoding('utf8');
}
