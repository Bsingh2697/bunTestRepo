"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
let bharat = {
    name: 'INDIA',
    religion: 'Hindu',
    gender: Gender.MALE
};
let Max = {
    id: 10,
    testId: 'ONE',
    name: 'Max',
    age: 20,
    standard: [3, 'C']
};
let obj = {
    fname: 'John',
    ag: 10
};
console.log(process.env.PORT_NUM);
//# sourceMappingURL=index.js.map