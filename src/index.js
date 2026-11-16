
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/") {
      return Response.json({
        name: "ASSIE AI HUB",
        status: "online",
        version: "1.0.0"
      });
    }

    if (request.method === "GET" && url.pathname === "/health") {
      return Response.json({
        status: "ok",
        service: "rain",
        providers: {
          gemini: Boolean(env.GEMINI_API_KEY),
          openai: Boolean(env.OPENAI_API_KEY),
          claude: Boolean(env.ANTHROPIC_API_KEY)
        }
      });
    }

    return Response.json({ error: "Not found" }, { status: 404 });
  }
};

