;( function( window ) {

  'use strict';
  
  function extend( a, b ) { // to check which properties are set by the user.
    for( var key in b ) { 
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }
  
   function ProgressBar( options ) {
    this.options = extend( {}, this.options );
    extend( this.options, options );
    this._init();
  }
  
  ProgressBar.prototype.options = {   //the default values of the progress bar.
	place : "progress_bar",
	curr : 0,
    min : 0,
    max : 100,
    color : "#e9e2e2",
	width : 100 
  }
  ProgressBar.prototype._init = function() {
													// Create element
	
    this.sa = document.createElement('div');
    this.sa.className = 'progress_bar_field ' + this.options.place;
	this.sa.id = 'progress_bar_field ' + this.options.place;
													// create bar element for progress bar
	var bar = document.createElement('div');
	bar.id = 'bar-line '+this.options.place;
	var minmax = document.createElement('div');
	minmax.className = "min-class";
    var strinner = '';
    strinner += 'Min = '+this.options.min+' | Max = '+this.options.max;
   
   
    this.sa.style.width=this.options.width+"%";
    minmax.innerHTML = strinner;
	
	bar.style.height = "20px";
	bar.style.backgroundColor = this.options.color;
	
	this.sa.appendChild(bar);
	this.sa.appendChild(minmax);
	
	this.show();
    
  };
  ProgressBar.prototype.addProgress = function(value){
	  
	  
	  if(this.options.curr < this.options.min ){								//if current value is less than min, current becomes min.
		  this.options.curr = this.options.min ;
	  }
	  myMoveIncrease((this.options.curr + value),this.options.min,this.options.max,this.options.color,this.options.place,this.options.curr);
	  this.options.curr=this.options.curr + value;
	
  };
   ProgressBar.prototype.show = function(){
	   var place = document.getElementById(this.options.place);
	 
	   place.appendChild(this.sa);
	   myMove(this.options.curr,this.options.min,this.options.max,this.options.color,this.options.place);
	   
   };
    
  // Animation
  function myMove(curr,min,max,color,place) {		
		if(curr < min ){								//if current value is less than min, current becomes min.
			curr = min;
		  }
		var newcurr=((curr-min)/(max - min))*100;
		
		var elem = document.getElementById("bar-line "+place); 
		
		var pos = min;
	
	
	
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == newcurr || pos >= newcurr || pos >= 100) {
				clearInterval(id);
				elem.innerHTML =pos + '%';
				elem.style.width = pos + '%'; 
				
			} else {
				pos=pos+1; 
				elem.style.width = pos + '%'; 
				elem.innerHTML = pos + '%';
				
				
			}
		}
	}
	function myMoveIncrease(curr,min,max,color,place,currLast) {		
		if(curr < min ){								//if current value is less than min, current becomes min.
			curr = min;
		  }
		var newcurr=((curr-min)/(max - min))*100;
		
		var elem = document.getElementById("bar-line "+place); 
		
		var pos = currLast;
	
	
	
    var id = setInterval(frame, 12);
    function frame() {
        if (pos == newcurr || pos >= newcurr || pos >= 100) {
				clearInterval(id);
				elem.innerHTML =pos + '%';
				elem.style.width = pos + '%'; 
			} else {
				pos=pos+1; 
				elem.style.width = pos + '%'; 
				elem.innerHTML = pos + '%';
				
				
			}
		}
	}
	
	ProgressBar.prototype.setColor = function(color){  //for changing color of progress bar
		var elem = document.getElementById("bar-line "+this.options.place); 
		elem.style.backgroundColor = color;
		this.show();
	};
	ProgressBar.prototype.setTextColor = function(color){      //for changing Color of the text on progress bar
		var elem = document.getElementById("bar-line "+this.options.place); 
		elem.style.color = color;
		this.show();
	};
	ProgressBar.prototype.setWidth = function(value){     //for changing width of progress bar
		 
		this.sa.style.width=value+"%";
		this.show();
	};


    window.ProgressBar = ProgressBar;

})( window );