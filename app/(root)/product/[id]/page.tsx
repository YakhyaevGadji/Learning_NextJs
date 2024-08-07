import React from 'react';
import Container from "@/components/shared/container";
import ProductImage from "@/components/shared/product-image";
import {getProduct} from "@/services/getProduct";
import {notFound} from "next/navigation";
import {Title} from "@/components/shared/title";
import GroupVariants from "@/components/shared/group-variants";

const ProductPage = async ({params: {id}}: {params: {id: number}}) => {
    const item = await getProduct(id);

    if(!item) {
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            <div className="flex flex-1">
                <ProductImage imgUrl={item.imgUrl} size={40}/>

                <div className="w-[490px] bg-[#f3f2f1] p-7">
                    <Title className="font-extrabold mb-1" text={item.name} size="md"/>

                    <p className="text-gray-400">testetstet</p>
                    
                    <GroupVariants
                        selectedValue="2"
                        items={[
                            {
                                name: 'Маленткая',
                                value: '1'
                            },
                            {
                                name: 'Средняя',
                                value: '2'
                            },
                            {
                                name: 'Большая',
                                value: '3',
                                disabled: true
                            }
                        ]}

                    />
                </div>
            </div>
        </Container>
    );
};

export default ProductPage;