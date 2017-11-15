import {JetView} from "webix-jet";
import activitiesTable	from "views/modules/acts_data";
import actWindow	from "views/windows/acts_edit"
import {collection} from "models/acts_collection";

export default class ActsView extends JetView{
	config(){
		return layout;
	}
	init(view){		
	    this.editWin = this.ui(actWindow);		
	}
	ready(view, url){				
		view.queryView({view:"datatable"}).sync(collection);
		webix.$$("editActivities").getBody().bind(collection);
		view.queryView({view:"datatable"}).on_click["fa-pencil-square-o"] = function(e, id){
			collection.setCursor(id);
			webix.$$("editActivities").show();
		};
	}
};

const layout = {	
	rows:[
		{
			view:"toolbar", elements:[
				{},
				{view:"button", autowidth:true, type:"iconButton", icon:"plus", label:"Add new activity", click:function(){
					webix.message("Add window")
				}}
			]
		},
		activitiesTable		
	]		
};