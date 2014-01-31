define(["jquery"], function($){
    
    var components = {};
    
    function register_component(component_type){
        components[component_type.name] = component_type;

    };

    
    return {register_component:register_component};
});
