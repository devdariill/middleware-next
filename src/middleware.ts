import { NextRequest, NextResponse } from 'next/server'

const isLoggedIn = false

export function middleware(request: NextRequest) {
  let headers = new Headers (request.headers)
  // let cookie = request.cookies.get('my-cookie')
  if (!isLoggedIn){
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL('/', request.url))

  // console.log(new Date,"Hello from the middleware!", request.url)
  // if (!isLoggedIn && request.url === 'https://localhost:3000/profile') {
  //   return NextResponse.redirect(new URL('/', request.url))
  //   // return NextResponse.redirect('/')
  // }
  // return NextResponse.next()
  // // return NextResponse.json({
  // //   message: "Hello from the middleware!"
  // // })
}

export const config = {
  matcher : ['/profile'],
}
