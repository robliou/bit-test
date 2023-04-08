import { assert } from "chai";

import detectPatterns from "../src/index";

describe("DetectPatterns", () => {
  it('`333.bit` should result in "AAA", "999"', () => {
    let bitName: `${string}.bit` = "333.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["999", "AAA"]));
  });
});

describe("DetectPatterns", () => {
  it('`2112.bit` should result in "ABBA", "10K"', () => {
    let bitName: `${string}.bit` = "2112.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBA", "10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`45555.bit` should result in "ABBBB", "100K"', () => {
    let bitName: `${string}.bit` = "45555.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBBB", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`888000.bit` should result in "AAABBB", "XXX000"', () => {
    let bitName: `${string}.bit` = "888000.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAABBB", "XXX000"]));
  });
});

describe("DetectPatterns", () => {
  it('`0098.bit` should result in "10K", "AABC", "0XXX", "00XX"', () => {
    let bitName: `${string}.bit` = "0098.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["10K", "AABC", "0XXX", "00XX"]));
  });
});

describe("DetectPatterns", () => {
  it('`0x9832.bit` should result in "0x10K"', () => {
    let bitName: `${string}.bit` = "0x9832.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["0x10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`0311.bit` should result in "ABCC", "0XXX", "10K", "MMDD"', () => {
    let bitName: `${string}.bit` = "0311.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABCC", "0XXX", "10K", "MMDD"]));
  });
});

//My tests

describe("DetectPatterns", () => {
  it('`0404.bit` should result in "ABAB", "0X0X", "0XXX", "10K", "MMDD"', () => {
    let bitName: `${string}.bit` = "0404.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABAB", "0XXX", "0X0X", "10K", "MMDD"]));
  });
});

describe("DetectPatterns", () => {
  it('`040324.bit` should result in ""', () => {
    let bitName: `${string}.bit` = "040324.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set([]));
  });
});

describe("DetectPatterns", () => {
  it('`04032.bit` should result in "100K"', () => {
    let bitName: `${string}.bit` = "04032.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`040°.bit` should result in "360Degree"', () => {
    let bitName: `${string}.bit` = "040°.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["360Degree"]));
  });
});

describe("DetectPatterns", () => {
  it('`360°.bit` should result in "360Degree"', () => {
    let bitName: `${string}.bit` = "360°.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["360Degree"]));
  });
});

describe("DetectPatterns", () => {
  it('`0x8A.bit` should result in "2Hex"', () => {
    let bitName: `${string}.bit` = "0x8A.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["2Hex"]));
  });
});

describe("DetectPatterns", () => {
  it('`0x89.bit` should result in "2Hex", "0x99"', () => {
    let bitName: `${string}.bit` = "0x89.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["2Hex", "0x99"]));
  });
});

describe("DetectPatterns", () => {
  it('`1750000.bit` should result in "WanClub"', () => {
    let bitName: `${string}.bit` = "1750000.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["WanClub"]));
  });
});

describe("DetectPatterns", () => {
  it('`2220000.bit` should result in "AAABBBB","WanClub"', () => {
    let bitName: `${string}.bit` = "2220000.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAABBBB", "WanClub"]));
  });
});

describe("DetectPatterns", () => {
  it('`2335332.bit` should result in "ABBCBBA"', () => {
    let bitName: `${string}.bit` = "2335332.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBCBBA"]));
  });
});

describe("DetectPatterns", () => {
  it('`١٧٦٣.bit` should result in "Arabic10K"', () => {
    let bitName: `${string}.bit` = "١٧٦٣.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["Arabic10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`١٧٦٣.bit` should result in "Arabic999"', () => {
    let bitName: `${string}.bit` = "١٧٣.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["Arabic999"]));
  });
});

describe("DetectPatterns", () => {
  it('`🇨🇦224.bit` should result in "Flag999"', () => {
    let bitName: `${string}.bit` = "🇨🇦224.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["Flag999"]));
  });
});

// Comprehensive Tests

describe("DetectPatterns", () => {
  it('`321.bit` should result in "ABC", "999"', () => {
    let bitName: `${string}.bit` = "321.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABC", "999"]));
  });
});

