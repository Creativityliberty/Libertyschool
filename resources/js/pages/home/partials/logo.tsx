import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white border border-[#E7E7E7] flex items-center justify-center shrink-0 shadow-sm">
                <img
                    src="/Creativityliberty.png"
                    alt="Liberty Creativity School"
                    className="w-full h-full object-contain p-0.5"
                />
            </div>
            <span className="font-bold text-base md:text-lg tracking-tight text-foreground whitespace-nowrap">
                Liberty Creativity <span className="text-primary">School</span>
            </span>
        </div>
    );
};

export default Logo;
