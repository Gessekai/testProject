import {JetView} from "webix-jet";
import {data} from "models/orders";

export default class DataPagerView extends JetView{
	config(){
		return layout;
	}
	init(view){
		view.queryView({ view:"datatable" }).parse(data);
	}
}

const gridPager =  {
	margin: 10,
	rows:[
		{
			id:"orderData",
			view:"datatable", select:true,
			columns:[
				{id:"id", header:"#", width:50},
				{id:"employee", header:["Employee", {content:"selectFilter"} ], sort:"string", minWidth:150, fillspace:1},
				{id:"customer", header:["Customer", {content:"selectFilter"} ], sort:"string", minWidth:150, fillspace:1},

				{id:"status", header:"Status", sort:"string", width:90},
				{id:"date", header:"Date", sort:"string", width:100},
				{id:"trash", header:"&nbsp;", width:35, template:"<span  style='color:#777777; cursor:pointer;' class='webix_icon fa-trash-o'></span>"}
			],
			export: true,
			on: {
				onAfterLoad: function(){
					this.select(4);
				}
			},
			onClick:{
				webix_icon:function(e,id){
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
		}
	]
};


const layout = {
	type: "clean",
	rows:[
		gridPager
	]
};
