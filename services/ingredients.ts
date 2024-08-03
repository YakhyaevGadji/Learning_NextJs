import {instance} from "@/services/instance";

export interface IIngredient {
    id: number;
    name: string;
}

export const getAllIngredients = async (): Promise<IIngredient[]> => {
    const {data} = await instance.get<IIngredient[]>(`/ingredients`);

    return data as IIngredient[];
};

