"use strict";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-zinc-900">
            <div className="container px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-sm bg-zinc-800 flex items-center justify-center font-bold text-white text-xs">
                        V
                    </div>
                    <span className="text-lg font-bold text-zinc-500">VBUILD</span>
                </div>

                <p className="text-zinc-600 text-sm">
                    © {new Date().getFullYear()} VBuild. All rights reserved.
                </p>

                <div className="flex gap-6">
                    {/* Socials placeholder */}
                    <span className="w-5 h-5 bg-zinc-800 rounded-full hover:bg-primary cursor-pointer transition-colors"></span>
                    <span className="w-5 h-5 bg-zinc-800 rounded-full hover:bg-primary cursor-pointer transition-colors"></span>
                    <span className="w-5 h-5 bg-zinc-800 rounded-full hover:bg-primary cursor-pointer transition-colors"></span>
                </div>
            </div>
        </footer>
    );
}
