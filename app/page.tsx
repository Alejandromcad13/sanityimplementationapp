export const revalidate = 30;

type Profile = {
  name: string;
  occupation: string;
  _id: string;
};

const getProfileInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProfile`);

  const { profileInfo } = await res.json();

  return profileInfo;
};

export default async function Home() {
  const profile: Profile[] = await getProfileInfo();

  return (
    <div>
      {profile.map((item) => (
        <>
          {item.name} <br></br>
        </>
      ))}
    </div>
  );
}
