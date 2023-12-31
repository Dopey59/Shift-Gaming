import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import ReactPaginate from 'react-paginate';

function APIData() {
    //Pagination Params//
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6; // Nombre d'articles par page
    const affiliateLink = 'https://track.effiliation.com/servlet/effi.click?id_compteur=22917775'; // Votre lien affilié

    const [parsedData, setParsedData] = useState({ data: [] });

    const fetchData = async () => {
        const apiUrl = 'https://products.effinity.fr/product-output/output/22917774?apikey=eqs63kY4bEXDmeLOCmwsnOakFpt8LlSR';

        try {
            const response = await axios.get(apiUrl);
            console.log(response.data);
            console.log(parsedData.data)
            const parsed = Papa.parse(response.data, { header: true, skipEmptyLines: true });
            const dataWithAffiliateLinks = parsed.data.map(item => {
                item.link = `${affiliateLink}&url=${encodeURIComponent(item.link)}`;
                return item;
            });
            setParsedData({ data: dataWithAffiliateLinks });
        } catch (error) {
            console.error('Erreur lors de la récupération des données de l\'API :', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (parsedData.data.length > 0) {
            setPageCount(Math.ceil(parsedData.data.length / itemsPerPage));
            const startIndex = currentPage * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            setData(parsedData.data.slice(startIndex, endIndex));
        }
    }, [currentPage, parsedData]);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    // Filtrer les chaises
    const chaises = data.filter(item => item.category.toLowerCase() === 'chaises');

    // Filtrer les bureaux
    const bureaux = data.filter(item => item.category.toLowerCase() === 'bureau');

    return (
        <div className="w-full h-auto">

            <div className="flex justify-center text-3xl font-bold bg-zinc-900 text-white p-12">
                <h1 className="">Chaises & bureaux gaming </h1>
            </div>

                <div className="grid sm:grid-cols-3 grid-cols-1">
                    {chaises.map(item => (
                        <div className="sm:p-8 flex w-full h-auto p-2">
                            <div className="p-12 flex flex-col gap-12 items-center">
                                <div>
                                    <h2 className="text-2xl font-bold">{item.title}</h2>
                                </div>
                                <div className="flex flex-col justify-center  items-center" key={item.id}>
                                    <img className="w-64 h-auto"  src={item.image_link} alt={item.title} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold">
                                        Présentation du produit:{" "}
                                    </p>
                                        <hr className="mt-4 mb-4 "/>
                                    <div className="text-md flex gap-1 text-base/7">
                                        {item.description.length >= 600
                                            ? `${item.description.slice(0, 312)} .. `
                                            : item.description}
                                    </div>
                                </div>
                                <p className="font-bold">Prix: {item.price}€</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <button
                                        className="p-2 bg-rose-500 rounded font-bold text-white
                                        hover:bg-rose-600 transition duration-0 hover:duration-500 hover:cursor-pointer
                                       ">
                                        Voir le site
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>


            <ReactPaginate
                className="flex justify-between p-6"
                previousLabel={'Précédent'}
                nextLabel={'Suivant'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    );
}

export default APIData;
