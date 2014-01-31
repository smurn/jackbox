test( "hello test", function() {
ok( 1 == "1", "Passed!" );
});

test("Foo test", function(){
    foo = Foo();
    ok(foo.getTemplate().indexOf("foo") != 0)
});
