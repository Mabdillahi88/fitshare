import { rest } from "msw";

const baseURL = "https://fitshareapi-b9588b2c11b9.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 13,
        "username": "bob55",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 13,
        "profile_image": "https://res.cloudinary.com/dffdb3kza/image/upload/v1/media/images/fitshare.logo_gnqho5"
    })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];