describe("DetectPatterns", () => {
  it('`300.bit` should result in "ABB", "999"', () => {
    let bitName: `${string}.bit` = "300.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABB", "999"]));
  });
});

describe("DetectPatterns", () => {
  it('`505.bit` should result in "ABA"', () => {
    let bitName: `${string}.bit` = "505.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABA", "999"]));
  });
});

describe("DetectPatterns", () => {
  it('`994.bit` should result in "AAB"', () => {
    let bitName: `${string}.bit` = "994.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAB", "999"]));
  });
});

describe("DetectPatterns", () => {
  it('`0x023.bit` should result in "0x999","3Hex"', () => {
    let bitName: `${string}.bit` = "0x023.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["0x999", "3Hex"]));
  });
});

describe("DetectPatterns", () => {
  it('`321JP.bit` should result in "999JP"', () => {
    let bitName: `${string}.bit` = "321JP.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["999JP"]));
  });
});

describe("DetectPatterns", () => {
  it('`021CN.bit` should result in "999CN"', () => {
    let bitName: `${string}.bit` = "321CN.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["999CN"]));
  });
});
//

describe("DetectPatterns", () => {
  it('`1234.bit` should result in "ABCD", "10K"', () => {
    let bitName: `${string}.bit` = "1234.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABCD", "10K"]));
  });
});
describe("DetectPatterns", () => {
  it('`1111.bit` should result in "AAAA", "10K", "MMDD"', () => {
    let bitName: `${string}.bit` = "1111.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAAA", "10K", "MMDD"]));
  });
});

describe("DetectPatterns", () => {
  it('`4777.bit` should result in "ABBB", "10K"', () => {
    let bitName: `${string}.bit` = "4777.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBB", "10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`7744.bit` should result in "AABB", "10K"', () => {
    let bitName: `${string}.bit` = "7744.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AABB", "10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`4441.bit` should result in "AAAB", "10K"', () => {
    let bitName: `${string}.bit` = "4441.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAAB", "10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`2522.bit` should result in "ABAA", "10K"', () => {
    let bitName: `${string}.bit` = "2522.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABAA", "10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`4404.bit` should result in "AABA", "10K"', () => {
    let bitName: `${string}.bit` = "4404.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AABA", "10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`7447.bit` should result in "ABBA", "10K"', () => {
    let bitName: `${string}.bit` = "7447.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBA", "10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`1616.bit` should result in "ABAB", "10K"', () => {
    let bitName: `${string}.bit` = "1616.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABAB", "10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`5512.bit` should result in "AABC", "10K"', () => {
    let bitName: `${string}.bit` = "5512.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AABC", "10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`7466.bit` should result in "ABCC", "10K"', () => {
    let bitName: `${string}.bit` = "7466.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABCC", "10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`6110.bit` should result in "ABBC", "10K"', () => {
    let bitName: `${string}.bit` = "6110.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBC", "10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`0241.bit` should result in "0XXX", "10K"', () => {
    let bitName: `${string}.bit` = "0241.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["0XXX", "10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`0088.bit` should result in "00XX", "10K", "AABB","0XXX", "XX88"', () => {
    let bitName: `${string}.bit` = "0088.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["00XX", "10K", "AABB", "0XXX", "XX88"]));
  });
});

describe("DetectPatterns", () => {
  it('`0202.bit` should result in "0X0X", "10K","0XXX", "MMDD", "ABAB"', () => {
    let bitName: `${string}.bit` = "0202.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["0X0X", "10K", "0XXX", "MMDD", "ABAB"]));
  });
});

describe("DetectPatterns", () => {
  it('`0440.bit` should result in "0XX0", "10K","0XXX","ABBA"', () => {
    let bitName: `${string}.bit` = "0440.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["0XX0", "10K", "0XXX", "ABBA"]));
  });
});

describe("DetectPatterns", () => {
  it('`5500.bit` should result in "XX00", "10K", "AABB"', () => {
    let bitName: `${string}.bit` = "5500.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["XX00", "10K", "AABB"]));
  });
});

