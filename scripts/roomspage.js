var roomName = "Meeting Room";
var rowNum = 5;
var numInterval = 26;

function init(){
	populateAvailable();
}

function addRow(parent,roomnum){
	
	var roomid = "rm"+roomnum;
	
	var line = "<tr> <td>"+roomName +" "+ roomnum + "</td>";
	

	for(var i=0;i<numInterval-1;i++){
		line+="<td> <div id ='"+roomid+"-"+i+ "' class='time-btn'>&nbsp;</div>"; //first interval (XX:00-XX:29)
		i++;
		line+="<div id ='"+roomid+"-"+i+ "' class='time-btn'>&nbsp;</div></td>"; //2nd interval (XX:30-XX:59)
	}
	line.concat("</tr>");
	console.log(line);
	parent.append(line);
}

function populateAvailable(){
	var tableBody = $(".table-body");
	for(var i=1;i<=rowNum;i++){
		addRow(tableBody,i);
	}
}