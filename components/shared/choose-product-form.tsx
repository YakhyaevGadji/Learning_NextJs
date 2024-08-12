import React from 'react';
import {cn} from "@/lib/utils";
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui/button";

interface IProps {
    className?: string;
    imgUrl: string;
    name: string;
    ingredients: any[];
    items?: any[];
    onClickAdd?: VoidFunction;
}

const ChooseProductForm: React.FC<IProps> = (props) => {
    const {className, name, imgUrl, /*onClickAdd*/ /*ingredients*/} = props;

    const textDetails = '30 см, традиционное тесто 30';
    const totalPrice = 350;

    return (
        <div className={cn('flex flex-1', className)}>
            <div className="flex items-center justify-center flex-1 relative w-full">
                <img className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
                     src={imgUrl}
                     alt={name}
                />
            </div>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title className="font-extrabold mb-1" text={name} size="md"/>

                <p className="text-gray-400">{textDetails}</p>

                <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить в карзину за {totalPrice} $
                </Button>
            </div>
        </div>
    );
};

export default ChooseProductForm;
