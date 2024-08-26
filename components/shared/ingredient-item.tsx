import React from 'react';
import {cn} from "@/lib/utils";
import {CircleCheck} from "lucide-react";

interface IProps {
    className?: string;
    imgUrl: string;
    name: string;
    price: number;
    active?: boolean;
    onClick?: () => void;
}

const IngredientItem: React.FC<IProps> = (props) => {
    const {className, onClick, active, imgUrl, name, price} = props;

    return (
        <div className={cn(
            'flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white',
            { 'border border-primary': active },
            className
        )} onClick={onClick}>
            {active && <CircleCheck className="absolute top-2 right-2 text-primary"/>}
            <img src={imgUrl} width={110} height={110} alt="icon"/>
            <span className="text-xs mb-1">{name}</span>
            <span className="font-bold">{price} $</span>
        </div>
    );
};

export default IngredientItem;
