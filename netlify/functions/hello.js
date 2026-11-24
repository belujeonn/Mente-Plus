export default async () => {
  return new Response(
    JSON.stringify({
      message: "MENTE+ está conectado correctamente con Netlify."
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
