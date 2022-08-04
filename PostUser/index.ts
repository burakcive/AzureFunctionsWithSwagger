import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { mapOpenApi3} from "@aaronpowell/azure-functions-nodejs-openapi";
import { IUser, users } from "../data";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('post api/users endpoint is triggered');
   
    const user : IUser = req.body;

    users.push(user);

    context.res = {
        status: 201
    };
};

export default mapOpenApi3(httpTrigger, "/api/users", {
  post: {
    requestBody: {
      description: "The user you want to save",
      content: {
        "application/json": {
          schema: {
            type: "object",
            allOf: [{ $ref: "#/components/schemas/User" }],
          },
        },
      },
    },
    responses: {
      "201": {
        description: "Successful operation",
        content: {},
      },
      "405": {
        description: "Invalid input",
        content: {},
      },
    },
  },
});