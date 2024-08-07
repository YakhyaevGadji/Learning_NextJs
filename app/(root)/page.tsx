import Container from "@/components/shared/container";
import TopBar from "@/components/shared/top-bar";
import {Title} from "@/components/shared/title";
import Filters from "@/components/shared/filters";
import ProductsGroupList from "@/components/shared/products-group-list";
import {getProducts} from "@/services/getProducts";

export default async function Home() {
    const products = await getProducts();

    return (
        <>
            <Container className="mt-10">
                <Title className="font-extrabold" text="Все пиццы" size="lg"/>
            </Container>

            <TopBar/>

            <Container className="mt-10 pb-14">
                <div className="flex gap[80px]">

                    {/* Filters */}
                    <div className="w-[250px] mr-[50px]">
                        <Filters/>
                    </div>

                    {/* Porduktlist  */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList title="Пиццы" categoryId={1} items={products}/>

                            <ProductsGroupList title="Комбо" categoryId={2} items={products}/>
                        </div>
                    </div>

                </div>
            </Container>
        </>
    );
}
