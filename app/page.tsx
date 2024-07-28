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
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                }
                            ]}/>

                            <ProductsGroupList title="Пиццы" categoryId={1} items={[
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: 'Чизбургер-Пиццы',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
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
