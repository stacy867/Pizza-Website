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


    function placeOrder(size, crust, toppings) {
        this.sizeChoice = size;
        this.sizeCrust = crust;
        this.sizeTopping = toppings;
        this.totalprice = total;

    }
    placeOrder.prototype.summary = function() {

        return "pizzasize: " + this.sizeChoice + ", crust:" + this.sizeCrust + ", toppings:" + this.sizeTopping;
    };



    $("#submit").click(function() {
        var size = $('#size').val();
        var crust = $('#crust').val();
        var toppings = [];
        $("input[type=checkbox]:checked").each(function() {
            toppings.push($(this).val());
        });
        console.log(toppings);

        var newOrder = new placeOrder(size, crust, toppings);
        console.log(newOrder);
        $('ul#placeorderlist').append("<li>" + newOrder.summary() + "</li>");



        // console.log(newSummary);

        var anotherTopping = 0;
        for (var a = 0; a < toppings.length; a++) {
            anotherTopping += parseInt(toppings[a]);

        }
        // console.log(anotherTopping);
        // return anotherTopping;
        var total = parseInt(size) + parseInt(crust) + parseInt(anotherTopping);
        console.log(total);
        // alert('the pizza size ' + size + 'crust of your pizza ' + crust + 'topping of pizza ' + toppings + 'the total is ' + total);
        $("#total").text(total);
    });

    $("#summary").click(function() {
        var newSummary = [];
        newSummary.push(newOrder.summary());
        // alert("here is your summary " + newSummary);
        alert('here is your summary ' + newOrder.summary());


    });
    $('#img').click(function() {

        alert("the delivery cost is 2000");
        var a = prompt("enter ur location");
        alert("your order will be delivered to" + a);
    });


});










// $("#pizza-size").text(newOrder.sizeChoice);
// $("#pizza-crust").text(newOrder.sizeCrust);
// $("#pizza-topping").text(newOrder.sizeTopping);
// });