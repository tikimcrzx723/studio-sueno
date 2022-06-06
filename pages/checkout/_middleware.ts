import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { token = '' } = req.cookies;

  return NextResponse.next();

  // try {
  //   await jwt.isValidToken(token);
  //   return NextResponse.next();
  // } catch (error) {
  //   const requestedPage = req.page.name;
  //   return NextResponse.redirect(`/auth/login${requestedPage}`);
  // }
}

export default middleware;
