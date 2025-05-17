export function GET() {
  try {
    return Response.json({
      message: "Test API is working",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error in test API:", error)
    return Response.json(
      {
        error: "An error occurred",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
