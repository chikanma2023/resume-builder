// import ViewText from "./Atoms/ViewText";
// import { UserIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
// import { useSelector } from "react-redux";

// const SetInnerHTML = ({ className, text }) => {
//   return (
//     <p
//       className={className}
//       dangerouslySetInnerHTML={{
//         __html: text,
//       }}
//     ></p>
//   );
// };

// export const ProfileImage = ({ data }) => {
//   return (
//     <div className="flex flex-col gap-10 text-xs mb-4 capitalize">
//       <div className="flex items-start gap-3 text-neutral-400 text-sm">
//         <div className="w-16 h-14 flex items-center justify-center rounded cursor-pointer bg-gray-100">
//           <img
//             src={data && data.profileImage}
//             className={
//               data && data.profileImage ? "w-full h-full rounded" : "hidden"
//             }
//           />
//         </div>
//         <div>
//           <b className="text-2xl text-black">
//             {data && data.firstname} {data && data.lastname}
//           </b>
//           <p className="text-xs text-gray-400">{data && data.jobTitle}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const Contacts = ({ data, contacts }) => {
//   return (
//     <div className="flex flex-col gap-3 w-full text-xs">
//       <p className="font-bold mb-1">Details</p>
//       <div className="flex flex-col gap-1">
//         <p className="first-letter:capitalize">{data.city}</p>
//         <p className="first-letter:capitalize">{data.country}</p>
//         <p className="first-letter:capitalize">{data.phone}</p>
//         <p className="break-words text-blue-500">{data.email}</p>
//       </div>

//       <div className="[&_p]:text-blue-500">
//         <b className="mb-1">Links</b>
//         <p>{contacts.link}</p>
//         <p>{contacts.label}</p>
//       </div>
//     </div>
//   );
// };

// export const Header = ({ headerObject, bodyObject }) => {
//   const { contacts, internship } = useSelector(
//     (state) => state.resumeBodyActions
//   );
//   return (
//     <>
//       <ProfileImage data={headerObject} />
//       <div className="w-full flex gap-5">
//         <div className="w-2/3 flex flex-col gap-3">
//           <ViewText //=============== Profile preview===============
//             icon={<UserIcon className="w-3 h-3 text-black" />}
//             title="Profile"
//             subTitle={<SetInnerHTML text={headerObject.professionalSummary} />}
//           />

//           <ViewText //========== Employment history preview==========
//             icon={<BriefcaseIcon className="w-3 h-3 text-black" />}
//             title="Employment history"
//             duration={`${headerObject.startDate} - ${headerObject.enddate}`}
//             description={<SetInnerHTML text={headerObject.description} />}
//             subTitle={
//               <SetInnerHTML
//                 className="font-bold"
//                 text={`${headerObject.title} at ${headerObject.employer}`}
//               />
//             }
//           />

//           <ViewText //============= Education preview=============
//             icon={<BriefcaseIcon className="w-3 h-3 text-black" />}
//             title="Education"
//             duration={`${bodyObject.startDate} - ${bodyObject.enddate}`}
//             description={<SetInnerHTML text={bodyObject.description} />}
//             subTitle={
//               <SetInnerHTML
//                 className="font-bold"
//                 text={`${bodyObject.degree}, ${bodyObject.school}`}
//               />
//             }
//           />

//           <ViewText //========== Employment history preview==========
//             icon={<BriefcaseIcon className="w-3 h-3 text-black" />}
//             title="internship"
//             duration={`${internship.startDate} - ${internship.enddate}`}
//             description={<SetInnerHTML text={internship.description} />}
//             subTitle={
//               <SetInnerHTML
//                 className="font-bold"
//                 text={`${internship.title} at ${internship.employer}`}
//               />
//             }
//           />
//         </div>

//         {/* Contacts */}
//         <div className="w-1/3 flex flex-col gap-3">
//           <Contacts data={headerObject} contacts={contacts} />
//         </div>
//       </div>
//     </>
//   );
// };
