let voteCount = 5;

export async function GET() {
  return Response.json({
    votes: voteCount,
  });
}