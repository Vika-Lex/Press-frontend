import style from "./Container.module.scss"
import React from "react";
import {clsx} from "clsx";

interface Props {
    className?: string;
        children: React.ReactNode
}

// Header
const Container = ({children, className}: Props) => {
    return (
        <div className={clsx(style.container, className)}>
            {children}
        </div>
    );
};
export default Container