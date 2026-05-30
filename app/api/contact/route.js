export async function POST(request) {
  const { name, mobile } = await request.json();

  console.log("New Inquiry");
  console.log({ name, mobile });

  return Response.json({
    success: true,
    message: "Inquiry submitted successfully!",
  });
}