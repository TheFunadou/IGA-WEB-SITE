import CategoryMenuTest from "./CategoryMenuTest";

const CategoryTreeTest: React.FC = () => {
    const categoriesData = [
        {
            id: 1,
            category_name: "Cascos de seguridad",
            children: [
                {
                    id: 2,
                    category_name: "Ala completa",
                    children: [
                        {
                            id: 4,
                            category_name: "Ajuste Matraca",
                            children: [
                                {
                                    id: 6,
                                    category_name: "Clase 'G'",
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 3,
                    category_name: "Plagosur",
                    children: [
                        {
                            id: 5,
                            category_name: "Ajuste Matraca",
                            children: [
                                {
                                    id: 7,
                                    category_name: "Clase 'G'",
                                    children: [],
                                },
                                {
                                    id: 8,
                                    category_name: "Clase 'E'",
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ];
    return (
        <div>
            <CategoryMenuTest categories={categoriesData} />
        </div>
    );
};

export default CategoryTreeTest;