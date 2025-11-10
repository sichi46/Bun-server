const server = Bun.serve({
    port: Bun.env.port || 8000,
    fetch(req) {
        const url = new URL(req.url);

        // Corrected: just 'url.pathname'
        if (url.pathname === "/") return new Response("Homepage!");
        if (url.pathname === "/about") return new Response("About page!");

        return new Response("Not Found", { status: 404 });
    },
});

console.log(`Server is running on http://localhost:${server.port}`);