describe("DetectPatterns", () => {
  it('`4488.bit` should result in "XX88", "10K", "AABB"', () => {
    let bitName: `${string}.bit` = "4488.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["XX88", "10K", "AABB"]));
  });
});

describe("DetectPatterns", () => {
  it('`2269.bit` should result in "XX69", "10K","AABC"', () => {
    let bitName: `${string}.bit` = "2269.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["XX69", "10K", "AABC"]));
  });
});

describe("DetectPatterns", () => {
  it('`5735.bit` should result in "TimesTable", "10K"', () => {
    let bitName: `${string}.bit` = "5735.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["TimesTable", "10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`0131.bit` should result in "MMDD", "10K","0XXX"', () => {
    let bitName: `${string}.bit` = "0131.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["MMDD", "10K", "0XXX"]));
  });
});

describe("DetectPatterns", () => {
  it('`0292.bit` should result in "10K","0XXX"', () => {
    let bitName: `${string}.bit` = "0292.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["10K", "0XXX"]));
  });
});

describe("DetectPatterns", () => {
  it('`0x9991.bit` should result in "0x10K"', () => {
    let bitName: `${string}.bit` = "0x9991.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["0x10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`59201.bit` should result in "100K"', () => {
    let bitName: `${string}.bit` = "59201.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`23456.bit` should result in "ABCDE","100K","XABCD"', () => {
    let bitName: `${string}.bit` = "23456.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABCDE", "100K", "XABCD"]));
  });
});

describe("DetectPatterns", () => {
  it('`52222.bit` should result in "ABBBB","100K"', () => {
    let bitName: `${string}.bit` = "52222.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBBB", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`22444.bit` should result in "AABBB","100K"', () => {
    let bitName: `${string}.bit` = "22444.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AABBB", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`44411.bit` should result in "AAABB","100K"', () => {
    let bitName: `${string}.bit` = "44411.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAABB", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`77770.bit` should result in "AAAAB","100K"', () => {
    let bitName: `${string}.bit` = "77770.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAAAB", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`27772.bit` should result in "ABBBA","100K"', () => {
    let bitName: `${string}.bit` = "27772.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBBA", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`74777.bit` should result in "ABAAA","100K"', () => {
    let bitName: `${string}.bit` = "74777.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABAAA", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`22922.bit` should result in "AABAA","100K"', () => {
    let bitName: `${string}.bit` = "22922.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AABAA", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`88828.bit` should result in "AAABA","100K"', () => {
    let bitName: `${string}.bit` = "88828.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAABA", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`14141.bit` should result in "ABABA","100K"', () => {
    let bitName: `${string}.bit` = "14141.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABABA", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`60123.bit` should result in "XABCD","100K"', () => {
    let bitName: `${string}.bit` = "60123.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["XABCD", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`02000.bit` should result in "XX000","100K", "XXX00","ABAAA"', () => {
    let bitName: `${string}.bit` = "02000.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["XX000", "100K", "XXX00", "ABAAA"]));
  });
});

describe("DetectPatterns", () => {
  it('`00520.bit` should result in "00XX0","100K", "00XXX"', () => {
    let bitName: `${string}.bit` = "00520.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["00XX0", "100K", "00XXX"]));
  });
});

describe("DetectPatterns", () => {
  it('`00029.bit` should result in "000XX","100K","AAABC", "00XXX"', () => {
    let bitName: `${string}.bit` = "00029.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["000XX", "100K", "AAABC", "00XXX"]));
  });
});

