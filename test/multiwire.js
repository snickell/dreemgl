define.class("$server/composition",function($server$,service,$ui$,screen,$flow$displays$,debug,outputs){
  
  this.render=function(){
    return [
      outputs({name:"a",flowdata:{x:104,y:41,screen:true}}),
      outputs({name:"b",flowdata:{x:138,y:469,screen:true}}),
      debug({name:'default',clearcolor:'#484230',flowdata:{x:879,y:165,screen:true},string:wire("this.rpc.default.array"),array:wire("[this.rpc.a.object,this.rpc.b.string,this.rpc.a.array,this.rpc.b.vec3,this.rpc.a.vec2,this.rpc.b.int,this.rpc.a.float,this.rpc.b.boolean,this.rpc.a.number]")})
    ]
  }
  
})