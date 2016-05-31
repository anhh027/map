window.onload=function(){
	var redCir=document.querySelector(".redCir");
	var rangle=document.querySelector(".rangle");
	var redCir2=document.querySelector(".redCir2");
	var rangle2=document.querySelector(".rangle21");
	var redCir3=document.querySelector(".redCir3");
	var rangle3=document.querySelector(".rangle31");
	var video=document.querySelector(".video");
	var del=document.querySelector(".del");
	var video2=document.querySelector(".video2");
	var del2=document.querySelector(".del2");
	var video3=document.querySelector(".video3");
	var del3=document.querySelector(".del3");
	redCir.onmouseover=function(){
		rangle.style.display="block";
	}
	redCir.onmouseout=function(){
		rangle.style.display="none";
	}
	video.onmouseover=function(){
		del.style.display="block";
	}
	video.onmouseout=function(){
		del.style.display="none";
	}
	redCir.onclick=function(){
		video.style.display="block";					
	}
	del.onclick=function(){
		video.style.display="none";					
	}
	redCir2.onmouseover=function(){
		rangle2.style.display="block";
	}
	redCir2.onmouseout=function(){
		rangle2.style.display="none";
	}
	redCir2.onclick=function(){
		video2.style.display="block";					
	}
	del2.onclick=function(){
		video2.style.display="none";			
		
	}
	video2.onmouseover=function(){
		del2.style.display="block";
	}
	video2.onmouseout=function(){
		del2.style.display="none";
	}
	redCir3.onmouseover=function(){
		rangle3.style.display="block";
	}
	redCir3.onmouseout=function(){
		rangle3.style.display="none";
	}
	redCir3.onclick=function(){
		video.style.display="block";					
	}
	redCir3.onclick=function(){
		video3.style.display="block";					
	}
	del3.onclick=function(){
		video3.style.display="none";			
		
	}
	video3.onmouseover=function(){
		del3.style.display="block";
	}
	video3.onmouseout=function(){
		del3.style.display="none";
	}
}