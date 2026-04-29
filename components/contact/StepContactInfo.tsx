import { User, Phone, Mail } from "lucide-react";

interface StepContactInfoProps {
    data: {
        name: string;
        phone: string;
        email: string;
    };
    updateData: (fields: Partial<{ name: string; phone: string; email: string }>) => void;
}

export default function StepContactInfo({ data, updateData }: StepContactInfoProps) {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-widest border-b border-slate-200 pb-4">
                3. Contact Information
            </h3>

            <div className="space-y-6">
                <div>
                    <label htmlFor="full-name" className="block text-sm font-bold uppercase tracking-widest text-slate-700 mb-2">Full Name <span className="text-primary">*</span></label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center xl:pointer-events-none">
                            <User className="w-5 h-5 text-slate-400" />
                        </div>
                        <input
                            id="full-name"
                            type="text"
                            value={data.name}
                            onChange={(e) => updateData({ name: e.target.value })}
                            placeholder="Your full name"
                            className="w-full pl-12 pr-4 py-5 bg-white border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="phone-number" className="block text-sm font-bold uppercase tracking-widest text-slate-700 mb-2">Phone Number <span className="text-primary">*</span></label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center xl:pointer-events-none">
                            <Phone className="w-5 h-5 text-slate-400" />
                        </div>
                        <input
                            id="phone-number"
                            type="tel"
                            value={data.phone}
                            onChange={(e) => updateData({ phone: e.target.value })}
                            placeholder="+91 XXXX XXXXX"
                            className="w-full pl-12 pr-4 py-5 bg-white border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email-address" className="block text-sm font-bold uppercase tracking-widest text-slate-700 mb-2">Email Address <span className="text-primary">*</span></label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center xl:pointer-events-none">
                            <Mail className="w-5 h-5 text-slate-400" />
                        </div>
                        <input
                            id="email-address"
                            type="email"
                            value={data.email}
                            onChange={(e) => updateData({ email: e.target.value })}
                            placeholder="you@company.com"
                            className="w-full pl-12 pr-4 py-5 bg-white border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
                        />
                    </div>
                </div>
            </div>

            <p className="text-xs text-slate-500 mt-6 mt-4">
                We respect your privacy. All project details are strictly confidential and will exclusively be used to provide an accurate estimation.
            </p>
        </div>
    );
}
