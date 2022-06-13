import { rest } from "msw";
import { api } from "../constans/api-endpoints.constants";
import personlista from "./responses/riksdagensPersonlista.json";

export const handlers = [
  rest.get(api.person, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(personlista));
  }),
];
