import Container from "@/components/shared/container";
import TopBar from "@/components/shared/top-bar";
import {Title} from "@/components/shared/title";
import Filters from "@/components/shared/filters";

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
                    <div className="w-[250px]">
                        <Filters/>
                    </div>

                    {/* Porduktlist  */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            Список товаро
                        </div>
                    </div>

                </div>
            </Container>
        </>
    );
}
