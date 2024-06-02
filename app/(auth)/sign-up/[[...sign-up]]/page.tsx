import { SignUp } from "@clerk/nextjs";

const SignUPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignUPage;
