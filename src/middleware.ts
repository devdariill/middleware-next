import { NextResponse } from "next/server";

export function middleware () {
  return NextResponse.json({
    message: "Hello from the middleware!"
  })
}