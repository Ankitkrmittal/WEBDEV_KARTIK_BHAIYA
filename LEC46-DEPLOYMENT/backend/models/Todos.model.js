const {schema}

const todosSchema = new schema({
    name:String,
    description:String,
})

module.exports(todosSchema);