import React from "react";
import {getAllIngredients, IIngredient} from "@/services/ingredients";
import {useSet} from "react-use";

interface Props {
    loading: boolean;
    ingredients: IIngredient[];
    selectedIds: Set<string>;
    onAddId: (id: string) => void;
}

export const useFilterIngredients = (values: string[] = []): Props => {
    const [ingredients, setIngredients] = React.useState<IIngredient[]>([]);
    const [loading, setLoading] = React.useState(true);

    const [selectedIds, {toggle}] = useSet(new Set<string>(values));

    React.useEffect(() => {
        async function fetchAllIngredients() {
            try {
                setLoading(true);
                const ingredients = await getAllIngredients();

                setIngredients(ingredients);
            }catch (error) {
                console.log(error);
            }finally {
                setLoading(false);
            }
        }

        fetchAllIngredients().then(r => r);
    }, []);

    return {ingredients, loading, onAddId: toggle, selectedIds};
}