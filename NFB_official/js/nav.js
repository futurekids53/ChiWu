var main = function(){

	$("nav").append(

		'<div class="container">'+

		    '<div class="navbar-header">'+
		        
		        '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'+
		          '<span class="sr-only">Toggle navigation</span>'+
		          '<span class="icon-bar"></span>'+
		          '<span class="icon-bar"></span>'+
		          '<span class="icon-bar"></span>'+
		        '</button>'+

		        '<a class="navbar-brand" href="../index.html"><img class="logo-brand" src="../img/logo/logo.jpg"></a>'+
		      
		    '</div>'+

	      	'<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+

		        '<ul class="nav navbar-nav">'+
		          
		          '<li><a href="../event/event_main.html">	精彩活動	</a></li>'+
		          
		          '<li class="dropdown">'+
		            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">	電視劇	<span class="caret"></span></a>'+
		            '<ul class="dropdown-menu" role="menu">'+
		              '<li><a href="../tvshow/story.html">			劇情大綱</a></li>'+
		              '<li><a href="../tvshow/maincharacter.html">	主要角色</a></li>'+
		              '<li><a href="../tvshow/costar_02.html">		徵婚者	</a></li>'+
		              '<li><a href="../tvshow/scene.html">			劇中場景</a></li>'+
		            '</ul>'+
		          '</li>'+

		          '<li><a href="../eshow/eshow_main.html">	網路劇場	</a></li>'+
		          
		          '<li class="dropdown">'+
		            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">徵婚起笑<span class="caret"></span></a>'+
		            '<ul class="dropdown-menu" role="menu">'+
		              '<li><a href="../talkshow/theme.html">	主題介紹		</a></li>'+
		              '<li><a href="../talkshow/aboutCG.html">	Comedy Girls	</a></li>'+
		            '</ul>'+
		          '</li>'+  
		        '</ul>'+

	        '<ul class="nav navbar-nav navbar-right socialLogo">'+
	          '<li><a href="https://www.facebook.com/Mr.RightWanted" target="_blank"><img class="socialIcon" src="../img/logo/icon_fb_s.png"></a></li>'+
	          '<li><a href="https://www.youtube.com/user/udnproductions" target="_blank"><img class="socialIcon" src="../img/logo/icon_yt_s.png"></a></li>'+
	          //'<li><a href="#"><img class="socialIcon" src="../img/logo/icon_wb_s.png"></a></li>'+
	          //'<li><a href="#"><img class="socialIcon" src="../img/logo/icon_ad_s.png"></a></li>'+
	          //'<li><a href="#"><img class="socialIcon" src="../img/logo/icon_ap_s.png"></a></li>'+
	        '</ul>'+
	    '</div>'+
    '</div>'

    );

	$('#copyright').append(

		'<div class="col-xs-12 col-sm-12 col-md-12">'+
        '<ul class="footnav">'+
            '<li>©2014 UDN Production, Inc. All Rights Reserved.</li>'+
            '<li><a href="../shop/product.html">相關商品</a></li>'+
            '<li><a href="../media/type.html">媒體曝光</a></li>'+
            '<li><a href="../aboutus/team.html">製作團隊</a></li>'+
        '</ul>'+
      '</div>'

	);

	$('.dropdown-toggle').dropdown();
}

$(document).ready(main);
