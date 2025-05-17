export function GET() {
  return new Response("Text only API is working", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
