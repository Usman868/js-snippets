import { ChevronLeft, ChevronRight } from "lucide-react";

const Buttons = ({prev, next}) => {
    return (
        <div className="flex gap-4">
            <button
                onClick={prev}
                className="glass-card flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-foreground transition-colors"
                style={{ border: '1px solid hsl(217 60% 30% / 0.6)' }}
            >
                <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <button
                onClick={next}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
                Next <ChevronRight className="h-4 w-4" />
            </button>
        </div>
    )
}


export default Buttons