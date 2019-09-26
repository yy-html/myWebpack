$(function () {
   
    var cid = $("#cids").val();
    var bid = $("#bids").val();
    $("#brandinfo").hide();
    $.ajax({
        type: "post",
        url: "/search/getTitle",
        data: {"cid":cid,"bid":bid},
        success: function (data) {
            if (data != null && data.length > 0) {
                $("#brandinfo").show();
                for (var i = 0; i < data.length; i++) {
                    var message = "<li style='width:25%;float:left;text-decoration:underline;'><a href='/brandarticleDetail/" + data[i].id + ".htm ' target='_blank' >" + data[i].Title + "</a><li>";

                    $("#titltshow").append(message);

                }

            }
        }
    })
   

})