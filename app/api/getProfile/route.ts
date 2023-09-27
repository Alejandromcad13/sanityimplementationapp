import { client } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

type Profile = {
    name: string;
    occupation: string;
    _id: string;
  };
 
export async function GET() {
  const res = await client.fetch<Profile[]>(`*[_type == "profile"]{
    name,
    occupation,
    _id
  }`)
 
 
  return NextResponse.json({ res })
}