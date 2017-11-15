import {JetView} from "webix-jet";
import {collection} from "models/acts_collection";

export default class DataPagerView extends JetView{
	config(){
		return activitiesTable;
	}
	init(view){
		// view.sync(collection);
	}
}

const activitiesTable =  {	
	view:"datatable", 
	select:true,
	columns:[
		{header:"", width:50, template:"{common.checkbox()}"},
		{id:"type", header:["Activity type", {content:"selectFilter", optios:[]}], sort:"string", width:170},
		{id:"details", header:["Details", {content:"textFilter"} ], sort:"string", minWidth:150, fillspace:1},
		{id:"client", header:["Status", {content:"selectFilter"}], sort:"string", width:200},
		{id:"date", header:["Due date", {/*content:"datePickerFilter"*/}], width:170, sort:"string", format:webix.i18n.fullDateFormatStr},
		{header:"", width:35, template:"<span  style='cursor:pointer;' class='webix_icon fa-pencil-square-o'></span>"},
		{header:"", width:35, template:"<span  style='cursor:pointer;' class='webix_icon fa-times'></span>"}
	],
	onClick:{
		// "fa-pencil-square-o":function(e, id){
		// 	webix.$$("editActivities").show();
		// },
		"fa-trash":function(e, id){
			var self = this;
			webix.confirm({
				text:"Are you sure?", ok:"Yes", cancel:"Cancel",
				callback:function(res){
					if(res){
						self.remove(id);
					}
				}
			});
		}
	}		
};
