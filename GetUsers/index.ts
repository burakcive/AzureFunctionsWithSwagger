import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { mapOpenApi3} from "@aaronpowell/azure-functions-nodejs-openapi";
import { users } from "../data";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('get api/users endpoint is triggered');
   
    context.res = {
        body: users
    };

};

export default mapOpenApi3(httpTrigger, "/api/users", {
    get: {
      responses: {
        "200": {
          description: "Succesfull operation",
          content: {
            "application/json": {
              schema: {
                type: "object",
                allOf: [{ $ref: "#/components/schemas/User" }],
              },
            },
          },
        },
      },
    },
  });