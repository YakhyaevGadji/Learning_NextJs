import {instance} from "@/services/instance";

export type ItemProduct = {
    id: number,
    title: string,
    imgUrl: string,
}

export const search = async (query: string): Promise<ItemProduct[]> => {
    const {data} = await instance.get<ItemProduct[]>(`/items?title=*${query}`)

    return data;
};

