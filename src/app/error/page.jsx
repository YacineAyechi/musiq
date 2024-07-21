"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiteFooter } from "@/components/custom/F";
import Navbar from "@/components/custom/Navbar";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-[83vh] text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-10 bg-gray-800 rounded-lg shadow-lg w-[500px]"
        >
          <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mb-6 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7a1 1 0 112 0v2a1 1 0 01-2 0v-2zm0-4a1 1 0 112 0v4a1 1 0 01-2 0V7z"
              clipRule="evenodd"
            />
          </motion.svg>
          <h1 className="text-3xl font-bold mb-4">Error!</h1>
          <p className="text-lg mb-2">
            Something went wrong. Please try again.
          </p>
          <Link
            className="text-lg hover:text-slate-400 transition-colors duration-300"
            href="/"
          >
            Go Back to Home
          </Link>
        </motion.div>
      </div>

      <SiteFooter />
    </>
  );
};

export default ErrorPage;
