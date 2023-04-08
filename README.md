![A1](https://user-images.githubusercontent.com/81087205/230697170-927433cf-bf5d-4f51-ab1e-fa95395baf4d.png)

# bit-test

To fulfill .bit's Full-Stack Engineer interview process, I created nearly 100 functions and 100+ Mocha/Chai tests which can be used to detect and classify all Digit patterns at [godid.io](godid.io).

## Description

To accomplish this feat, I used

- Typescript, VanillaJS and RegEx to write detection functions for each of the Digit patterns (~100)
- TS-Mocha and Chai to write 100+ tests in order to ensure the accuracy of detection functions

Full requirements and instructions available [here](https://gist.github.com/renzholy/f857b464518e0cf97549a3aee141bd74).

_Note- To further capture potential errors, I could've written additional tests, but due to prior commitments,
this should suffice for now._

## Getting Started

- Clone this file into a preferred folder on your local hard drive
- From root folder, type `npm install` or `yarn install`

_Detection functions located under `src/index.ts`_

_Mocha testing file located under `test/index.test.ts`_

### Dependencies

- Typescript (main functionality)
- TS-Mocha and Chai (testing)
- TS-Node (compilation framework)

### Executing program

- `npm start` or `npm run dev` to execute suggested tests for the file

_Note- you can run additional tests on the `src/index.ts` file by simply adding testing methods to the end of the file using the following signature:
`assert.deepEqual(detectPatterns("XXX.bit"), new Set(["XXX"]));`_

- `npm test` to run through all 100+ tests using the Mocha/Chai framework

_Note- if you already have your own testing framework in place, then you can simply copy and paste the `src/index.ts` file directly into your own testing folder_

## Help

Any issues or questions, please feel free to contact me: robliou01@gmail.com

## Authors

Rob Liou (刘玉声): [robliou.github.io](https://robliou.github.io/)

## Acknowledgments

- [Regex playground tester](https://regex101.com/)
- [TS/JS Playground Tester](https://leetcode.com/playground/new/empty)
- [TS-Mocha Setup Guide](https://www.npmjs.com/package/ts-mocha)
- [Arabic Numbers Reference](https://stackoverflow.com/questions/29729391/regular-expression-arabic-characters-and-numbers-only)
- [Country Flag Regex Reference](https://stackoverflow.com/questions/53360006/detect-with-regex-if-emoji-is-country-flag)
