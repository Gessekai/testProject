import {JetView} from "webix-jet";
import {data} from "models/cont_collection"

export default class DataClientsView extends JetView{
	config(){
		return clientList;
	}
	init(view){
		view.parse(data);	
	}
};

const clientList =  {
  id:"clientsData",
  view:"list", 
  css:"contactList",
  select:true	,
  template:renderContact,
  data:data,
  type:{
    height:46
  }
};

function renderContact(obj, common){
  var userpicSrc = "http://www.wilwia.com/images/default-user.png";
  var html = 	"<span style='height:100%;width:100%;'>";
  html += "<img class='photo' src='"+userpicSrc+"' />";
  html += "<span class='name'>"+obj.customer;
  html += "<span class='company'>"+obj.employee+"</span>";
  html += "</span></span>";
  
  return html;	
};



