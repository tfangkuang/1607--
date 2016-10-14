/*
* @Author: far
* @Date:   2016-10-10 13:37:58
* @Last Modified by:   far
* @Last Modified time: 2016-10-10 15:59:25
*/

'use strict';
// var userId2 = document.getElementById("userId");
$(function() {

	 $("#userId").focus(function(){   //获得焦点的样式
    	$(this).css({'borderColor':'#7a8d54'});
    	$('#userId_MoRen').html('');
    });
    $("#userId").blur(function(){    //失去焦点的样式
    	$(this).css({'borderColor':'#cfcfd1'}); 
    	if(this.value =='') {
    		$('#userId_MoRen').html('请输入手机号');
    	}
    	else{
    		$('#userId_MoRen').html('');
    	}
    });
    $("#passWord").focus(function(){   //获得焦点的样式
    	$(this).css({'borderColor':'#7a8d54'});
    	$('#passWord_MoRen').html('');
    });
    $("#passWord").blur(function(){    //失去焦点的样式
    	$(this).css({'borderColor':'#cfcfd1'}); 
    	if(this.value =='') {
    		$('#passWord_MoRen').html('请输入密码');
    	}
    	else{
    		$('#passWord_MoRen').html('');
    	}	
    });
    var flag;
    $("#remberUserId").click(function() {

        $(this).css({"background":"url(images/load1101.png) no-repeat -406px -216px"});
        // cookie();
    });
	$(".r_load_btn").on('click',function() {

		var userId = $("#userId").val();
		var passWord = $("#passWord").val();
		var userPhone = JSON.parse($.cookie('userInfo')).userName;
		var userPwd = JSON.parse($.cookie('userInfo')).pwd;
         if(userId != userPhone) {
         	$("#userId_error").css("display","block");
         	$("#userId_ok").css("display","none");
         }else{
         	$("#userId_error").css("display","none");
         	$("#userId_ok").css("display","block");
         }
         if(passWord != userPwd){
			$("#passWord_error").css("display","block");
         	$("#passWord_ok").css("display","none");
		}else{
			$("#passWord_error").css("display","none");
         	$("#passWord_ok").css("display","block");
		}
		if(userId === userPhone && passWord === userPwd){
			// window.location.href = "index.html";
			alert("哈哈,注册和登录都好了")
		}
	})
})

// function cookie(){
// 		var userInfo = {};
// 		userInfo.userName = userId2.value;
// 		$.cookie("userInfo",JSON.stringify(userInfo),{expires: 14,path:"/"});
// 	}