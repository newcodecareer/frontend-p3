import React from "react";
import Login from "./components/Auth/Login";
import ResetPassword from "./components/Auth/ResetPassword";
import Signup from "./components/Auth/Signup";
import BrowseNeeds from "./components/BrowseNeeds/BrowseNeeds";

import PostStepOne from "./components/Post/PostStepOne";
import PostStepTwo from "./components/Post/PostStepTwo";
import PostStepThree from "./components/Post/PostStepThree";
import SearchFilters from "./components/SearchFilters/SearchFilters";
import Profile from "./components/Profile/Profile";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import PostDetails from "./components/PostDetails/PostDetails";
import Category from "./components/SearchFilters/DropDownList/Category";
import Range from "./components/SearchFilters/DropDownList/Location";
import Price from "./components/SearchFilters/DropDownList/Price";
import Offers from "./components/SearchFilters/DropDownList/Offers";
import Sort from "./components/SearchFilters/DropDownList/Sort";
import MobileVerificationStepOne from "./components/MobileVerification/MobileVerificationStepOne";
import MyNeeds from "./components/MyNeeds/MyNeeds";
import MobileVerificationStepTwo from "./components/MobileVerification/MobileVerificationStepTwo";
import MobileVerificationStepThree from "./components/MobileVerification/MobileVerificationStepThree";
import UploadAvatar from "./components/UploadAvatar/UploadAvatar";
import MyNeed from "./components/MyNeed/MyNeed";
import AccountSecurity from "./components/AccountSecurity/AccountSecurity";
import ChangeEmail from "./components/AccountSecurity/ChangeEmail";
import ChangeEmailStepTwo from "./components/AccountSecurity/ChangeEmailStepTwo";
import ResetPasswordStepTwo from "./components/ChangePassword/ResetPasswordStepTwo";
import ChangePhoneNumber from "./components/AccountSecurity/ChangePhoneNumber";
import ChangePhoneNumberStepTwo from "./components/AccountSecurity/ChangePhoneNumberStepTwo";
import ChangePhoneNumberStepThree from "./components/AccountSecurity/ChangePhoneNumberStepThree";
import ChangePhoneNumberStepFour from "./components/AccountSecurity/ChangePhoneNumberStepFour";

// import Homepage from "./pages/HomePage";
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Homepage = React.lazy(() => import("./pages/HomePage"));

const routes = [
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/browse-needs",
    element: <BrowseNeeds />,
  },
  {
    path: "/post-needs",
    element: <PostStepOne />,
  },
  {
    path: "/post-step-two",
    element: <PostStepTwo />,
  },
  {
    path: "/post-step-three",
    element: <PostStepThree />,
  },
  {
    path: "/search-filters",
    element: <SearchFilters />,
  },
  {
    path: "/profiles",
    element: <Profile />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/post-details",
    element: <PostDetails />,
  },
  {
    path: "/drop-down-category",
    element: <Category />,
  },
  {
    path: "/drop-down-range",
    element: <Range />,
  },
  {
    path: "/drop-down-three",
    element: <Price />,
  },
  {
    path: "/drop-down-four",
    element: <Offers />,
  },
  {
    path: "/drop-down-five",
    element: <Sort />,
  },
  {
    path: "/Mobile-Verification",
    element: <MobileVerificationStepOne />,
  },
  {
    path: "/my-needs",
    element: <MyNeeds />,
  },
  {
    path: "/Mobile-Verification-step-two",
    element: <MobileVerificationStepTwo />,
  },
  {
    path: "/Mobile-Verification-step-three",
    element: <MobileVerificationStepThree />,
  },
  {
    path: "/avatar",
    element: <UploadAvatar />,
  },
  {
    path: "/account-security",
    element: <AccountSecurity />,
  },
  {
    path: "/change-email",
    element: <ChangeEmail />,
  },
  {
    path: "/change-email-step-two",
    element: <ChangeEmailStepTwo />,
  },
  {
    path: "/reset-password-step-two",
    element: <ResetPasswordStepTwo />,
  },
  {
    path: "/reset-password-step-two",
    element: <ResetPasswordStepTwo />,
  },
  {
    path: "/change-phone-number-step-one",
    element: <ChangePhoneNumber />,
  },
  {
    path: "/change-phone-number-step-two",
    element: <ChangePhoneNumberStepTwo />,
  },
  {
    path: "/change-phone-number-step-three",
    element: <ChangePhoneNumberStepThree />,
  },
  {
    path: "/change-phone-number-step-four",
    element: <ChangePhoneNumberStepFour />,
  },
  {
    path: "/my-need",
    element: <MyNeed />,
  },
];

export default routes;
