import React from 'react';
import {cn} from "@/lib/utils";
import PizzaImage from "@/components/shared/pizza-image";
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui/button";
import GroupVariants from "@/components/shared/group-variants";
import {pizzaSizes, pizzaTypes} from "@/constants/pizza";
import IngredientItem from "@/components/shared/ingredient-item";

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
    const [size, setSize] = React.useState(20);
    const [type, setType] = React.useState(1);

    const textDetails = '30 см, традиционное тесто 30';
    const totalPrice = 350;

    return (
        <div className={cn('flex flex-1', className)}>
            <PizzaImage imgUrl={imgUrl} size={size}/>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title className="font-extrabold mb-1" text={name} size="md"/>

                <p className="text-gray-400">{textDetails}</p>
                
                <GroupVariants
                    onClick={value => setSize(Number(value))}
                    items={pizzaSizes}
                    value={String(size)}
                />

                <GroupVariants
                    onClick={value => setType(Number(value))}
                    items={pizzaTypes}
                    value={String(type)}
                />

                <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-y-auto scrollbar">
                    <div className="grid grid-cols-3 gap-3">
                        {ingredients.map((ingredient) => (
                            <IngredientItem
                                key={ingredient.id}
                                name={ingredient.name}
                                imgUrl={ingredient.imgUrl}
                                price={ingredient.price}
                                onClick={onClickAdd}
                            />
                        ))}
                    </div>
                </div>

                <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить в карзину за {totalPrice} $
                </Button>
            </div>
        </div>
    );
};

export default ChoosePizzaForm;
