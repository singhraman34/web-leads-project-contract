import { LocationSelect } from "@/components/ui/LocationSelect";
import { UploadCloud } from "lucide-react";

interface StepProjectDetailsProps {
    data: {
        description: string;
        area: string;
        fileName: string;
    };
    updateData: (fields: Partial<{ description: string; area: string; fileName: string }>) => void;
}

export default function StepProjectDetails({ data, updateData }: StepProjectDetailsProps) {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            updateData({ fileName: e.target.files[0].name });
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-widest border-b border-slate-200 pb-4">
                2. Project Specifics
            </h3>

            <div className="space-y-4">
                <label htmlFor="project-description" className="block text-sm font-bold uppercase tracking-widest text-slate-700">Project Description <span className="text-primary">*</span></label>
                <textarea
                    id="project-description"
                    value={data.description}
                    onChange={(e) => updateData({ description: e.target.value })}
                    placeholder="Describe your vision, current challenges, and project goals..."
                    className="w-full min-h-[160px] p-5 bg-white border border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none shadow-sm placeholder:text-slate-400"
                />
            </div>

            <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-700">Project Location (Mumbai Area) <span className="text-primary">*</span></label>
                <LocationSelect 
                    value={data.area}
                    onChange={(area) => updateData({ area })}
                />
            </div>

            <div className="space-y-4 pt-4">
                <label className="block text-sm font-bold uppercase tracking-widest text-slate-700">Attach Plans or Renderings (Optional)</label>
                <div className="relative group cursor-pointer">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        accept=".pdf,.jpg,.jpeg,.png,.dwg"
                    />
                    <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-slate-200 group-hover:border-primary/50 rounded-2xl bg-white transition-all text-center shadow-sm group-hover:shadow-md">
                        <div className="p-4 bg-accent rounded-full mb-4 group-hover:scale-110 transition-transform">
                            <UploadCloud className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-slate-900 font-bold mb-1">
                            {data.fileName ? data.fileName : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-slate-900/40 text-sm font-medium">PDF, JPG, PNG, or AutoCAD (Max. 10MB)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
