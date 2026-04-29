"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Search, MapPin, ChevronDown, Check } from "lucide-react";

const MUMBAI_AREAS = [
  "Andheri East", "Andheri West",
  "Bandra East", "Bandra West",
  "Borivali East", "Borivali West",
  "Kandivali East", "Kandivali West",
  "Malad East", "Malad West",
  "Goregaon East", "Goregaon West",
  "Jogeshwari East", "Jogeshwari West",
  "Vile Parle East", "Vile Parle West",
  "Santacruz East", "Santacruz West",
  "Kurla East", "Kurla West",
  "Ghatkopar East", "Ghatkopar West",
  "Powai",
  "Mulund East", "Mulund West",
  "Bhandup", "Nahur",
  "Chembur", "Govandi",
  "Dadar", "Matunga",
  "Parel", "Lower Parel",
  "Worli", "Prabhadevi",
  "Colaba", "Churchgate", "Marine Lines",
  "Byculla", "Mazgaon",
  "Thane", "Navi Mumbai"
];

interface LocationSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function LocationSelect({ value, onChange, placeholder = "Select Area..." }: LocationSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(-1);
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      setSearchQuery("");
      setActiveIndex(-1);
    }
  }, [isOpen]);

  useEffect(() => {
    if (activeIndex >= 0 && listboxRef.current) {
      const activeElement = listboxRef.current.children[activeIndex] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [activeIndex]);

  const filteredLocations = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) return [...MUMBAI_AREAS, "Other"];

    const startsWith = MUMBAI_AREAS.filter(loc =>
      loc.toLowerCase().startsWith(query)
    );

    const includes = MUMBAI_AREAS.filter(
      loc =>
        loc.toLowerCase().includes(query) &&
        !loc.toLowerCase().startsWith(query)
    );

    return [...startsWith, ...includes, "Other"];
  }, [searchQuery]);

  const handleSelect = (areaName: string) => {
    onChange(areaName);
    setIsOpen(false);
    setTimeout(() => triggerRef.current?.focus(), 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    if (e.key === "Escape") {
      setIsOpen(false);
      setTimeout(() => triggerRef.current?.focus(), 0);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filteredLocations.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && activeIndex < filteredLocations.length) {
        handleSelect(filteredLocations[activeIndex]);
      }
    }
  };

  return (
    <div className="relative w-full" ref={containerRef} onKeyDown={handleKeyDown}>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="location-listbox"
        aria-label={value || placeholder}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-5 bg-white border rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 shadow-sm outline-none focus-visible:ring-4 focus-visible:border-primary ${
          isOpen ? "border-primary ring-4 ring-primary/10" : "border-slate-200 hover:border-slate-300"
        }`}
      >
        <div className="flex items-center gap-3 pointer-events-none">
          <MapPin className={`w-5 h-5 ${value ? "text-primary" : "text-slate-400"}`} />
          <span className={`${value ? "text-slate-900 font-bold" : "text-slate-400 font-medium"}`}>
            {value || placeholder}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 pointer-events-none ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Search Input */}
          <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              ref={inputRef}
              type="text"
              role="searchbox"
              aria-label="Search location"
              placeholder="Search location..."
              className="w-full bg-transparent text-sm focus:outline-none text-slate-900 placeholder:text-slate-400"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveIndex(-1);
              }}
              tabIndex={0}
            />
          </div>

          {/* Results List */}
          <ul
            id="location-listbox"
            role="listbox"
            ref={listboxRef}
            className="max-h-[320px] overflow-y-auto custom-scrollbar px-2 py-2 m-0"
          >
            {filteredLocations.map((loc, index) => {
              const isSelected = value === loc;
              const isActive = index === activeIndex;

              return (
                <li
                  key={loc}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(loc)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group px-4 py-3 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-200 ${
                    isSelected || isActive
                      ? "bg-slate-50 text-slate-900 font-bold"
                      : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="text-sm font-semibold">
                    {loc}
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-slate-400" />}
                </li>
              );
            })}

            {filteredLocations.length <= 1 && searchQuery && (
              <li className="p-8 text-center list-none" role="presentation">
                <p className="text-slate-400 text-sm italic font-medium">No area found</p>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
