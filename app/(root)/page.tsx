import { UserButton } from "@clerk/nextjs";


const SetupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
export default SetupPage;