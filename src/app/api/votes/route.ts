let voteCount = 5;

export async function GET() {
  return Response.json({
    votes: voteCount,
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  if (data.vote === 'up') {
    voteCount++
  } else {
    voteCount--
  }
  return Response.json({
    votes: voteCount,
  });
}