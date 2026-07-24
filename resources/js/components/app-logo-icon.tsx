import type { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src="/Creativityliberty.png"
            alt="Liberty Creativity School Logo"
            {...props}
        />
    );
}
