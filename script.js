//if user hit save, send the description to local storage
$(document).ready(function() {
    //syntax to sleect an element using Jquery
    var btnArray = $(".saveBtn");

    //.each is jquery's version of a for loop
    btnArray.each(function(index) {
        //we need to start the index at 9 as opposed to it's default start of 0
        var myIndex = index;
        myIndex = myIndex + 9;

        // We are adding the click event listener to each element in our btnArray
        // this refers to the current element that is being iterated
            // if myIndex = 9...`this` is the same as btnArray[9]
            // if myIndex = 10...`this` is the same as btnArray[10]
        $(this).click(function() {
            var textvalue = $("#data-" + myIndex).val();
            localStorage.setItem("hour-" + myIndex, textvalue);
        });
    });

    for (var i = 9; i <= 18; i++) {
        //retrieve data from local storage and display in browser
        var textvalue = localStorage.getItem("hour-" + i);
        $("#data-" + i).val(textvalue); //how to change value of elements in jquery; data is where we want to put the data
    }
});