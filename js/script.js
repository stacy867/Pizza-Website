//USER INTERFACE
$(document).ready(function() {
    $("#addmore").click(function() {
        $("#form").append(' <div id="form">' +
            '< label > <strong>choose the size of the pizza</strong> <br>' +
            '<select>SIZE' +
            '<option value="1000">Small</option>' +
            '<option value="1500">Medium</option>' +
            '<option value="3000">Large</option>' +
            '</select>' +
            '</label> <br><br>' +
            '<label><strong>Choose the crust of your pizza</strong><br>' +
            '<select>' +
            '<option value="1000">Crispy</option>' +
            '<option value="1500">Stuffed</option>' +
            '<option value="1200">Gluten Free</option>' +
            '</select>' +
            '</label><br><br>' +
            '<label><strong>Choose the topings</strong><br>' +
            '<select>' +
            '<option value="300">Pepperoni</option>' +
            '<option value="450">Mushrooms</option>' +
            '<option value="500"> Onions</option>' +
            '<option value="540"> Sausage</option>' +
            '</select>' +
            '</label><br><br>' +
            '<input type="submit" value="SUBMIT">' +
            '<input type="submit" id="addmore" value="ADDMORE"><br><br>' +
            '<input type="submit" value="SUMMARY">' +

            '</div>' +
            '</form>');
    });

    function placeOrder(size, crust, toppings) {
        this.sizeChoice = size;
        this.sizeCrust = crust;
        this.sizeTopping = toppings;

    }
    placeOrder.prototype.summary = function() {
        return this.sizeChoice + "," + this.sizeCrust + "," + this.sizeTopping;
    };
    var sizeChoice = [];
    $.each($("#size option:selected"), function() {
        sizeChoice.push($(this).val());
    });
    for (var i = 0; i < sizeChoice.length; i++) {
        console.log = (sizeChoice);
    }

    var sizeCrust = [];
    $.each($("#crust option:selected"), function() {
        sizeCrust.push($(this).val());
    });
    for (var j = 0; j < sizeCrust.length; j++) {
        console.log = (sizeCrust);
    }
    var sizeTopping = [];
    $.each($("#topping option:selected"), function() {
        sizeTopping.push($(this).val());
    });
    for (var k = 0; k < sizeTopping.length; k++) {
        console.log = (sizeTopping);
    }
    $("#submit").click(function() {

        var total = parseInt(sizeChoice[i]) + parseInt(sizeCrust[j]) + parseInt(sizeTopping[k]);
        alert(total);
    });
    var newOrder = new placeOrder(sizeChoice[i], sizeCrust[j], sizeTopping[k]);
    console.log = (newOrder);
    // $('ul#placeorderlist').append("<li><span>" + newOrder.summary() + "</span></li>");

    // $("#pizza").show();

    // $("#pizza-size").text(newOrder.sizeChoice);
    // $("#pizza-crust").text(newOrder.sizeCrust);
    // $("#pizza-topping").text(newOrder.sizeTopping);



});
$('select#size').val();
console.log()
$('select#crust').val();
console.log()
$('select#topping').val();
console.log;




//BUSINESS LOGIC