describe("DetectPatterns", () => {
  it('`40420.bit` should result in "XX420","100K"', () => {
    let bitName: `${string}.bit` = "40420.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["XX420", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`44465.bit` should result in "AAABC","100K"', () => {
    let bitName: `${string}.bit` = "44465.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAABC", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`44226.bit` should result in "AABBC","100K"', () => {
    let bitName: `${string}.bit` = "44226.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AABBC", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`55122.bit` should result in "AABCC","100K"', () => {
    let bitName: `${string}.bit` = "55122.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AABCC", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`62444.bit` should result in "ABCCC","100K"', () => {
    let bitName: `${string}.bit` = "62444.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABCCC", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`42233.bit` should result in "ABBCC","100K"', () => {
    let bitName: `${string}.bit` = "42233.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBCC", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`05557.bit` should result in "ABBBC","100K"', () => {
    let bitName: `${string}.bit` = "05557.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBBC", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`26362.bit` should result in "ABCBA","100K"', () => {
    let bitName: `${string}.bit` = "26362.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABCBA", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`55569.bit` should result in "XXX69","100K","AAABC"', () => {
    let bitName: `${string}.bit` = "55569.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["XXX69", "100K", "AAABC"]));
  });
});

describe("DetectPatterns", () => {
  it('`69012.bit` should result in "69XXX","100K"', () => {
    let bitName: `${string}.bit` = "69012.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["69XXX", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`00421.bit` should result in "00XXX","100K"', () => {
    let bitName: `${string}.bit` = "00421.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["00XXX", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`50300.bit` should result in "XXX00","100K"', () => {
    let bitName: `${string}.bit` = "50300.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["XXX00", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`000000.bit` should result in "AAAAAA","00XX00", "XXX000", "000XXX", "AShareCode"', () => {
    let bitName: `${string}.bit` = "000000.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(
      result,
      new Set(["AAAAAA", "00XX00", "XXX000", "000XXX", "AShareCode"])
    );
  });
});

describe("DetectPatterns", () => {
  it('`277777.bit` should result in "ABBBBB"', () => {
    let bitName: `${string}.bit` = "277777.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBBBB"]));
  });
});

describe("DetectPatterns", () => {
  it('`77377.bit` should result in "AABAA", "100K"', () => {
    let bitName: `${string}.bit` = "77377.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AABAA", "100K"]));
  });
});

describe("DetectPatterns", () => {
  it('`225555.bit` should result in "AABBBB"', () => {
    let bitName: `${string}.bit` = "225555.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AABBBB"]));
  });
});

describe("DetectPatterns", () => {
  it('`555333.bit` should result in "AAABBB"', () => {
    let bitName: `${string}.bit` = "555333.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAABBB"]));
  });
});

describe("DetectPatterns", () => {
  it('`444411.bit` should result in "AAAABB"', () => {
    let bitName: `${string}.bit` = "444411.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAAABB"]));
  });
});

describe("DetectPatterns", () => {
  it('`555552.bit` should result in "AAAAAB"', () => {
    let bitName: `${string}.bit` = "555552.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAAAAB"]));
  });
});

describe("DetectPatterns", () => {
  it('`411411.bit` should result in "ABBABB"', () => {
    let bitName: `${string}.bit` = "411411.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBABB"]));
  });
});

describe("DetectPatterns", () => {
  it('`232323.bit` should result in "ABABAB"', () => {
    let bitName: `${string}.bit` = "232323.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABABAB"]));
  });
});

describe("DetectPatterns", () => {
  it('`002200.bit` should result in "00XX00"', () => {
    let bitName: `${string}.bit` = "002200.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["00XX00"]));
  });
});

describe("DetectPatterns", () => {
  it('`557799.bit` should result in "AABBCC"', () => {
    let bitName: `${string}.bit` = "557799.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AABBCC"]));
  });
});

describe("DetectPatterns", () => {
  it('`235555.bit` should result in "ABCCCC"', () => {
    let bitName: `${string}.bit` = "235555.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABCCCC"]));
  });
});

describe("DetectPatterns", () => {
  it('`155552.bit` should result in "ABBBBC"', () => {
    let bitName: `${string}.bit` = "155552.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBBBC"]));
  });
});

describe("DetectPatterns", () => {
  it('`523333.bit` should result in "ABCCCC"', () => {
    let bitName: `${string}.bit` = "523333.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABCCCC"]));
  });
});

describe("DetectPatterns", () => {
  it('`888834.bit` should result in "AAAABC"', () => {
    let bitName: `${string}.bit` = "888834.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAAABC"]));
  });
});

