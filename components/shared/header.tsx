import React from 'react';
import Container from "@/components/shared/container";
import Logo from "@/app/Logo.png";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {User} from "lucide-react";

interface Props {
    className?: string;
}

const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className="flex items-center justify-between py-8">

                <div className="flex items-center gap-4">
                    <Image src={Logo} alt="logo" width={35} height={35}/>
                    <div>
                        <h1 className="text-2xl uppercase font-black">Next pizza</h1>
                        <p className="text-sm text-gray-400 leading-3">Вкусней уже некуда</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline">
                        <User className="flex items-center gap-1" size={16}/>
                        Войти
                    </Button>
                </div>

            </Container>
        </header>
    );
};

export default Header;