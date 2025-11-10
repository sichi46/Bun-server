const server = Bun.serve({
    port: Bun.env.port || 8000,
    fetch(req){
        return new Response("Hello My niggaz! How are you doing? you know me grrraag ");
    },
})


console.log(`Server is running on http://localhost:${server.port}`)