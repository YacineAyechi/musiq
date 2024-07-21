"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/custom/Navbar";
import { SiteFooter } from "@/components/custom/F";

const NotFoundPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-[83vh] text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center p-10 bg-gray-800 rounded-lg shadow-lg text-center w-[500px]"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-red-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-lg mb-4">Oops! Page not found.</p>
          <Link
            href="/"
            className="text-lg hover:text-slate-400 transition-colors duration-300"
          >
            Go back to homepage
          </Link>
        </motion.div>
      </div>

      <SiteFooter />
    </>
  );
};

export default NotFoundPage;
