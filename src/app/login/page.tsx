import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type React from "react";
import { Login } from "@/components/client/form";

const page = () => {
  return (
    <div className="w-5/6 md:w-1/4 flex flex-col h-[70vh] md:h-[85vh] justify-center align-middle mx-auto text-center">
      <Card className="w-[350px] md:w-[400px] pb-8">
        <CardHeader className="font-semibold">Log in</CardHeader>
        <CardContent>
          <Login />
        </CardContent>
        <h1>or</h1>
        <form
          action={""}
          className="text-sm w-4/5 flex align-middle justify-center items-center gap-4 mx-auto border border-gray-300 p-3 rounded-lg my-4"
        >
          <img className="size-8" src={"/google-logo.png"} alt="google logo" />
          <button type="submit">Log in with Google</button>
        </form>
        <p className="text-sm">
          Don't have an account?
          <Link
            href={"/signup"}
            className="text-[--main-color] font-semibold mx-1"
          >
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default page;
