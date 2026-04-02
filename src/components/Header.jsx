import { Code2 } from "lucide-react";
const Header = () => {
    return (
        <header className="glass-card border-0 border-b px-6 py-4 flex items-center gap-3">
            <Code2 className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold tracking-tight text-foreground">
                JS<span className="text-primary">Snippets</span>
            </span>
        </header>
    )
}

export default Header