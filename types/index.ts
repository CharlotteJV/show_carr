import { MouseEventHandler } from "react";

export interface CustomerPros {
    title: string;
    containerStyles?: string;
    handleClick:
    MouseEventHandler<HTMLButtonElement>;
    btnTypes?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisable?: string;
}

export interface SearchManufacturerPros {
    manufacturer: String;
    setManuFacturer: (manufacturer: string) => void;
}
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterPros {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}
export interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps {
    title: string;
    option: OptionProps[];
}
export const updateSearchParm = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()
        }`
    return newPathname;
}
export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}