var kwaaiSchema=require('./lib/schema.js');

var nullSchema={
    type:"object",
    properties:{
        value:{
            "type":["string","null"],
            format:"email"
        }

    }

}

var nullDoc={
    value:"a"
}


console.log(kwaaiSchema.validateToSchema(nullDoc,nullSchema))

return;

var schema={
    $schema: "http://json-schema.org/draft-04/schema#",
    title: "test",
    description:"test",
    properties: {
        name: {type: "string", pattern: "^[a-z0-9_\-]+$"},
        description: {type: "string"},
        id:{type:"string",format:"mongoid"},
        email:{type:"string",format:"email"}
    }
}

var doc={
   name:"ab5%%c",
   description:"test"
}

var doc2={
    id:"55ffg"
}
var doc3={
    id:"53f750598c90b03400dd5751"
}
var doc4={
    email:"test"
}
var doc5={
    email:"test@test.com"
}
var invalid=kwaaiSchema.validateToSchema(null,schema);

console.log(kwaaiSchema.validateToSchema(null,schema))
//console.log(kwaaiSchema.validateToSchema(doc,null))
//console.log(kwaaiSchema.validateToSchema(doc,schema))
//console.log(kwaaiSchema.validateToSchema(doc2,schema))
//console.log(kwaaiSchema.validateToSchema(doc3,schema))
//console.log(kwaaiSchema.validateToSchema(doc4,schema))
//console.log(kwaaiSchema.validateToSchema(doc5,schema))