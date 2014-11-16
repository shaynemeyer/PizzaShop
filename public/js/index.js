// index.js
(function () {
    "use strict";

    /**
     * Submits an order
     * @param parameters
     */
    function submitOrder(parameters) {
        var validate = parameters.validate;
        var size = parameters.size;
        var crust = parameters.crust;
        var toppings = parameters.toppings;
        alert("not implemented");
    }

    $(document).ready(function(){
       $("#orderForm").on("submit", function() {
           submitOrder({validate: true, size: "large", crust: "thing", toppings: ["pepperoni", "sausage"]});
           return false;
       });
    });

    var dog = new Animal();
    dog.name = "Lucky";
    dog.legCount = 3;
    dog.feed("Lamb Shank");

    var toInsert = "<div>\n    <ul>\n        <li>item 1</li>\n        <li>item 2</li>\n        <li>item 3</li>\n    </ul>\n</div>";

    var toExecute = "var x = 0;\nx++;\nx = 5;";


})();