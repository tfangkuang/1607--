$(function(){
	/*加入购物车*/
	$("#jiaru").click(function(){
		var goodsinfo = $.cookie("user") ? JSON.parse($.cookie("user")) : {};
		var gname = $("#txt").html();
		if(goodsinfo["goods"]){
			var addgood = goodsinfo["goods"]
		}else{
			goodsinfo["goods"] = {};
			var addgood = goodsinfo["goods"];
		}
		var isCreat = true;	
		for(i in addgood){
			if(i == gname){
				var tmp = addgood[gname]
				tmp["num"] = parseInt(tmp.num) + parseInt($("#gNum").val())
				isCreat = false
				break;			
			}			
		}
		if(isCreat){
			addgood[gname] = {
				"picsrc" : picSrc,
				"info" : gname,
				"price" : $("#Gprice").html(),
				"num" : $("#gNum").val(),
				"del" : $("#delPrice").html()
			}				
		}
		console.log(goodsinfo["goods"][gname])
		$.cookie("user",JSON.stringify(goodsinfo),{"expires":7,"path":"/"})
		alert("添加成功")
	})

	
})
