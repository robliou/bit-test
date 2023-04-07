# bit-test

Repository for Typescript file and associated testing which detects and classifies all Digit patterns at [godid.io](godid.io) (except for Rare4D).

## Description

To accomplish this feat, I
* Using Typescript, VanillaJS and RegEx, I wrote detection functions for each of the Digit patterns  (nearly 100)
* Using TS-Mocha and Chai, wrote 100+ tests in order to ensure accuracy of detection functions are accurate

Full requirements and instructions available [here](https://gist.github.com/renzholy/f857b464518e0cf97549a3aee141bd74).


## Getting Started

* Clone this file
* From root folder, type ``npm install`` or ``yarn install``
* Any modifications needed to be made to files/folders

Detection functions located under `src/index.ts`
Mocha testing file located under `test/index.test.ts`

### Dependencies

* Typescript (main functionality)
* TS-Mocha and Chai (Testing)

### Executing program

* npm start or npm run dev to execute basic tests for the file
* npm test to run through all tests
Note- if you already have your own testing framework in place, then you can simply copy and paste the src/index.ts file directly into your own testing folder. 

## Help

Any issues or questions, please contact me: robliou01@gmail.com

## Authors

Contributors names and contact info

Rob Liou (刘玉声): [robliou.github.io](robliou.github.io)

## Acknowledgments

* [Regex playground tester](https://regex101.com/)
* [RegEx Reference Guide](https://www.freecodecamp.org/news/regular-expressions-for-beginners/)
* [TS/JS Playground Tester](https://leetcode.com/playground/new/empty)
* [TS-Mocha Setup Guide](https://www.npmjs.com/package/ts-mocha)
* [Arabic Numbers Reference](https://stackoverflow.com/questions/29729391/regular-expression-arabic-characters-and-numbers-only)
