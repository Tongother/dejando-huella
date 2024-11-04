import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export async function middleware(request: NextRequest){
    let auth = request.cookies.has('userToken');
    if (request.nextUrl.pathname.startsWith('/login') && auth){
        return NextResponse.redirect(new URL('/admin', request.url))
    }
    if (request.nextUrl.pathname.startsWith('/admin') && !auth){
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
}