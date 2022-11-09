export const main = async (event: any) => {
  console.log(`Incoming Event:\n`, event);

  const response = {
    statusCode: 200,
    body: "Hello world!",
  };
  return response;
};
