import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
type Profile = {
  name: string;
  occupation: string;
  _id: string;
};

export async function GET() {
  const profileInfo: Profile[] = await client.fetch(`*[_type == "profile"]{
        name,
        occupation,
        _id
      }`);

      

  return NextResponse.json({ profileInfo });
}
