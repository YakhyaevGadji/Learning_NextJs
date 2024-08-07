import {instance} from "@/services/instance";
import {ItemProduct} from "@/services/products";

export const getProducts = async (): Promise<ItemProduct[]> => {
    const {data} = await instance.get<ItemProduct[]>('/items');

    return data;
};

