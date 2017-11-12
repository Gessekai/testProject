import {JetView, plugins} from "webix-jet";

const menudata = [
	{id: "main", value: "Main", open: true, data:[
		{ id: "dashboard", value: "Dashboard", icon: "home", details:"reports and statistics"}		
	]},
	{id:"contacts", value:"Contacts", icon:"users"},
	{id:"activities", value:"Activities", icon:"clock-o"}
];

export default class MenuView extends JetView{
	init(){
		webix.$$("app:menu").parse(menudata);
		this.use(plugins.Menu, "app:menu");
	}	
	config(){
		return {
			width: 200,
			view: "sidebar", id: "app:menu",
			tooltip: {
				template: function(obj){
					return obj.$count?"":obj.details;
				}
			},
			on:{
				onBeforeSelect:function(id){
					if(this.getItem(id).$count){
						return false;
					}
				},
				onAfterSelect:function(id){
					var item = this.getItem(id);
					webix.$$("title").parse({title: item.value, details: item.details});
				}
			}
		};
	}
}
