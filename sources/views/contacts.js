import {JetView} from "webix-jet";
import clients		from "views/modules/data_clients";
import clientsWin	from "views/windows/clients_edit_window";


export default class ClientsView extends JetView{
	config(){
		return layout;
	}
	init(view){		
	    this.editWin = this.ui(clientsWin);		
	}
	ready(view, url){		
		webix.$$("editClients").queryView({view:"form"}).bind(webix.$$("clientsData"));
		this.on(webix.$$("clientsData"), "onAfterSelect", function(){
			webix.$$("editClients").show();
		});
	}
	urlChange(view, url){
		console.log(url)
	}
};




const layout = {
	type: "space",
	rows:[
		clients
	]
};