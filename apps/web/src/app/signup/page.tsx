"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { CreateUserSchema } from "@repo/zodschema";
import { useForm } from "@tanstack/react-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const Signup = () => {
  const route = useRouter()
  const form = useForm({
    defaultValues: {
      name: "",
      number: "",
      password: "",
    },
    validators:{
      onChange:CreateUserSchema},
    onSubmit: async ({ value }) => {
      console.log("Here")
      console.log(process.env.HTTP_URL)
      await axios.post(`${process.env.NEXT_PUBLIC_HTTP_URL}/register`,{
        name:value.name,
        number:value.number,
        password:value.password
      })
      alert("Account created succesfully")
      route.push('/signin')
    },
  });

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-linear-to-br from-slate-400 via-white/50 to-slate-500 dark:from-slate-800/90 dark:via-black dark:to-slate-900 transition-colors duration-500">
      <div className="h-fit w-[30vw] bg-white rounded-xl border border-neutral-400 mx-auto flex items-center flex-col py-20 px-8">
        <h1 className="text-4xl font-semibold text-black tracking-tighter mb-12">
          Create New Account
        </h1>
        <div>
          <form className="flex flex-col gap-3 items-center justify-center" onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}>
            <div>
              {
                <form.Field
                  name="name"
                  children={(field) => {
                    return (
                      <>
                        <Input
                          id={field.name}
                          label={"Name"}
                          name={field.name}
                          onBlur={field.handleBlur}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            field.handleChange(e.target?.value)
                          }
                          placeholder={"Name"}
                          type="text"
                          value={field.state.value}
                        />
                      </>
                    );
                  }}
                />
              }
            </div>
            <div>
              {
                <form.Field
                  name="number"
                  children={(field) => {
                    return (
                      <>
                        <Input
                          id={field.name}
                          label={"Number"}
                          name={field.name}
                          onBlur={field.handleBlur}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            field.handleChange(e.target?.value)
                          }
                          placeholder={"Number"}
                          type="text"
                          value={field.state.value}
                        />
                      </>
                    );
                  }}
                />
              }
            </div>
            <div>
              {
                <form.Field
                  name="password"
                  children={(field) => {
                    return (
                      <>
                        <Input
                          id={field.name}
                          label={"Password"}
                          name={field.name}
                          onBlur={field.handleBlur}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            field.handleChange(e.target?.value)
                          }
                          placeholder={"Password"}
                          type="text"
                          value={field.state.value}
                        />
                      </>
                    );
                  }}
                />
              }
            </div>
            <div>
              <Button children="Create account" size="lg" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
