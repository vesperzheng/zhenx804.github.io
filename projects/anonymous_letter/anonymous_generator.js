

    	function set(){
    		var letters=document.getElementById('letter').value;
    		var letterarr=letters.split('');
    		for(var i=0;i<letterarr.length;i++){
    			var letter=letterarr[i]
    		  	if(letter!=null){
    				var n=getRandomNumber();
    		    	var imgpath="img"+n+"/"+letter+n+".png";
    		    	console.log(imgpath)
    		  		setimg(imgpath,"add")
    		   
    		   }
    		
    		}
    	}
    	
    	function clear1(){
    		var mydiv = document.getElementById("add");
			mydiv.innerHTML ='';
    	}
    	
    	//addimg
    	function setimg(imgpath,divid){
			var mydiv = document.getElementById(divid);
    		var bigImg = document.createElement("img");     
    		bigImg.width="40";
          	bigImg.src=imgpath;   
    	  	mydiv.appendChild(bigImg);  
    	  	
         		   
    	}
    	
    	//Getting 123 Random Numbers
    	function getRandomNumber(){
    		return  Math.floor( Math.random()*(4-1)+1);
    	}
    	 
