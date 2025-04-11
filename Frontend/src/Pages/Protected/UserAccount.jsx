import React from "react";
import { useAuth } from "../../context api/authContext";

const UserAccount = () => {
  const [auth, setAuth] = useAuth();

  // Loading state
  if (!auth.user) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-32 pb-10 bg-slate-200 h-screen flex justify-center items-center">
        <div className="bg-white text-blue-800 overflow-hidden shadow rounded-lg border">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium uppercase text-gray-900 ">
              User Profile
            </h3>
            
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 ">
                  Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ">
                  {auth.user.fullName}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 ">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ">
                  {auth.user.email}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 ">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ">
                  {auth.user.phone}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 ">
                  Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ">
                  {auth.user.address}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
