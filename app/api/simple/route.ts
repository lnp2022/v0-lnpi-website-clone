export function GET() {
  return new Response(JSON.stringify({ message: "Simple API is working" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
