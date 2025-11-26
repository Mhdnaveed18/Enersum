import { useState, useEffect, useRef } from "react";
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
    const [servicesOpen, setServicesOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);

    const servicesRef = useRef(null);
    const solutionsRef = useRef(null);

    // Close dropdowns if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setServicesOpen(false);
            }
            if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
                setSolutionsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleServices = () => {
        setServicesOpen((prev) => !prev);
        setSolutionsOpen(false);
    };

    const toggleSolutions = () => {
        setSolutionsOpen((prev) => !prev);
        setServicesOpen(false);
    };

    return (
        <header className="fixed top-0 inset-x-0 z-50">
            <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between rounded-2xl bg-[#F5F5F5] px-4 py-3 shadow-[8px_8px_16px_#d6d6d6,_-8px_-8px_16px_#ffffff] border border-white/60">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Enersum Logo"
                            className="h-[40px] w-[125px] rounded-2xl object-cover shadow-[inset_2px_2px_6px_rgba(0,0,0,0.06),inset_-2px_-2px_6px_rgba(255,255,255,0.9)]"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1 relative">
                        <NavItem to="/" label="Home" />
                        <NavItem to="/about" label="About" />

                        {/* Services Dropdown */}
                        <div className="relative" ref={servicesRef}>
                            <button
                                onClick={toggleServices}
                                className="px-4 py-2 text-sm font-medium text-[#333333] hover:text-[#1565C0] flex items-center gap-1"
                            >
                                Services
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className={`w-4 h-4 transform transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {servicesOpen && (
                                <div className="absolute left-0 mt-2 w-52 rounded-xl bg-white shadow-lg border border-gray-200 z-10">
                                    <NavLink
                                        to="/services"
                                        onClick={() => setServicesOpen(false)}
                                        className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-100"
                                    >
                                        Energy Services
                                    </NavLink>
                                    <NavLink
                                        to="/climate-change"
                                        onClick={() => setServicesOpen(false)}
                                        className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-100"
                                    >
                                        Climate
                                    </NavLink>
                                    <NavLink
                                        to="/sustainability"
                                        onClick={() => setServicesOpen(false)}
                                        className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-100"
                                    >
                                        Sustainability
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        {/* Solutions Dropdown */}
                        <div className="relative" ref={solutionsRef}>
                            <button
                                onClick={toggleSolutions}
                                className="px-4 py-2 text-sm font-medium text-[#333333] hover:text-[#1565C0] flex items-center gap-1"
                            >
                                Solutions
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className={`w-4 h-4 transform transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {solutionsOpen && (
                                <div className="absolute left-0 mt-2 w-52 rounded-xl bg-white shadow-lg border border-gray-200 z-10">
                                    <NavLink
                                        to="/solutions"
                                        onClick={() => setSolutionsOpen(false)}
                                        className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-100"
                                    >
                                        Solutions
                                    </NavLink>
                                    <NavLink
                                        to="/renewable-energy"
                                        onClick={() => setSolutionsOpen(false)}
                                        className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-100"
                                    >
                                        Renewable Energy
                                    </NavLink>
                                    <NavLink
                                        to="/service-models"
                                        onClick={() => setSolutionsOpen(false)}
                                        className="block px-4 py-2 text-sm text-[#333333] hover:bg-gray-100"
                                    >
                                        Service Models
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        <NavItem to="/contact" label="Contact" />
                    </nav>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-2">
                        <Link
                            to="/contact"
                            className="hidden sm:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#2E7D32] hover:bg-[#1b5e20] transition-colors shadow-none"
                        >
                            Get in touch
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            aria-label="Toggle Menu"
                            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[#F5F5F5] border border-white/60"
                            onClick={() => setOpen((v) => !v)}
                        >
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

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden mt-2 rounded-2xl bg-[#F5F5F5] shadow-[8px_8px_16px_#d6d6d6,_-8px_-8px_16px_#ffffff] border border-white/60 p-2">
                        <div className="flex flex-col gap-1">
                            <NavItem to="/" label="Home" onClick={() => setOpen(false)} />
                            <NavItem to="/about" label="About" onClick={() => setOpen(false)} />

                            {/* Services dropdown for mobile */}
                            <details>
                                <summary className="cursor-pointer px-4 py-2 text-sm font-medium text-[#333333] hover:text-[#1565C0]">
                                    Services
                                </summary>
                                <div className="ml-4 flex flex-col">
                                    <NavItem to="/services" label="Energy Services" onClick={() => setOpen(false)} />
                                    <NavItem to="/climate-change" label="Climate" onClick={() => setOpen(false)} />
                                    <NavItem to="/sustainability" label="Sustainability" onClick={() => setOpen(false)} />
                                </div>
                            </details>

                            {/* Solutions dropdown for mobile */}
                            <details>
                                <summary className="cursor-pointer px-4 py-2 text-sm font-medium text-[#333333] hover:text-[#1565C0]">
                                    Solutions
                                </summary>
                                <div className="ml-4 flex flex-col">
                                    <NavItem to="/solutions" label="Solutions" onClick={() => setOpen(false)} />
                                    <NavItem to="/renewable-energy" label="Renewables" onClick={() => setOpen(false)} />
                                    <NavItem to="/service-models" label="Service Models" onClick={() => setOpen(false)} />
                                </div>
                            </details>

                            <NavItem to="/contact" label="Contact" onClick={() => setOpen(false)} />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
