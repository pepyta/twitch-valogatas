import { createContext, PropsWithChildren, useContext, useState } from "react";

export const useCategory = () => {
    const { category, setCategory } = useContext(CategoryContext);

    const toggle = (tag: number) => {
        if(category.includes(tag)) {
            setCategory([...(category.filter((el) => el !== tag))]);
        } else {
            setCategory([...category, tag]);
        }
    };

    const select = (tag: number) => {
        setCategory([tag]);
    };

    return {
        category,
        toggle,
        select,
    };
};

const CategoryContext = createContext<{
    category: number[],
    setCategory: (val: number[]) => void;
}>(null);

const CategoryProvider = (props: PropsWithChildren<{}>) => {
    const [category, setCategory] = useState<number[]>([]);
    
    return (
        <CategoryContext.Provider value={{ category, setCategory }}>
            {props.children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;