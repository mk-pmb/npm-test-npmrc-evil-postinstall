
<!--#echo json="package.json" key="name" underline="=" -->
npm-test-npmrc-evil-postinstall
===============================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
A test package for whether I can trick a package manager into installing the
postinstall script.
<!--/#echo -->



API
---

This module exports one function:

### legit()

It returns one of two numbers:
* `1234` if this package was installed safely.
* `6789` if this package was installed in a way that ran
  the evil `postinstall` script.



Known issues
------------

* Needs more/better tests and docs.





<!--#toc stop="scan" -->

&nbsp;


License
-------
<!--#echo json="package.json" key="license" -->
ISC
<!--/#echo -->
