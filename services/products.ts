import {instance} from "@/services/instance";

type TypePriceItem = {
    price: number;
}

export type ItemProduct = {
    id: number,
    name: string,
    imgUrl: string,
    price: number,
    items: TypePriceItem[]
}

export const search = async (query: string): Promise<ItemProduct[]> => {
    const {data} = await instance.get<ItemProduct[]>(`/items?name=*${query}`)

    return data;
};

