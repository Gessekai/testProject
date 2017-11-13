import {JetView} from "webix-jet";
import {data} from "models/orders"

export default class DataClientsView extends JetView{
	config(){
		return gridClients;
	}
	init(view){
		view.parse(data);	
	}
};

const gridClients =  {
	id:"clientsData",
	view:"datatable", select:true,
	columns:[
		{id:"id", header:"#", width:50},
		{id:"company", header:["Company", {content:"selectFilter"} ], sort:"string", minWidth:150, fillspace:1},
		{id:"customer", header:["Customer name", {content:"selectFilter"} ], sort:"string", minWidth:150, fillspace:1},
		{id:"emil", header:["Contact email", {content:"textFilter"} ], sort:"string", minWidth:150, fillspace:1},			
		{id:"status", header:"Status", sort:"string", width:90},
		{id:"date", header:"Valid till", sort:"string", width:100, cssFormat:function(){return;}},
		{id:"trash", header:"&nbsp;", width:35, template:"<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>"}
	],
	subview:{
		view:"template",
		data:{},
		template:subTemplate
	},
	onClick:{
		"fa-trash-o":function(e,id){
			webix.confirm({
				text:"Are you sure sdfds", ok:"Yes", cancel:"Cancel",
				callback:function(res){
					if(res){
						webix.$$("orderData").remove(id);
					}
				}
			});
		}
	},
	autoheight:true,
};

function subTemplate(obj, common){
	let html = "";


	return html
};

