import Container from "@/components/shared/container";
import TopBar from "@/components/shared/top-bar";
import {Title} from "@/components/shared/title";
import Filters from "@/components/shared/filters";
import ProductCard from "@/components/shared/product-card";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title className="font-extrabold" text="Все пиццы" size="lg"/>
            </Container>

            <TopBar/>

            <Container className="mt-10 pb-14">
                <div className="flex gap[60px]">

                    {/* Filters */}
                    <div className="w-[250px] mr-[50px]">
                        <Filters/>
                    </div>

                    {/* Porduktlist  */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductCard id={1} name="Пепперони фреш" price={350} imageUrl="https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif"/>
                        </div>
                    </div>

                </div>
            </Container>
        </>
    );
}
