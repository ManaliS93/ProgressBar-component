This is an implementation of javascript component to create progress bar.
It is implemented using HTML, plain javascript and css.
To initialize a progress bar, ProgressBar() can be called with following specifications:

var pb = new ProgressBar({    
	place : 'element_id',
	min : 0 ,
	max : 100 ,
	curr : 40,
	width : 100,
	color : "blue"
});
User must specify the place property but other propertirs are optional.
Here, place denotes the id of element that will contain the progress bar, min denotes the minimum value of progress bar, max denotes the maximum value of progress bar, curr denotes the current progress in progress bar,width denotes the width of the progress bar and color denotes the color of the progress bar.

The above object can aditionally be altered to dynamically set min, max and current values, along with color and width of the progress bar.

Methods:
The function addProgress(value) is used to increase progress value of the progress bar.
The function setColor(color) is used to change the color of the progress bar.
The function setTextColor(color) is used to change the color of the text on the progress bar.
The function setWidth(value) is used to change the width of the progress bar to the specified value.

The main component of progress bar is implemented in script.js file.
The examples of different progress bars are shown in the index.html file. The file also includes a possible use case scenario for progress bar.
The examples are set to test different values for min, max, color and width. It also tests invalid values for the same attributes.

Possible Future Work:
The progress bar can be modified to handle floating point numbers for min max and current value of the progress bar.
The component can be modified to include different shapes for the progress bar like circle, vertical bar etc.
We can dynamically change colors of the component based on the value of the progress bar. for e.g. changing color from red to green as the value reaches 100%.