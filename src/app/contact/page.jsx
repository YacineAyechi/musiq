"use client";

import { SiteFooter } from "@/components/custom/F";
import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const [state, handleSubmit] = useForm("xovaqzdw");
  if (state.succeeded) {
    router.push("/success");
  }
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">Contact Us</h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="mb-4">
                <Label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </Label>
                <Textarea
                  name="message"
                  id="message"
                  className="mt-1 block w-full"
                  rows={4}
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={state.submitting}
              >
                Send Message
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-gray-500">
              We&apos;ll get back to you as soon as possible.
            </p>
          </CardFooter>
        </Card>
      </div>
      <SiteFooter />
    </>
  );
};

export default Contact;
