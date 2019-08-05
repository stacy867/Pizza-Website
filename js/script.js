//USER INTERFACE
$(document).ready(function() {
    // $("#addmore").click(function() {
    //     $("#form").append(' <div id="form">' +
    //         '< label > <strong>choose the size of the pizza</strong> <br></label> ' +
    //         '<select>SIZE' +
    //         '<option value="1000">Small</option>' +
    //         '<option value="1500">Medium</option>' +
    //         '<option value="3000">Large</option>' +
    //         '</select>' +
    //         '</label> <br><br>' +
    //         '<label><strong>Choose the crust of your pizza</strong><br>' +
    //         '<select>' +
    //         '<option value="1000">Crispy</option>' +
    //         '<option value="1500">Stuffed</option>' +
    //         '<option value="1200">Gluten Free</option>' +
    //         '</select>' +
    //         '</label><br><br>' +
    //         '<label><strong>Choose the topings</strong><br>' +
    //         '<select>' +
    //         '<option value="300">Pepperoni</option>' +
    //         '<option value="450">Mushrooms</option>' +
    //         '<option value="500"> Onions</option>' +
    //         '<option value="540"> Sausage</option>' +
    //         '</select>' +
    //         '</label><br><br>' +
    //         '<input type="submit" value="SUBMIT">' +
    //         '<input type="submit" id="addmore" value="ADDMORE"><br><br>' +
    //         '<input type="submit" value="SUMMARY">' +

    //         '</div>' +
    //         '</form>');
    // });

    function placeOrder(size, crust, toppings) {
        this.sizeChoice = size;
        this.sizeCrust = crust;
        this.sizeTopping = toppings;

    }

    placeOrder.prototype.summary = function() {
        return this.sizeChoice + "," + this.sizeCrust + "," + this.sizeTopping;
    };
    var newSummary = [];

    // var sizeChoice = [];
    // $.each($("#size option:selected"), function() {
    //         sizeChoice.push($(this.val())
    //         });
    //     for (var i = 0; i < sizeChoice.length; i++) {
    //         console.log = (sizeChoice);
    //     }

    //     var sizeCrust = []; $.each($("#crust option:selected"), function() {
    //         sizeCrust.push($(this("#crust")).val());
    //     });
    //     for (var j = 0; j < sizeCrust.length; j++) {
    //         console.log = (sizeCrust);
    //     }


    // var sizeTopping = [];
    // $.each($("#topping option:selected"), function() {
    //     sizeTopping.push($(this("#topping")).val());
    // });
    // for (var k = 0; k < sizeTopping.length; k++) {
    //     console.log = (sizeTopping);
    // }
    $("form").submit(function(event) {
        var size = $('#size').val();
        var crust = $('#crust').val();
        var toppings = [];
        $("input[type=checkbox]:checked").each(function() {
            toppings.push($(this).val());
        });
        console.log(toppings);

        var newOrder = new placeOrder(size, crust, toppings);
        console.log(newOrder);


        newSummary.push(newOrder.summary());

        alert('the pizza size' + size + 'crust of your pizza' + crust + 'topping of pizza' + toppings);



        // alert(newOrder.summary());
        event.preventDefault();

        var anotherTopping = 0;
        for (var a = 0; a < toppings.length; a++) {
            anotherTopping += parseInt(toppings[a]);

        }
        console.log(anotherTopping);
        var total = parseInt(size) + parseInt(crust) + parseInt(anotherTopping);
        alert('the total is ' + total);
        return anotherTopping;


    });


    $('ul#placeorderlist').append("<li><span>" + newOrder.summary() + "</span></li>");

    $("#summary").submit(function() {
        $("#pizza-size").text(placeOrder.size);
        $("#pizza-crust").text(placeOrder.crust);
        $("#pizza-topping").text(placeOrder.toppings);

    });



});



// $('select#size').val(); console.log() $('select#crust').val(); console.log() $('select#topping').val(); console.log;




//BUSINESS LOGIC