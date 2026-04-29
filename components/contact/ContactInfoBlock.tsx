import { CONTACT_DATA } from "@/lib/data/contact";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import Image from "next/image";

export default function ContactInfoBlock() {
    const { company } = CONTACT_DATA;

    return (
        <div className="bg-[#1C1C1C] border border-white/5 rounded-[14px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden h-full flex flex-col group">
            {/* Premium Visual Accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A96A]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#C9A96A]/10 transition-all duration-1000" />

            {/* Top Section: Contact Info */}
            <div className="relative z-10 p-10 md:p-14 pb-6">
                <div className="inline-block px-4 py-2 bg-[#C9A96A]/10 border border-[#C9A96A]/20 text-[#C9A96A] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
                    Corporate Access
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-[0.8]">
                    Mumbai <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A96A] via-[#EAD0A8] to-[#C9A96A]">HQ.</span>
                </h2>

                <div className="space-y-8">
                    <div className="flex items-start gap-4 group/item cursor-default">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover/item:border-[#C9A96A]/50 group-hover/item:bg-white/10 transition-all duration-500 shrink-0">
                            <MapPin className="w-5 h-5 text-[#C9A96A]" />
                        </div>
                        <div className="min-w-0">
                            <h4 className="text-white/30 uppercase tracking-[0.2em] text-[10px] font-black mb-1">Primary Location</h4>
                            <p className="text-base text-white/80 font-medium group-hover/item:text-white transition-colors">{company.address}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group/item cursor-default">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover/item:border-[#C9A96A]/50 group-hover/item:bg-white/10 transition-all duration-500 shrink-0">
                            <Phone className="w-5 h-5 text-[#C9A96A]" />
                        </div>
                        <div className="min-w-0">
                            <h4 className="text-white/30 uppercase tracking-[0.2em] text-[10px] font-black mb-1">Direct Line</h4>
                            <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="text-lg text-white font-black hover:text-[#C9A96A] transition-colors tracking-tight">
                                {company.phone}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group/item cursor-default">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover/item:border-[#C9A96A]/50 group-hover/item:bg-white/10 transition-all duration-500 shrink-0">
                            <Mail className="w-5 h-5 text-[#C9A96A]" />
                        </div>
                        <div className="min-w-0">
                            <h4 className="text-white/30 uppercase tracking-[0.2em] text-[10px] font-black mb-1">Correspondence</h4>
                            <a href={`mailto:${company.email}`} className="text-base text-white font-bold hover:text-[#C9A96A] transition-colors tracking-tight break-all">
                                {company.email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Image with Design */}
            <div className="mt-auto relative w-full p-4 h-[350px]">
                <div className="relative h-full w-full rounded-[10px] overflow-hidden border border-white/10 group-hover:border-[#C9A96A]/30 transition-all duration-700 shadow-2xl">
                    <Image
                        src="/images/pexels-tiana-18128-2995012.jpg"
                        alt="Interior Design"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Artistic gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/40 to-transparent opacity-80" />

                    {/* Availability Floating Badge */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                        <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-3">
                            <div className="flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </div>
                            <span className="text-[10px] font-bold text-white uppercase tracking-widest leading-none">Open: {company.workingHours}</span>
                        </div>

                        <div className="w-10 h-10 rounded-full bg-[#C9A96A] flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-[360deg]">
                            <Globe className="w-5 h-5 text-black" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Texture Overlay */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        </div>
    );
}
