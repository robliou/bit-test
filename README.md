<p align="center"> ![A1](https://user-images.githubusercontent.com/81087205/230696736-7751e65b-05fb-4e28-9ca3-48f530101fa6.png) </p>

# bit-test

I created nearly 100 functions in a Typescript file and 100+ Mocha/Chai tests which can be used to detect and classify all Digit patterns at [godid.io](godid.io) (except for Rare4D).

## Description

To accomplish this feat, I
* used Typescript, VanillaJS and RegEx to wrote detection functions for each of the Digit patterns  (~100)
* used TS-Mocha and Chai to write 100+ tests in order to ensure accuracy of detection functions

Full requirements and instructions available [here](https://gist.github.com/renzholy/f857b464518e0cf97549a3aee141bd74).

** Note- To further capture potential errors, an additional 100+ tests could've been written, but due to other work commitments and time constraints, 
this will have to suffice for now.

## Getting Started

* Clone this file into a preferred folder on your local hard drive
* From root folder, type ``npm install`` or ``yarn install``

Detection functions located under ``src/index.ts``
Mocha testing file located under ``test/index.test.ts``

### Dependencies

* Typescript (main functionality)
* TS-Mocha and Chai (Testing)
* TS-Node

### Executing program

* ``npm start`` or ``npm run dev`` to execute suggested tests for the file
** Note- you can run additional tests to the ``src/index.ts`` file by simply adding methods to the end of the file using the following signature:
  ``assert.deepEqual(detectPatterns("XXX.bit"), new Set(["XXX"]));``
  
* ``npm test`` to run through all 100+ tests using the Mocha/Chai framework
** Note- if you already have your own testing framework in place, then you can simply copy and paste the src/index.ts file directly into your own testing folder


## Help

Any issues or questions, feel free to contact me: robliou01@gmail.com

## Authors

Rob Liou (刘玉声): [robliou.github.io](robliou.github.io)

## Acknowledgments

* [Regex playground tester](https://regex101.com/)
* [RegEx Reference Guide](https://www.freecodecamp.org/news/regular-expressions-for-beginners/)
* [TS/JS Playground Tester](https://leetcode.com/playground/new/empty)
* [TS-Mocha Setup Guide](https://www.npmjs.com/package/ts-mocha)
* [Arabic Numbers Reference](https://stackoverflow.com/questions/29729391/regular-expression-arabic-characters-and-numbers-only)
