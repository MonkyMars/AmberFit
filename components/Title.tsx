import { ThemedText } from "./ThemedText";

interface TitleProps {
    icon: React.ElementType;
    title: string;
    className?: string;
    singleIcon?: boolean;
}

const Title: React.FC<TitleProps> = ({ icon: Icon, title, className, singleIcon }) => {
    return (
        <ThemedText className={className}>
            {!singleIcon && <Icon className="text-blue-500" size={18} />}
            {title}
            <Icon className="text-amber-500" size={18} />
        </ThemedText>
    );
}

export default Title;