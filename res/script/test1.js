document.write("file-1.js<br>");
/*
function include(dir)
{
	$.ajax(
	{
		type: "POST",
		url: "/js/"+dir,
		dataType: "script",
		success: console.log("'"+dir+"' imported successfully"), 
		error: console.log("cannot import '"+dir+"'")
	} );
}*/

document.write('<scr'+'ipt type="text/javascript" src="res/script/test2.js" ></scr'+'ipt>');

//document.write("<br>declared link function");

//include("res/script/test2.js");

document.write("executed link ");

