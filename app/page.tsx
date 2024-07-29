import Container from "@/components/shared/container";
import TopBar from "@/components/shared/top-bar";
import {Title} from "@/components/shared/title";
import Filters from "@/components/shared/filters";
import ProductsGroupList from "@/components/shared/products-group-list";

export default function Home() {
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
                            <ProductsGroupList title="Пиццы" categoryId={1} items={[
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 2,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 3,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 4,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 5,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 6,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 7,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 8,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 9,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                }
                            ]}/>

                            <ProductsGroupList title="Закуски" categoryId={1} items={[
                                {
                                    id: 10,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 11,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 12,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 13,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 14,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 15,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 16,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 17,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 18,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                }
                            ]}/>
                        </div>
                    </div>

                </div>
            </Container>
        </>
    );
}
