import { UserIcon } from "@heroicons/react/24/solid";
import View from "../Atoms/ViewText";
import { useSelector } from "react-redux";

const Profile = () => {
  const { value } = useSelector((state) => state.personalInfo);

  return (
    <>
      <View
        icon={<UserIcon className="w-3 h-3 text-black" />}
        title="Profile"
        subTitle={
          <p dangerouslySetInnerHTML={{ __html: value.employmenthistory }}></p>
        }
      />
    </>
  );
};

export default Profile;
