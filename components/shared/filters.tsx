import React from 'react';
import {Title} from "@/components/shared/title";
import {FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui/input";
import {RangeSlider} from "@/components/shared/range-slider";
import CheckboxFiltersGroup from "@/components/shared/checkbox-filters-group";

interface Props {
    className?: string;
}

const Filters: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Title className="mb-5 font-bold" text="Фильтрация" size="sm"/>

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирвать" value="1"/>
                <FilterCheckbox text="Новинки" value="2"/>
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="flex gap-3 mb-5">Цена от и до</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0}/>
                    <Input type="number" placeholder="100" min={100} max={1000}/>
                </div>
                <RangeSlider min={0} max={5000} step={10}/>
            </div>

            <CheckboxFiltersGroup
                className="mt-5"
                title="Ингредтенты"
                limit={5}
                defaultItems={[
                    {text: 'Моцарелла', value: '1'},
                    {text: 'Сырный соус', value: '2'},
                    {text: 'Чеснок', value: '3'},
                    {text: 'Солённые огручики', value: '4'},
                    {text: 'Красный лук', value: '5'},
                    {text: 'Томат', value: '6'}
                ]}
                items={[
                    {text: 'Моцарелла', value: '1'},
                    {text: 'Сырный соус', value: '2'},
                    {text: 'Чеснок', value: '3'},
                    {text: 'Солённые огручики', value: '4'},
                    {text: 'Красный лук', value: '5'},
                    {text: 'Томат', value: '6'}
                ]}
            />
        </div>
    );
};

export default Filters;