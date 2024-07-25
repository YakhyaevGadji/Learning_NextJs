import React from 'react';
import Container from "@/components/shared/container";
import Categories from "@/components/shared/categories";
import SortPopup from "@/components/shared/sort-popup";
import {cn} from "@/lib/utils";

interface Props {
    className?: string;
}

const TopBar: React.FC<Props> = ({className}) => {
    return (
        <div className={cn('sticky top-0 py-5 bg-white shadow-lg shadow-black/5 z-10', className)}>
            <Container className="flex items-center justify-between">
                <Categories/>
                <SortPopup/>
            </Container>
        </div>
    );
};

export default TopBar;