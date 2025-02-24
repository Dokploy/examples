
const PORT = Deno.env.get("PORT") || 8000;

const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    const greeting = Deno.env.get("GREETING") || "Hello from Deno 2!";
    return new Response(greeting);
  } else if (url.pathname === "/greet") {
    const greeting = Deno.env.get("GREETING") || "Hello from Deno 2!";
    return new Response(greeting);
  } else {
    return new Response("Not Found", { status: 404 });
  }
};

// Error handling
try {
  Deno.serve({ port: Number(PORT) }, handler);
} catch (err) {
  console.error("Error starting the server:", err);
}