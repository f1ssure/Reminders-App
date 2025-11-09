import InputField from "@components/InputField"

export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-evenly w-full max-w-125 gap-10 p-8">
        <div>
          <h1 className="text-center text-4xl font-bold">
            Reminders App
          </h1>
          <p className="text-center text-xs mt-2">Never Forget Anything.</p>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <InputField label="Email" type="text" placeholder="Enter your email address" />
          <InputField label="Password" type="password" placeholder="Create a password" />
        </div>
      </div>
    </main>
  );
}
