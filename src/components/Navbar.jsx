import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/navbar/logo.jpg";

function NavItem({ to, label, onClick }) {
    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) =>
                [
                    "relative px-4 py-2 rounded-xl text-sm font-medium transition-colors",
                    "text-[#333333] hover:text-[#1565C0]",
                    isActive
                        ? "text-[#2E7D32] after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-0.5 after:bg-[#2E7D32]"
                        : "",
                ].join(" ")
            }
        >
            {label}
        </NavLink>
    );
}

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 inset-x-0 z-50">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                {/* Neumorphic container */}
                <div className="flex items-center justify-between rounded-2xl bg-[#F5F5F5] px-4 py-3 shadow-[8px_8px_16px_#d6d6d6,_-8px_-8px_16px_#ffffff] border border-white/60">

                    {/* Brand */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Enersum Logo"
                            className="h-[40px] w-[125px] rounded-2xl object-cover shadow-[inset_2px_2px_6px_rgba(0,0,0,0.06),inset_-2px_-2px_6px_rgba(255,255,255,0.9)]"
                        />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        <NavItem to="/" label="Home" />
                        <NavItem to="/about" label="About" />
                        <NavItem to="/services" label="Services" />
                        <NavItem to="/solutions" label="Solutions" />
                        <NavItem to="/renewable-energy" label="Renewables" />
                        <NavItem to="/climate-change" label="Climate" />
                        <NavItem to="/sustainability" label="Sustainability" />
                        <NavItem to="/service-models" label="Service Models" />
                        <NavItem to="/contact" label="Contact" />
                    </nav>

                    {/* CTA + Mobile toggle */}
                    <div className="flex items-center gap-2">
                        <Link
                            to="/contact"
                            className="hidden sm:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#2E7D32] hover:bg-[#1b5e20] transition-colors shadow-none"
                        >
                            Get in touch
                        </Link>
                        <button
                            aria-label="Toggle Menu"
                            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[#F5F5F5] shadow-none border border-white/60"
                            onClick={() => setOpen((v) => !v)}
                        >
                            {/* Simple hamburger icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#333333"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="md:hidden mt-2 rounded-2xl bg-[#F5F5F5] shadow-[8px_8px_16px_#d6d6d6,_-8px_-8px_16px_#ffffff] border border-white/60 p-2">
                        <div className="grid grid-cols-2 gap-1">
                            <NavItem to="/" label="Home" onClick={() => setOpen(false)} />
                            <NavItem to="/about" label="About" onClick={() => setOpen(false)} />
                            <NavItem to="/services" label="Services" onClick={() => setOpen(false)} />
                            <NavItem to="/solutions" label="Solutions" onClick={() => setOpen(false)} />
                            <NavItem to="/renewable-energy" label="Renewables" onClick={() => setOpen(false)} />
                            <NavItem to="/climate-change" label="Climate" onClick={() => setOpen(false)} />
                            <NavItem to="/sustainability" label="Sustainability" onClick={() => setOpen(false)} />
                            <NavItem to="/service-models" label="Service Models" onClick={() => setOpen(false)} />
                            <NavItem to="/contact" label="Contact" onClick={() => setOpen(false)} />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
