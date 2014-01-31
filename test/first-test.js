require(["jquery", "foo"], function(jquery, foo) {

    test( "hello test", function() {
        ok( 1 == "1", "Passed!" );
    });
    
    test("Foo test", function(){
        x = new foo.Foo();
        ok(x.getTemplate().indexOf("foo") != 0);
    });

});