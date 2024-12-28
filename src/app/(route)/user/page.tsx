import { BackgroundProfile } from "@/app/components/Bg-profile";
import "./user.css";
import { DropdownMenuDemo } from "@/app/components/DropdwonSetting";

const UserPage = async () => {
  return (
    <>
      <div className="mt-10 flex justify-between">
        <div className="flex justify-end w-full p-4">
          <DropdownMenuDemo />
        </div>
      </div>
      <BackgroundProfile />
    </>
  );
};

export default UserPage;
