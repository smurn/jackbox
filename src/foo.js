define([], function(){
    
    function Foo(){};
    
    Foo.prototype.getTemplate = function(){
        return "<p>foo</p>";
    };
    
    return {Foo:Foo};
});
