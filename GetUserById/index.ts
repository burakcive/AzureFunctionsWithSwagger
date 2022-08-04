import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { mapOpenApi3 } from "@aaronpowell/azure-functions-nodejs-openapi";
import { users } from "../data";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const id: number = parseInt(req.params.id);

  context.log(`get api/users/${id} endpoint is triggered`);

  const user = users.find((u) => u.id == id);

  context.log(user);

  if (!user) {
    context.res = {
      status: 404,
    };
    return;
  }

  context.res = {
    body: user,
    headers: {'Content-Type': 'application/json'}
  };
};

export default mapOpenApi3(httpTrigger, "/api/users/{id}", {
  get: {
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Gets a single user by id in the system",
        required: true,
        schema: {
          type: "number",
        },
      },
    ],
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
      "404": {
        description: "Unable to find a User with that id",
      },
    },
  },
});
