$(function () {
    //$.ajax({
    //    type: 'get',
    //    url: '/ProductPartial/GetBrowedProduct',
    //    data: {},
    //    dataType: 'json',
    //    cache: true,// 开启ajax缓存
    //    success: function (data) {
    //        if (data) {
    //            //console.log(data);
    //            var html = '';
    //            for (var i = 0; i < data.length; i++) {
    //                var text = ' <li><a href="/Product/Detail/' + data[i].ProductId + '" title="' + data[i].ProductName + '"><img  src="' + data[i].ImagePath + '/1_100.png" /></a></li>';
    //                html += text;
    //            }
    //            $("#_bList").prepend($(html));
    //        }
    //    },
    //    error: function (e) {
    //        //alert(e);
    //    }
    //});

    $("#searchBox").val($('#searchKeywords').text());

    $('.v-option .o-more').click(function () {
        if ($(this).hasClass('fold')) {
            $(this).removeClass('fold');
            $(this).parent().siblings().addClass('v-unfold');
        } else {
            $(this).addClass('fold');
            $(this).parent().siblings().removeClass('v-unfold');
        }
    });
    $('.brand-attr .a-values').each(function () {
        var h = $(this).find('.f-list').height();
        if (h > 65) {
            $(this).find('.v-option').show();
            $(this).find('.v-option .o-more').addClass("fold");
            //$(this).find('.v-unfold').addClass('v-fold').removeClass(".v-unfold");
        } else {
            $(this).find('.v-option').hide();
        }
    });
    $('.mc .a-values').each(function () {
        var h = $(this).find('.f-list').height();
        if (h > 26) {
            $(this).find('.v-option').show();
            $(this).find('.v-option .o-more').addClass("fold");
            //$(this).find('.v-unfold').addClass('v-fold').removeClass(".v-unfold");
        } else {
            $(this).find('.v-option').hide();
        }
    });

    //关注商品
    $(".btn-coll").click(function () {
        var gid = $(this).attr('gid');
        checkLogin(function (func) {
            addFavoriteFun(gid, func);
        });
    });
});


function loadHotSales() {
    $.ajax({
        type: 'POST',
        url: '/search/GetHotSaleBrowser',
        data: { CategoryID: $("#SearchCategoriesId").val(), BrandId: $("#SearchBrandsId").val() },
        dataType: 'JSON',
        success: function (data) {
            $(".S-content-b .left").append(data.hothistorybrowser);
        }
    });
}

function addFavoriteFun(gid, callBack) {
    $.post('/Product/AddFavoriteProduct', { pid: gid }, function (result) {
        if (result.successful == true) {
            if (result.favorited == true) {
                $.dialog.alert('<p><em>' + result.mess + '</em></p>');
            } else {
                $.dialog.succeedTips(result.mess, null, 0.5);
            }
        }
        (function () { callBack && callBack(); })();

    });
}




function checkLogin(callBack) {
    var memberId = $.cookie('Himall-User');
    if (memberId) {
        callBack();
    }
    else {
        $.fn.login({}, function () {
            callBack(function () { location.reload(); });
        }, '', '', '/Login/Login');
    }
}

//点击图片预览
$(".main").on("mouseover", ".scale-img img", function () {
    //var imgSrc = $(this).parent().parent().parent().find(".p-img img").attr("src");
    $(this).parent().parent().parent().find(".p-img img").attr("src", $(this).attr("data-url-max"));
    //$(this).attr("src", imgSrc);
})


//加入购物车
$("label[id^='addCart_']").click(function (e) {
    var gid = $(this).attr("id").split('_')[1];//商品ID
    var sku = gid + "_0_0_0";

    $.post("/cart/verificationToCart", { id: gid }, function (data) {
        if (data.success) {
            var loading = showLoading();
            $.ajax({
                type: 'POST',
                url: "/cart/AddProductToCart?skuId=" + sku + "&count=1",
                dataType: 'json',
                success: function (data) {
                    loading.close();
                    if (data.success == true) {
                        var cartOffset = $("#right_cart").offset(),
                            h = $(document).scrollTop();
                        flySrc = $("#addCart_" + gid).parent().parent().find(".p-img img").attr("src");

                        flyer = $('<img class="cart-flyer" src="' + flySrc + '"/>');
                        flyer.fly({
                            start: {
                                left: e.pageX,
                                top: e.pageY - h - 30
                            },
                            end: {
                                left: cartOffset.left,
                                top: cartOffset.top - h + 30,
                                width: 20,
                                height: 20
                            },
                            onEnd: function () {
                                this.destory(); //移除dom 
                                refreshCartProducts();
                            }
                        });
                    } else {
                        loading.close();
                        $.dialog.errorTips(data.msg);
                    }
                },
                error: function (e) {
                    //loading.close();
                    $.dialog.errorTips('加入购物车失败');
                }
            });
        } else {
            window.location.href = "/productdetail/" + gid+".htm";
        }
    }, "json")
});
