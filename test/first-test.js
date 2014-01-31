define(["foo"], function(foo) {
    

    QUnit.test( "hello test", function() {
        ok( 1 == "1", "Passed!" );
    });
    
    QUnit.test("Foo test", function(){
        x = new foo.Foo();
        ok(x.getTemplate().indexOf("foo") != 0);
    });

});
