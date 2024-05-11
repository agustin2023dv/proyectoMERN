    require('dotenv').config();
    
    const app = require('./app');
    require('./database');

    //this is to execute the server

    async function main(){
        await app.listen(app.get('port'))
        console.log('The server is being executed on port: ', app.get('port'));

    }

    main();
