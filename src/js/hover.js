



				//首页 右栏隐藏导航
				$(function(){
					var ocurrent = $(".right_nav").offset().top;
					$(".right_nav").css({
					"display": "none"
				}); //默认状态	   
				$(window).scroll(function() {

					var scrolltop = $(document).scrollTop(); //返回的是滚动条距离顶部的位置

					if(scrolltop >= ocurrent) {

						$(".right_nav").css({
							"position": "fixed",
							
							'display': 'block'
						}); //让它固定到顶部
						$(".right_nav").fadeIn(); //淡入
					} else {
						$(".right_nav").fadeOut(); //淡出
						$(".right_nav").css({
							"display": "none"
						}); //默认状态

					}

				});
				//品牌特卖动画
				$('.tab-brand img').mouseenter(function(){ 
					var wValue=1.2 * $(this).width(); 
					var hValue=1.2 * $(this).height(); 
						$(this).animate({width: wValue, 
						height: hValue, 
					}, 500); 
				}).mouseleave(function(){ 
					$(this).stop().animate({width: "280", 
						height: "180", 
					left:"0px", 
					top:"0px"}, 500 ); 
				});
				
				//点击 返回顶部
				$(".back_top").on("click",function(){
					document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
				})
				
				})