"use client";
import React from 'react';
import Link from "next/link";

const HomeButton = () => {

    return (
        <Link href="/">
            <button className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300">


                ＋ Home



            </button>
        </Link>


    );
};

export default HomeButton;