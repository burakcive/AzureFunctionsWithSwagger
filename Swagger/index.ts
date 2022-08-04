import { generateOpenApi3Spec } from "@aaronpowell/azure-functions-nodejs-openapi";

export default generateOpenApi3Spec({
  info: {
    title: "Azure Function Swagger v3.1 demo",
    version: "1.0.0",
  },
  components : {
    schemas : {
      User: {
        title : "User",
        type : "object",
        properties:{
          id: {
            type: "number",
            description: "Unique identifier for the user",
          },
          name: {
            type: "string",
            description: "name of the user",
          },
          email: {
            type: "string",
            description: "email of the user",
          }, 
          age: {
            type: "number",
            description: "age of the user",
          }
        }
      }
    }
  }
});