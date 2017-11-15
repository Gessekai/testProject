import {JetView} from "webix-jet";
import clientsList	from "views/modules/cont_data";
import clientsTemp	from "views/modules/cont_template"


export default class ClientsView extends JetView{
	config(){
		return layout;
	}
	ready(view, url){		
		let list = view.queryView({view:"list"});
		this.on(list, "onAfterSelect", (id)=>{
			view.queryView({view:"template"}).setValues(list.getItem(id));
		});
		list.select(list.getFirstId())
	}
};

const layout = {
	type: "space",
	cols:[
		clientsList,
		clientsTemp
	]
};