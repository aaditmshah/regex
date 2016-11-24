var Regex = require("..");

var regex = new Regex(/(a|b)*abb/);
var regex2 = new Regex(/[a-b]*abb/);
var regex3 = new Regex(/.*abb/);
var regex4 = new Regex(/.*/);

if (regex.test("abb") &&
    regex.test("aabb") &&
    regex.test("babb") &&
    regex.test("aaabb") &&
    regex.test("ababb") &&
    regex2.test("aabb") &&
    regex3.test("aabb") &&
    regex4.test("aabb") &&
    !regex.test("abba") &&
    !regex.test("cabb")) console.log("Passed all tests.");
else {
    console.error("Failed test(s).");
    process.exit(1);
}
