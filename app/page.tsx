import { client } from "@/sanity/lib/client";

export const revalidate = 10;

type Profile = {
  name: string;
  occupation: string;
  _id: string;
};

const getProfileInfo = async () => {
  const profileInfo: Profile[] = await client.fetch(`*[_type == "profile"]{
    name,
    occupation,
    _id
  }`);
  console.log(profileInfo)
  return profileInfo;
};

export default async function Home() {
  const profileInfo = await getProfileInfo();

  return (
    <div>
      {profileInfo.map((item) => (
        <>
          {item.name} <br></br>
        </>
      ))}
    </div>
  );
}
