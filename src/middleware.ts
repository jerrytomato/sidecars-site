import { defineMiddleware } from "astro:middleware";

const WALKTHROUGH_PATH = "/walkthrough";
const X_ROBOTS_VALUE = "noindex, nofollow, noarchive, nosnippet";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const { pathname } = context.url;

  if (
    pathname === WALKTHROUGH_PATH ||
    pathname.startsWith(`${WALKTHROUGH_PATH}/`)
  ) {
    response.headers.set("X-Robots-Tag", X_ROBOTS_VALUE);
  }

  return response;
});
