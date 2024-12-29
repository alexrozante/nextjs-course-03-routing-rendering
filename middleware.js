import { NextResponse } from "next/server";

export default function middleware(request) {
  console.log('REQUEST: ', request.url);
  return NextResponse.next();
};