describe("DetectPatterns", () => {
  it('`245245.bit` should result in "ABCABC"', () => {
    let bitName: `${string}.bit` = "245245.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABCABC"]));
  });
});

describe("DetectPatterns", () => {
  it('`512420.bit` should result in "XXX420"', () => {
    let bitName: `${string}.bit` = "512420.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["XXX420"]));
  });
});

describe("DetectPatterns", () => {
  it('`420987.bit` should result in "420XXX"', () => {
    let bitName: `${string}.bit` = "420987.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["420XXX"]));
  });
});

describe("DetectPatterns", () => {
  it('`999000.bit` should result in "XXX000","AAABBB"', () => {
    let bitName: `${string}.bit` = "999000.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["XXX000", "AAABBB"]));
  });
});

describe("DetectPatterns", () => {
  it('`000202.bit` should result in "000XXX", "AShareCode"', () => {
    let bitName: `${string}.bit` = "000202.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["000XXX", "AShareCode"]));
  });
});

describe("DetectPatterns", () => {
  it('`601234.bit` should result in "AShareCode"', () => {
    let bitName: `${string}.bit` = "601234.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AShareCode"]));
  });
});

describe("DetectPatterns", () => {
  it('`601601.bit` should result in "AShareCode", "ABCABC"', () => {
    let bitName: `${string}.bit` = "601601.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AShareCode", "ABCABC"]));
  });
});

describe("DetectPatterns", () => {
  it('`602234.bit` should result in ""', () => {
    let bitName: `${string}.bit` = "602234.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set([]));
  });
});

describe("DetectPatterns", () => {
  it('`532969.bit` should result in "XXXX69"', () => {
    let bitName: `${string}.bit` = "532969.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["XXXX69"]));
  });
});

describe("DetectPatterns", () => {
  it('`4442222.bit` should result in "AAABBBB"', () => {
    let bitName: `${string}.bit` = "4442222.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAABBBB"]));
  });
});

describe("DetectPatterns", () => {
  it('`66662222.bit` should result in "AAAABBBB"', () => {
    let bitName: `${string}.bit` = "66662222.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["AAAABBBB"]));
  });
});

describe("DetectPatterns", () => {
  it('`4221224.bit` should result in "ABBCBBA"', () => {
    let bitName: `${string}.bit` = "4221224.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["ABBCBBA"]));
  });
});

describe("DetectPatterns", () => {
  it('`52722222222.bit` should result in "XXXAAAAAAAA"', () => {
    let bitName: `${string}.bit` = "52722222222.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["XXXAAAAAAAA"]));
  });
});

describe("DetectPatterns", () => {
  it('`0x0.bit` should result in "0x9","1Hex"', () => {
    let bitName: `${string}.bit` = "0x0.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["0x9", "1Hex"]));
  });
});

describe("DetectPatterns", () => {
  it('`0x92.bit` should result in "0x99","2Hex"', () => {
    let bitName: `${string}.bit` = "0x92.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["0x99", "2Hex"]));
  });
});

describe("DetectPatterns", () => {
  it('`0x629.bit` should result in "0x999","3Hex"', () => {
    let bitName: `${string}.bit` = "0x629.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["0x999", "3Hex"]));
  });
});

describe("DetectPatterns", () => {
  it('`0x9510.bit` should result in "0x10K"', () => {
    let bitName: `${string}.bit` = "0x9510.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["0x10K"]));
  });
});

describe("DetectPatterns", () => {
  it('`0xb.bit` should result in "1Hex"', () => {
    let bitName: `${string}.bit` = "0xb.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["1Hex"]));
  });
});

describe("DetectPatterns", () => {
  it('`0xc7.bit` should result in "2Hex"', () => {
    let bitName: `${string}.bit` = "0xc7.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["2Hex"]));
  });
});

describe("DetectPatterns", () => {
  it('`0xc7d.bit` should result in "3Hex"', () => {
    let bitName: `${string}.bit` = "0xc7d.bit";
    const result = detectPatterns(bitName);
    assert.deepEqual(result, new Set(["3Hex"]));
  });
});
