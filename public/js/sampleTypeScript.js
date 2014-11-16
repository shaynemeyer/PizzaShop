/**
 * Created by shayne on 11/13/14.
 */
var FooBar = (function () {
    function FooBar() {
        this.fullName = "Shayne";
    }
    FooBar.prototype.showMe = function () {
        console.log(this.fullName);
    };
    return FooBar;
})();
var foo = new FooBar();
foo.showMe();
//# sourceMappingURL=sampleTypeScript.js.map