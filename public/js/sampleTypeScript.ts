/**
 * Created by shayne on 11/13/14.
 */
class FooBar {
    private fullName = "Shayne";
    showMe(){
        console.log(this.fullName);
    }
}

var foo = new FooBar();
foo.showMe();