export function GET() {
  return new Response("No async API is working", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
