//// [taggedTemplateWithConstructableTag01.ts]
class CtorTag { }

CtorTag `Hello world!`;

//// [taggedTemplateWithConstructableTag01.js]
var __getTemplateObject = (this && this.__getTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) {
        return Object.defineProperty(cooked, "raw", { value: raw });
    }
    cooked.raw = raw;
    return cooked;
};
var CtorTag = /** @class */ (function () {
    function CtorTag() {
    }
    return CtorTag;
}());
CtorTag(_a || (_a = __getTemplateObject(["Hello world!"], ["Hello world!"])));
var _a;
