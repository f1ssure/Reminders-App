import InputField from "@components/InputField";
import Button from "@components/Button";

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

        <div className="flex flex-col gap-3 w-full">
          <InputField 
            label="Email" 
            type="text" 
            placeholder="Enter your email address" 
          />
          <InputField 
            label="Password" 
            type="password" 
            placeholder="Create a password" 
          />
        </div>

        <div className="w-full">
          <Button 
            text="Create account" 
            //onClick={() => console.log("Created account.")}
          />

          <div className="w-full my-3 flex items-center">
            <hr className="inline w-full" />
            <span className="px-3">or</span>
            <hr className="inline w-full" />
          </div>

          {/* TODO: Add Google, Facebook and Apple OAuth */}
          <div className="flex flex-col gap-3 w-full">
            <Button 
              text="Continue with Google" 
              //onClick={() => console.log("Google.")}
            />
            <Button 
              text="Continue with Facebook" 
              //onClick={() => console.log("Facebook.")}
            />
            <Button 
              text="Continue with Apple" 
              //onClick={() => console.log("Apple.")}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
