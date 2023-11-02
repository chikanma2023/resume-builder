import { UserIcon } from "@heroicons/react/24/solid";
import View from "../../layouts/View";
import { useSelector } from "react-redux";

const Profile = () => {
  const { value } = useSelector((state) => state.personalInfo);

  return (
    <View
      icon={<UserIcon className="w-3 h-3 text-black" />}
      title="Profile"
      subTitle={
        // <div
        //   dangerouslySetInnerHTML={{ __html: value.employmenthistory }}
        // ></div>
        ""
      }
    />
  );
};

export default Profile;
