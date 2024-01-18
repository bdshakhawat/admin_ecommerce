export default function AuthLayput({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="w-full max-w-md">
            {children}
          </div>
        </main>
      </div>
    )
  }