import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
                <Button size="lg" variant="ghost" className="flex-1">
                    <Image 
                    src="/hr.svg" 
                    alt="Croatian" 
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"
                    />
                    Croatian
                </Button>
                <Button size="lg" variant="ghost" className="flex-1">
                    <Image 
                    src="/es.svg" 
                    alt="Spanish"  
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"
                    />
                    Spanish
                </Button>
                 <Button size="lg" variant="ghost" className="flex-1">
                    <Image 
                    src="/fr.svg" 
                    alt="French" 
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"
                    />
                    French
                </Button>
                <Button size="lg" variant="ghost" className="flex-1">
                    <Image 
                    src="/it.svg" 
                    alt="Italian" 
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"
                    />
                    Italian
                </Button>
                <Button size="lg" variant="ghost" className="flex-1">
                    <Image 
                    src="/jp.svg" 
                    alt="Japanese" 
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"
                    />
                    Japanese
                </Button>   
            </div>
        </footer>
    );
};