import { UserIcon } from "@heroicons/react/24/solid";
import PreviewLayout from "../../layouts/PreviewLayout";

const Profile = () => {
  return (
    <PreviewLayout
      icon={<UserIcon className="w-3 h-3 text-black" />}
      title="Profile"
      subTitle="a professional web developer"
    />
  );
};

export default Profile;
