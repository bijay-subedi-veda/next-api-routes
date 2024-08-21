import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const apiBaseUrl = "http://localhost:3000";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const response = await axios.get(`${apiBaseUrl}/api/users/${id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
};

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${params.id}`,
      body
    );
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating user" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`,
      body
    );
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error partially updating user" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting user" },
      { status: 500 }
    );
  }
}
