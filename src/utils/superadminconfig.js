export const config = {
    headers: {
        Authorization:
          `Bearer ${process.env.NEXT_PUBLIC_STRAPI_ACCESS_TOKEN}`,
      },
  }