import PageTitle from '../components/page-title';
import UserCards from '../components/user-cards';

export default function Login() {
  return (
    <>
      <PageTitle
        title="Login Page"
        description="This page is only accessible to unauthenticated users. Please choose a user to login as and test their permissions. "
      />
      <UserCards showLogin={true} />
    </>
  );
}
