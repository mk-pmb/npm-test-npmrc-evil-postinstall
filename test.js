'use strict';
const f = require('./index.js');

function die(exitCode, msg) {
  const p = console[exitCode ? 'error' : 'info'];
  p((exitCode ? '-ERR' : '+OK'), msg);
  process.exit(exitCode); // eslint-disable-line n/no-process-exit
}

const y = f();
if (y === 1234) { die(0, 'Seems legit.'); }
if (y === 6789) { die(6, 'Compromised by the postinstall script!'); }
die(2, 'Unexpected value: ' + y);
