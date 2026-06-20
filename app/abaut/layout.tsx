import Abaut from "../abaut/page";


interface AbautLayoutProps{
    children: React.ReactNode;
}


export default function AbautLayout({ children }: AbautLayoutProps) {
    return (
        <div>
            {children}
        </div>
    )
 }