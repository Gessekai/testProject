import {JetView} from "webix-jet";


export default class WindowView extends JetView{
  config(){
  	return winConfig;
  }
  show(target){
       this.getRoot().show(target);
  }
};


const winHead = {
	view:"toolbar",
	elements:[
		{ view:"label", label:"Add/edit Activity", align:"center"},
		{view:"icon", icon:"times", click:function(){
			this.getTopParentView().hide()
		}}
	]
};

const fields = [
	{view:"textarea", name:"details", label:"Details"},
	{view:"richselect", name:"type", label:"Type"},
	{view:"richselect", name:"contact", label:"Contact"},
	{cols:[
		{view:"datepicker", name:"date", label:"Date"},
		{view:"datepicker", type:"time", name:"time", label:"Time"}
	]},
	{view:"checkbox", label:"Completed", name:"complete"},
	{cols:[
		{},
		{ view: "button", type: "form", label: "Save", click:function(){
			this.getFormView().save();
			this.getTopParentView().hide();
		}},
		{ view: "button", label: "Cancel"}	
	]}
];



const editForm = {
	view:"form",
	elements:fields
};

const winConfig = {
	view:"window",
	id:"editActivities",
	position:"center",
	width:500,
	modal:true,
	head:winHead,
	body:editForm
};




