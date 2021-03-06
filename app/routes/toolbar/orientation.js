import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return { 
      list: [{
                edid: "1",
                spriteCss: "editTools cursor",
				title:"Cursor",

            }, {
                edid: "2",
                spriteCss: "editTools select",
				title:"Select",

            }, {
                edid: "3",
                spriteCss: "editTools move",
				title:"Move",

            }, {
                edid: "4",
                spriteCss: "editTools rectselect",
				title:"Rectselect",

            }, {
                edid: "5",
                spriteCss: "editTools roundselect",
				title:"Roundselect",

            }, {
                edid: "6",
                spriteCss: "editTools brush",
				title:"Brush",

            }, {
                edid: "7",
                spriteCss: "editTools pen",
				title:"Pen",

            }, {
                edid: "8",
                spriteCss: "editTools gradient",
				title:"Gradient",

            }, {
                edid: "9",
                spriteCss: "editTools crop",
				title:"Crop",

            }, {
                edid: "10",
                spriteCss: "editTools symbols",
				title:"Symbols",

            }
            ],
        fields: { id: "empid", spriteCssClass: "spriteCss", tooltipText:"title" },
		orientation: "vertical",
		width: "48px"

	}
   }
});