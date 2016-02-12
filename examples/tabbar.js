define.class("$server/composition",function(require, $ui$, tabbar, screen, label, view, cadgrid, $widgets$, toolkit) {

	this.render = function() {
		return [
			screen({name:"mobile"},
				cadgrid({
						name:"grid",
						flex:3,
						bgcolor:"#4e4e4e",
						gridsize:8,
						majorevery:5,
						majorline:vec4(0.34117648005485535,0.34117648005485535,0.34117648005485535,1),
						minorline:vec4(0.2823529541492462,0.2823529541492462,0.2823529541492462,1),
						alignitems:'stretch',
						alignself:'stretch',
						flexdirection:'column',
						justifycontent:'flex-end'
					},
					view(
						{
							flex:1,
							name:"main",
							bgcolor:NaN,
							alignitems:"center",
							justifycontent:"center"
						},
						label({name:"page", text:"", bgcolor:NaN})
					),
					tabbar({
						tabs:[
							{
								name:"SMS",
								icon:"comment",
								boldness:0.3,
								fontsize:33
							},
							{
								name:"inbox",
								icon:"envelope",
								boldness:0.3,
								fontsize:33
							},
							{
								name:"contacts",
								icon:"at",
								fontsize:33,
								boldness:0.15
							},
							{
								name:"search",
								icon:"search",
								fontsize:33
							},
							{
								name:"more",
								icon:"ellipsis-h",
								fontsize:33,
								boldness:0
							}
						],
						onselection:function(ev,tab,bar) {
							if (tab && tab.name) {
								var main = this.screen.find("main");
								var label = main.find("page");
								label.text = "Show the '" + tab.name + "' page";
							}
						}
					})
				)
			),
			screen({name:"sandbox"},
				cadgrid({
						name:"grid",
						flex:3,
						overflow:"scroll",
						bgcolor:"#4e4e4e",
						gridsize:8,
						majorevery:5,
						majorline:vec4(0.34117648005485535,0.34117648005485535,0.34117648005485535,1),
						minorline:vec4(0.2823529541492462,0.2823529541492462,0.2823529541492462,1),
						alignitems:'center',
						alignself:'stretch',
						flexdirection:'column',
						justifycontent:'center',
						anchor:vec3(0,0,0),
						toolmove:false,
						toolrect:false
					},
					tabbar({
						position:'absolute',
						x:570.0107421875,
						y:340,
						tabs:[
							{
								showarrow:false,
								normal:{
									icon:"flask",
									fgcolor:"gray"
								},
								hover:{
									fgcolor:"lightblue"
								},
								active:{
									fgcolor:"lightgreen"
								},
								selected:{
									fgcolor:"red"
								},
								disabled:{
									fgcolor:"pink"
								}
							},
							{
								label:"two",
								state:"disabled",
								disabled:{
									bgcolor:"gray",
									fgcolor:"darkgray"
								}
							},
							"tree",
							{
								class:"folder",
								normal:{
									label:"$3.50"
								},
								active:{
									label:"???"
								}
							},
							"floor"
						]
					})
				),
				toolkit({
					position:'absolute',
					x:996,
					y:35.00083541870117,
					width:393,
					height:788,
					visible:false,
					components:[
						{
							label:"Tab Bar",
							icon:"folder",
							desc:"A tab bar",
							classname:"tabbar",
							classdir:"$ui$",
							params:{
							}
						}
					]
				}
				)
			)
		]
	}
}
)
