import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import { useRaisedShadow } from "../Hooks/use-raised-shadow";
import { ReorderIcon } from "./reaorderIcon";
import { useTranslation } from "react-i18next";

interface IntrestItemProps {
    intrest: { name: string; icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; };
}

const IntrestItem: React.FC<IntrestItemProps> = ({ intrest }) => {
    const y = useMotionValue(0);
    const boxShadow = useRaisedShadow(y);
    const darkControl = useDragControls();
    const { t } = useTranslation();

    return (
        <Reorder.Item
            className="m-1 w-full bg-white dark:bg-gray-700 rounded-lg px-4 py-2 flex items-center justify-between shadow-md select-none"
            value={intrest}
            id={intrest}
            style={{ boxShadow, y }}
            dragListener={false}
            dragControls={darkControl}>
            <div className="flex items-center gap-4">
                <intrest.icon className="w-10 h-10" />
                <span>{t(`about.interests.${intrest.name}`)}</span>
            </div>
            <ReorderIcon dragControls={darkControl} />
        </Reorder.Item>);
};

export default IntrestItem;