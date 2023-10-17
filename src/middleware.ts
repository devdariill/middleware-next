import { NextRequest, NextResponse } from "next/server";

const isLoggedIn = false

export function middleware (request: NextRequest) {
  console.log(new Date,"Hello from the middleware!", request.url)
  if (!isLoggedIn && request.url === 'https://localhost:3000/profile') {
    return NextResponse.redirect(new URL('/', request.url))
    // return NextResponse.redirect('/')
  }
  return NextResponse.next()
  // return NextResponse.json({
  //   message: "Hello from the middleware!"
  // })
}