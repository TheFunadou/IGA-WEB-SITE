import ProductCard from "../components/ProductCard";
// Products data example
import ProductsData from "./products_example.json"
import CategoriesData from "./categories_tree.json"

// Hooks
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Shop: React.FC = () => {
    
    //Product pagination 
    const ITEMS_PER_PAGE = 5;

    const [currentPage, setCurrentPage] = useState(0); //set the number of the page
    const offset = currentPage * ITEMS_PER_PAGE; // 
    const currentItems = ProductsData.slice(offset, offset + ITEMS_PER_PAGE); //cut the data
    const pageCount = Math.ceil(ProductsData.length / ITEMS_PER_PAGE);//get the number of pages for list the items

    const handlePageClick = (event: { selected: number }) => {
        setCurrentPage(event.selected); //change the page
    };


    // Test categories
    interface Category {
        id: number;
        category_name: string;
        description: string;
        subcategories: Category[];
    }

    const categoryData = CategoriesData as Category;

    // Función recursiva para mostrar las categorías
    const renderCategory = (category: Category) => {
        return (
            <div key={category.id} className="ml-4 mt-2  pl-2">
                <h3>{category.category_name}</h3>

                {category.subcategories.length > 0 && (
                    <div className="ml-4">
                        {category.subcategories.map((subcat) => renderCategory(subcat))}
                    </div>
                )}
            </div>
        );
    };



    return (
        <div className="flex">
            <section className="hidden xl:block w-1/6  border-r-1 border-gray-200 p-5">
                <p className="font-bold text-2xl mb-4">Categorias</p>
                <div className="flex flex-col gap-2">
                    {/* <p>Barboquejos {'>'}</p>
                    <div>

                    </div>
                    <p>Cascos de seguridad {'>'}</p>
                    <div>

                    </div>
                    <p>Lentes {'>'}</p>
                    <div>

                    </div>
                    <p>Suspensiones {'>'}</p>
                    <div>

                    </div>
                    <p>Otros productos {'>'}</p>
                    <div>

                    </div> */}
                    {renderCategory(categoryData)}

                </div>
                <p className="font-bold text-2xl mb-4 mt-5">Filtros</p>
                <div>
                    <p className="font-semibold text-xl mb-2">Precio</p>
                    <div className="flex flex-col gap-5">
                        <p>Mas economico</p>
                        <p>Mayor precio</p>
                        <p>En oferta</p>
                        <p>Rango de precios</p>
                        <div className="flex items-center gap-4">
                            <input className="w-1/2 border-1 border-gray-400 rounded-md text-sm p-1 text-center bg-white" type="text" placeholder="minimo" />
                            <span>-</span>
                            <input className="w-1/2 border-1 border-gray-400 rounded-md text-sm p-1 text-center bg-white" type="text" placeholder="máximo" />
                            <button className="btn-circle w-1/6 bg-blue-900 text-white hover:scale-110 duration-130 ">{">"}</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full xl:w-5/6 p-2 md:p-5">
                <p className="font-bold text-4xl mb-4">Nombre categoria</p>
                <p className="text-gray-500 mb-5">Mostrando {(currentPage + 1) * ITEMS_PER_PAGE} de {ProductsData.length} elementos</p>
                <div className="w-full flex flex-wrap justify-start xl:justify-start items-center sm:gap-5">
                    {currentItems.map((product) => (
                        <ProductCard
                            key={product.sku}
                            sku={product.sku}
                            productName={product.name}
                            category={product.description}
                            price={product.price}
                            imageUrl={product.image_url}
                            favoriteInitialState={product.favorite}
                            isOffer={product.isOffer}
                            offerDiscount={product.offerDiscount}
                        />
                    ))}
                </div>
                <div className="mt-5">
                    <div >
                        <ReactPaginate
                            previousLabel="Ant"
                            nextLabel="Sig"
                            breakLabel="..."
                            pageCount={pageCount}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={2}
                            onPageChange={handlePageClick}
                            containerClassName="p-2 rounded-md flex md:gap-4 text-sm"
                            pageLinkClassName="px-3 py-2 rounded-full cursor-pointer"
                            activeLinkClassName="bg-blue-900 text-white"
                            previousLinkClassName="px-4 py-2 rounded-lg bg-gray-300 font-bold cursor-pointer"
                            nextLinkClassName="px-4 py-2 bg-gray-300 rounded-lg font-bold cursor-pointer"
                            disabledLinkClassName="opacity-50 cursor-not-allowed"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Shop;