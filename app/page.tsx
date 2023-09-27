import { client } from "@/sanity/lib/client";
import { profile } from "console";
import Image from "next/image";

type Profile = {
  name: string;
  occupation: string;
  _id: string;
};

export default async function Home() {
  const profileInfo = await client.fetch<Profile[]>(`*[_type == "profile"]{
    name,
    occupation,
    _id
  }`, {next: {revalidate: 20}});
  
  return (
      <div>
        {profileInfo.map((info) => (
          <>
            This is my name {info.name} - <br />
            This is my occupation {info.occupation}
          </>
        ))}
      </div>
    
  );
}
