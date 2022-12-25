import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChangeAvatarModal from "../../components/section/ChangeAvatarModal";
import useLoading from "../../hook/useLoading";
import useAuth from "../../hook/useAuth";
import useWeb3 from "../../hook/useWeb3";

function Profile() {
  const { setLoading } = useLoading();
  const { updateProfile } = useAuth();
  const { connectWallet } = useWeb3();
  const user = useSelector((state) => state.auth.user);
  const [isChangeAvatarModal, toggleChangeAvatarModal] = useState(false);

  const [firstname, setFirstname] = useState(user?.firstname);
  const [lastname, setLastname] = useState(user?.lastname);
  const [biography, setBiography] = useState(user?.biography);
  const [birthday, setBirthday] = useState(user?.birthday);
  const [website, setWebsite] = useState(user?.website);

  const email = user?.email;
  const [walletAddress, setWalletAddress] = useState(user?.walletAddress);

  const onUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("biography", biography);
    formData.append("birthday", birthday);
    formData.append("website", website);
    setLoading(true);
    const res = await updateProfile(formData);
    console.log("updateProfile", res);
    setLoading(false);
  };

  const onConnect = async () => {
    try {
      setLoading(true);
      const res = await connectWallet();
      if (res) {
        setWalletAddress(res);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0B0B0F] py-5 sm:py-0">
      <div className="n-container">
        <div className="bg-[#1B1C23]/70 rounded-3xl flex justify-between items-center overflow-hidden ">
          <div className="flex justify-start items-center gap-4 pl-4 sm:pl-10 h-32 sm:h-48 z-10">
            <div className="">
              <p className="text-white text-2xl sm:text-3xl font-bold">
                Profile
              </p>
              <p className="text-white text-sm">
                Home {`>`} <span className="text-[#BA4DF9]">Profile</span>
              </p>
            </div>
          </div>
          <div className="absolute sm:relative right-0">
            <img src="/img/profile-bg.png" alt="" className="h-32 sm:h-48" />
          </div>
        </div>

        <div className="py-5 sm:py-10 sm:flex justify-between gap-10">
          <div className="sm:w-1/3">
            <div className="bg-[#1B1C23]/70 rounded-2xl p-6">
              <div className="flex justify-start gap-4 items-center bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] rounded-full p-1 cursor-pointer">
                <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full p-3">
                  <img src="/img/user.png" alt="" />
                </div>
                <p className="text-white">Profile</p>
              </div>
              <div className="flex justify-start gap-4 items-center rounded-full p-1 mt-4 cursor-pointer hover:bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9]">
                <div className="bg-white/5 w-10 h-10 flex justify-center items-center rounded-full p-3">
                  <img src="/img/notification.png" alt="" />
                </div>
                <p className="text-white">Notification</p>
              </div>
            </div>

            <div className="bg-[#1B1C23]/70 rounded-2xl p-6 mt-5 sm:mt-10 sm:block flex justify-between">
              <div>
                <img
                  src={user?.avatar}
                  alt=""
                  className="w-32 m-auto rounded-full"
                />
              </div>
              <div>
                <p className="text-center text-white font-bold text-lg mt-4">
                  {user?.firstname} {user?.lastname}
                </p>
                <p className="text-center text-white mt-0">{user?.email}</p>
                <div className="flex justify-center mt-5">
                  <button
                    className="w-max px-5 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] text-white m-auto"
                    onClick={() => toggleChangeAvatarModal(true)}
                  >
                    Edit Avatar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-2/3 mt-5 sm:mt-0">
            <div>
              <p className="text-xl font-medium text-white">Information</p>
              <div className="mt-4 sm:flex justify-between gap-8">
                <div className="w-full">
                  <p className="text-white font-medium">Display Name</p>
                  <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
                    <input
                      type={"text"}
                      className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                      placeholder="First Name"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full mt-4 sm:mt-0">
                  <p className="text-white font-medium">User Name</p>
                  <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
                    <input
                      type={"text"}
                      className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                      placeholder="Last Name"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:flex justify-between gap-8">
                <div className="w-full">
                  <p className="text-white font-medium">Biography</p>
                  <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
                    <textarea
                      className="bg-transparent outline-0 px-3 py-2 text-white w-full h-28"
                      placeholder="A brief introduction about yourself"
                      value={biography}
                      onChange={(e) => setBiography(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full mt-4 sm:mt-0">
                  <p className="text-white font-medium">Birthday</p>
                  <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
                    <input
                      type={"text"}
                      className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                      placeholder="Birthday"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </div>
                  <p className="text-white font-medium mt-4">Website</p>
                  <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
                    <input
                      type={"text"}
                      className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                      placeholder="Website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-8 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] text-white"
                  onClick={onUpdateProfile}
                >
                  Save
                </button>
              </div>
            </div>
            <div>
              <p className="text-xl font-medium text-white mt-4 sm:mt-0">
                Accounts Information
              </p>
              <div className="sm:flex justify-between items-end gap-6 mt-4">
                <div className="w-full">
                  <p className="text-white font-medium">Email Address</p>
                  <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
                    <input
                      type={"email"}
                      className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                      value={email}
                      disabled
                    />
                  </div>
                </div>
                <div className="w-full mt-4 sm:mt-0">
                  <p className="text-white font-medium">Wallet</p>
                  <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
                    <input
                      type={"text"}
                      className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                      value={walletAddress}
                      disabled
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    className="px-8 py-2 rounded-full mt-4 sm:mt-0 bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] text-white"
                    onClick={onConnect}
                  >
                    Connect
                  </button>
                </div>
              </div>
              <div className="sm:flex justify-between items-end mt-4">
                <div>
                  <p className="text-white font-medium">Password</p>
                  <p className="text-[#9A9A9A] font-medium mt-2">
                    Set a unique password to protect your personal account.{" "}
                  </p>
                </div>
                <div className="flex justify-end items-end mt-4 sm:mt-0">
                  <button className="px-8 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] text-white">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isChangeAvatarModal ? (
        <ChangeAvatarModal toggleChangeAvatarModal={toggleChangeAvatarModal} />
      ) : null}
    </div>
  );
}

export default Profile;
