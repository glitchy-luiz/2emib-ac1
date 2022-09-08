const {app,porta} = require('./config/servidor')

const consign = require('consign') 
consign().include('./routes').into(app)

app.listen(porta)