import {instance} from "@/services/instance";
import {ItemProduct} from "@/services/products";

export const getProduct = async (query: number): Promise<ItemProduct> => {
    const {data} = await instance.get<ItemProduct>(`/items/${query}`)

    return data;
};

