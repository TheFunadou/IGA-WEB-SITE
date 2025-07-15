import ProductCard from "../../components/ProductCard";
// Products data example
import ProductsData from "../products_example.json";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import NavbarSubMenu from "../../components/NavbarSubComponents/NavSubMenu";

const PaginationTest: React.FC = () => {

    const ITEMS_PER_PAGE = 3;

    const [currentPage, setCurrentPage] = useState(0);

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentItems = ProductsData.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(ProductsData.length / ITEMS_PER_PAGE);

    const handlePageClick = (event: { selected: number }) => {
        setCurrentPage(event.selected);
    };


    return (
        <div className="w-full">
            <div className="w-5/6 flex flex-wrap justify-evenly items-center sm:gap-5 border-2">
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
            <div className="mt-4 flex justify-center items-center gap-4">
                <ReactPaginate
                    previousLabel="Anterior"
                    nextLabel="Siguiente"
                    breakLabel="..."
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName="border p-2 rounded-md flex justify-center gap-2 text-sm"
                    pageLinkClassName="px-4 px-2 rounded-lg hover:bg-gray-200 cursor-pointer"
                    activeLinkClassName="bg-blue-500 text-white"
                    previousLinkClassName="px-4 border-r-1 font-bold cursor-pointer"
                    nextLinkClassName="px-4 border-l-1 font-bold cursor-pointer"
                    disabledLinkClassName="opacity-50 cursor-not-allowed"
                    renderOnZeroPageCount={null}
                />
            </div>
            <div>
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <NavbarSubMenu/>
            </div>
        </div>
    );
}

export default PaginationTest;