import React from 'react';
import {cn} from "@/lib/utils";
import PizzaImage from "@/components/shared/pizza-image";
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui/button";
import {size} from "@floating-ui/dom";
// import {TypePriceItem} from "@/services/products";

interface IProps {
    className?: string;
    imgUrl: string;
    name: string;
    ingredients: any[];
    items?: any[];
    onClickAdd?: VoidFunction;
}

const ChoosePizzaForm: React.FC<IProps> = (props) => {
    const {className, name, imgUrl, onClickAdd, ingredients} = props;

    const textDetails = '30 см, традиционное тесто 30';
    const totalPrice = 350;
    const size = 30;

    return (
        <div className={cn('flex flex-1', className)}>
            <PizzaImage imgUrl={imgUrl} size={size}/>

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

export default ChoosePizzaForm;