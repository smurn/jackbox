define([], function(){
    
    var Foo = function(){};
    
    Foo.prototype.getTemplate = function(){
        return "<p>foo</p>";
    };
    
    return {Foo:Foo};
});
