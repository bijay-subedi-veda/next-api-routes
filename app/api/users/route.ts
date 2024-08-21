import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_URL;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const email = searchParams.get("email");
    let url = `${apiBaseUrl}/users`;
    if (name || email) {
      url += "?";
      if (name) url += `name_like=${name}&`;
      if (email) url += `email_like=${email}&`;
      url = url.slice(0, -1);
    }
    const response = await axios.get(url);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching users" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const response = await axios.post(`${apiBaseUrl}/users`, body);
    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}
