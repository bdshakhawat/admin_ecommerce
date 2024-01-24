'use client'
import { Modal } from "@/components/ui/modal";
// import { UserButton } from "@clerk/nextjs";


const SetupPage = () => {
  return (
    <div>
      <Modal title="Setup" description="Setup your account" isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  )
}
export default SetupPage;