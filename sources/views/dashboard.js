import dashline 	from "views/modules/dashline";
import visitors 	from "views/modules/visitors";
import orders 		from "views/modules/orders";
import messages 	from "views/modules/messages";
import revenue 		from "views/modules/revenue";
import tasks 		from "views/modules/tasks";
import map 			from "views/modules/map";

const layout = {
	type: "clean",
	rows:[
		dashline,
		{
			type: "space",
			id:"testRes",
			rows:[
				{										
					id:"testRes1",					
					type: "wide",
					rows:[
						{
							responsive:"testRes1",
							type: "wide",
							cols: [
								visitors,
								orders
							]
						}
					]
				},
				{
					id:"testRes2",
					type: "wide",
					rows:[
						{
							type: "wide",
							responsive:"testRes2",
							cols: [
								messages,
								revenue		
							]
						}
					]
				},
				{
					id:"testRes3",
					type: "wide",
					rows:[
						{
							type: "wide",
							responsive:"testRes3",
							cols: [
								tasks,
								map
							]
						}
					]
				}
			]

		}
	]
};

export default layout;