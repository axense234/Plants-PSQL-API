import swgDocs from "swagger-jsdoc"
import * as dotenv from 'dotenv'

dotenv.config()

const swaggerDocs = swgDocs({
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Plants PSQL API Documentation",
            version:"1.0.0",
            contact:{
                email:"andreicomanescuonline@gmail.com",
                name:"axense",
                url:"https://github.com/axense234"
            },
            description:"The documentation made for the Plants PSQL API, an api that uses postgres along with typescript. Made for learning and curiosity purposes",
            license:{
                name:"GNU",
                url:"https://github.com/axense234/Plants-PSQL-API.git/LICENSE.md"
            }
        },
        servers:[
            {url:`http://localhost:${process.env.PORT || 4000}`},
            {url:"https://plants-api-netp-ca.onrender.com"}
        ],
        components:{
            schemas:{
                Plant:{
                    properties:{
                        familiar_name:{
                            type:"string"
                        },
                        scientific_name:{
                            type:"string"
                        },
                        plant_family:{
                            type:"string"
                        },
                        price:{
                            type:"number"
                        },
                        stock:{
                            type:"integer"
                        },
                        discovery_date:{
                            type:"string"
                        },
                        primary_color:{
                            type:"string"
                        }
                    }
                }
            }
        }
    },
    apis:["./src/routers/*.ts"]
})

export default swaggerDocs