import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email?.length > 1 && password?.length >= 8) {
    return NextResponse.json({ message: 'Sign-in successful' });
  } else {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }
}