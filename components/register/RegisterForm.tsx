"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import { useUserStore } from "@/store/userStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  registerSchema,
  RegisterFormData,
} from "@/utils/validation";

export default function RegisterForm() {
  const { user, setUser } = useUserStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    // Save user in Zustand (automatically persisted)
    setUser(data);

    alert("Registration Successful!");

    // Navigate to Categories page
    router.push("/categories");
  };

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md rounded-xl bg-gray-800 p-8 shadow-lg">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Register
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <Input
            label="Name"
            placeholder="Enter your name"
            registration={register("name")}
            error={errors.name?.message}
          />

          <Input
            label="Username"
            placeholder="Enter username"
            registration={register("username")}
            error={errors.username?.message}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter email"
            registration={register("email")}
            error={errors.email?.message}
          />

          <Input
            label="Mobile"
            placeholder="Enter mobile number"
            registration={register("mobile")}
            error={errors.mobile?.message}
          />

          <Button
            text="Register"
            type="submit"
          />
        </form>

        <p className="mt-6 text-center text-white">
          Current User: {user ? user.name : "No User"}
        </p>
      </div>
    </main>
  );
}