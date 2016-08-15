$(function(){
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    // alert(w,h);
    // alert(h);
    $('.boxs').height(h);
    function initScroll( sClass ){
        myScroll = new IScroll(sClass,{
            vScroll: true,
            bounce: true,
            checkDOMChanges: true,
            resizeScrollbars: true,
            click: true
        });
    }

    $(document).on('click','#page1 .content .item',function(){
        var page = $(this).data('page');
        console.log(page);
        window.location.href= 'page-'+page+'.html';
    })

    $('.btn').on('touchstart',function(){
        if (!$(this).hasClass('active')) {
            var $p = $(this).parent();
            var i = $p.find('.btn').index($(this));
            // console.log(i);
            $p.find('.btn').removeClass('active').eq(i).addClass('active');
            $p.parent().parent().find('.box').hide().eq(i).show();
            $p.parent().parent().find('.box').removeClass('wrapper').eq(i).addClass('wrapper');
            initScroll('.wrapper');
        }
    })
    $('.discount-bg').on('click',function(){
        console.log(1111);
        $(this).closest('.page').hide();
        $('#page-detail').show();
    })
    // 使用规则弹窗
    $('.ruleBtn a').on('click',function(){
        $('#layer-rule').show();
    })
    $('.rule-close').on('click',function(){
        $(this).closest('.layer').hide();
    })
    // 个人信息提交
    $('#msgSubmit').click(function(){
		var phoneNum = $('#phoneNum').val();
        var carLicense = $('#carLicense').val();
        var invoiceTitle = $('#invoiceTitle').val();
        // console.log(phoneNum,carLicense,invoiceTitle);
        if(!phoneNum.match(/^1\d{10}$/)){
			alert('请输入正确的手机号码');
		    return;
		}
        if (!(phoneNum&&carLicense&&invoiceTitle)) {
            alert('请填写完整信息');
            return;
        }else {
            alert('提交成功！');
            return;
        }
        // $.ajax({
        //     type:"POST",
        //     url:"http://localhost",
        //     data:{
        //         action:"match",
        //         phoneNum:phoneNum,
        //         carLicense:carLicense,
        //         invoiceTitle:invoiceTitle
        //     },
        //     dataType:"json",
        //     success:function (obj) {
        //         //如果返回值为1则登陆成功
        //         if (obj == '1') {
        //             name.val("");
        //             password.val("");
        //             location = "http://localhost/interview/1-php/land.html";
        //         } else if(obj == '0') {
        //             //如果返回值为0则登陆失败
        //             alert("您输入的帐号密码错误请重新登录");
        //             name.val("");
        //             password.val("");
        //         }
        //     }
        // });
    })
    // 加油卡绑定确认
    $('.confirmBtn').on('click',function(){
        var cardNum = $(this).parent().children('.cardNum').text();
        // console.log(cardNum);
        $(this).closest('.page').hide();
        $('#page-confirm').show();
    })
    // 加油卡删除
    $('.confirmDel').click(function(){
        var cardNum = $(this).parent().children('.cardNum').text();
        console.log(cardNum);
        $(this).closest('.oil-card').remove();
        // $.ajax({
            //     type:"POST",
            //     url:"http://localhost",
            //     data:{
            //         action:"match",
            //         phoneNum:phoneNum,
            //         carLicense:carLicense,
            //         invoiceTitle:invoiceTitle
            //     },
            //     dataType:"json",
            //     success:function (obj) {
            //         //如果返回值为1则登陆成功
            //         if (obj == '1') {
            //             name.val("");
            //             password.val("");
            //             location = "http://localhost/interview/1-php/land.html";
            //         } else if(obj == '0') {
            //             //如果返回值为0则登陆失败
            //             alert("您输入的帐号密码错误请重新登录");
            //             name.val("");
            //             password.val("");
            //         }
            //     }
            // });

        // })
    })
    // 加油卡绑定信息页
    $('#cardSubmit').click(function(){
        console.log('加油卡绑定');
        var oilNum = $('#oilNum').val();
        var certificateNum = $('#certificateNum').val();
        // console.log(phoneNum,carLicense,invoiceTitle);
        if (!(oilNum&&certificateNum)) {
            alert('请填写完整信息');
            return;
        }else {
            alert('加油卡绑定成功！');
            $(this).closest('.page').hide();
            $('#page-oilcard').show();
        }
        // $.ajax({
        //     type:"POST",
        //     url:"http://localhost",
        //     data:{
        //         action:"match",
        //         phoneNum:phoneNum,
        //         carLicense:carLicense,
        //         invoiceTitle:invoiceTitle
        //     },
        //     dataType:"json",
        //     success:function (obj) {
        //         //如果返回值为1则登陆成功
        //         if (obj == '1') {
        //             name.val("");
        //             password.val("");
        //             location = "http://localhost/interview/1-php/land.html";
        //         } else if(obj == '0') {
        //             //如果返回值为0则登陆失败
        //             alert("您输入的帐号密码错误请重新登录");
        //             name.val("");
        //             password.val("");
        //         }
        //     }
        // });
    })

    $("#container").on('touchmove','nav, .btn-wrap',function(event){
        event.preventDefault();
        // alert('hhh');
    });
    $('#page-install, #page-confirm').on('touchmove',function(event){
        event.preventDefault();
    })


})
