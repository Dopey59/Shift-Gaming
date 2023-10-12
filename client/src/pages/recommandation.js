export default function Recommandation(){
    return(
        <>
        
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-2xl flex flex-col gap-5 mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-black">Offres du mois avec Amazon</h2>
            <a href="https://amzn.to/3QdNTQb">
                <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                    <h2 className="text-red-500">Découvrir le Gaming store</h2>
                </div>
            </a>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            <a href="https://www.amazon.fr/Gigabyte-GeForce-Eagle-NVIDIA-GDDR6/dp/B096Y1SRFH/ref=sr_1_11?keywords=Geforce+RTX+3060&amp;qid=1696784445&amp;refinements=p_72%253A437873031&amp;rnid=437872031&amp;sr=8-11&amp;ufe=app_do%253Aamzn1.fos.2a4964d5-da8d-479b-a739-01ef3fadb618&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=0ddb1eab14d763b93809a76836628843&camp=1642&creative=6746">
                <div className="text-center">
                    <img className="rounded-xl w-full h-auto mx-auto" src="https://m.media-amazon.com/images/I/81ClTABCRoL._AC_SL1500_.jpg" alt="carte-graphique-rtx-nvidia"/>
                <div className="mt-2 flex flex-col gap-1 sm:mt-4">
                    <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                    Geforce RTX 3060 - 12GB
                    </h3>
                    <div className="flex gap-4 justify-center">
                        <p className="text-sm text-green-600 sm:text-lg ">
                        328€
                        </p>
                        <p className="line-through text-sm sm:text-lg text-gray-600">549€</p>
                    </div>
                </div>
            </div>
            </a>

            {/* <!-- End Col --> */}
            <a href="https://www.amazon.fr/Acer-Predator-PHN16-71-92Z2-Ordinateur-i9-13900HX/dp/B0BZDR6DY1/ref=sr_1_5?__mk_fr_FR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=2NKUEX0GCFB9V&amp;keywords=acer+predator&amp;qid=1696784736&amp;sprefix=asus+predator%252Caps%252C87&amp;sr=8-5&amp;ufe=app_do%253Aamzn1.fos.1c829b25-dd41-4d86-808e-769ccc351105&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=cc8d0c4c76e3835eb7e96fdd48f2de80&camp=1642&creative=6746">
            <div className="text-center">
                <img className="rounded-xl w-full h-auto  mx-auto" width="full" height="auto" src="https://m.media-amazon.com/images/I/71Z89ZNhh1L._AC_SL1500_.jpg" alt="pc-portable-asus-predator"/>
                <div className="mt-2 flex flex-col gap-1 sm:mt-4">
                    <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                    Pc portable - Asus Predator
                    </h3>
                    <div className="flex gap-4 justify-center">
                        <p className="text-sm text-green-600 sm:text-lg">
                        1999€</p>      
                        <p className="line-through text-gray-600 sm:text-lg text-sm">2099€</p>
                    </div>
                    <p className="text-xs sm:block hidden text-red-600 sm:text-sm lg:text-base">
                    5 en stock
                    </p>
                </div>
            </div>
            </a>

            {/* <!-- End Col --> */}
            <a href="https://www.amazon.fr/Vibox-V-45-Gamer-Processeur-Graphique/dp/B09348F8FQ/ref=sr_1_4?__mk_fr_FR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=UMEUB9VVLRU6&amp;keywords=Pc+gamer+-+AMD+Ryzen+5+4500+-+RTX+3050+8Go..&amp;qid=1696784926&amp;sprefix=pc+gamer+-+amd+ryzen+5+4500+-+rtx+3050+8go..%252Caps%252C77&amp;sr=8-4&amp;ufe=app_do%253Aamzn1.fos.f3853b16-5d43-4401-b4fe-e843a596edae&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=d52533b2cbaee69190b192ee4f26e1b0&camp=1642&creative=6746">
                <div className="text-center">
                <img className="rounded-xl w-4/6 h-auto  mx-auto" src="https://m.media-amazon.com/images/I/71yH1NcJX-L._AC_SL1500_.jpg" alt="pc-gamer"/>
                <div className="mt-2 flex flex-col gap-1 sm:mt-4">
                    <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                    Pc gamer -  AMD Ryzen 5 4500 - RTX 3050 8Go..
                    </h3>
                    <div className="flex gap-4 justify-center">
                        <p className="text-sm text-green-600 sm:text-lg">
                        874,95€</p>      
                    </div>
                    <p className="text-xs sm:block hidden text-red-600 sm:text-sm lg:text-base">
                    8 en stock
                    </p>
                </div>
                </div>
            </a>

            {/* <!-- End Col --> */}
            <a href="https://www.amazon.fr/VIBOX-Warrior-Ordinateur-Processeur-Graphique/dp/B00JRD1GBI/ref=pd_ybh_a_sccl_13/259-7540989-6113368?pd_rd_w=vBeMt&amp;content-id=amzn1.sym.159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_p=159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_r=2XNYRMZHWPQRXC37AGSG&amp;pd_rd_wg=BpbYA&amp;pd_rd_r=b52df97d-af8c-4d4e-bc26-11536e239bcf&amp;pd_rd_i=B00JRD1GBI&amp;psc=1&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=b6201226973b4f9d123c325c97f336a2&camp=1642&creative=6746">
            <div className="text-center">
            <img className="rounded-xl w-full h-auto  mx-auto" src="https://m.media-amazon.com/images/I/71h1+fva4pL._AC_SL1500_.jpg" alt="pc + ecran + clavier + souris gamer"/>
            <div className="mt-2 flex flex-col gap-1 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                Pc + ecran + clavier gamer
                </h3>
                <div className="flex gap-4 justify-center">
                    <p className="text-sm text-green-600 sm:text-lg">
                    679,95€</p>      
                    <p className="line-through text-gray-600 sm:text-lg text-sm">799,95€</p>
                </div>
                <p className="text-xs sm:block hidden text-red-600 sm:text-sm lg:text-base">
                3 en stock
                </p>
            </div>
            </div>
            </a>

            {/* <!-- End Col --> */}
            <a href="https://www.amazon.fr/Corsair-Vengeance-3600MHz-Performance-Optimis%25C3%25A9/dp/B082DGZJ9C/ref=pd_ybh_a_sccl_10/259-7540989-6113368?pd_rd_w=vBeMt&amp;content-id=amzn1.sym.159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_p=159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_r=2XNYRMZHWPQRXC37AGSG&amp;pd_rd_wg=BpbYA&amp;pd_rd_r=b52df97d-af8c-4d4e-bc26-11536e239bcf&amp;pd_rd_i=B082DGZJ9C&amp;psc=1&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=4c8e41c7b07bbaf01b6e6e1a40dcf108&camp=1642&creative=6746">
            <div className="text-center">
            <img className="rounded-xl sm:w-full sm:h-auto mx-auto" src="https://m.media-amazon.com/images/I/81cGtM0c+UL._AC_SL1500_.jpg" alt="ram-corsaire-rgb"/>
            <div className="mt-2 flex flex-col gap-1 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                Ram corsaire Vengeance RGB
                </h3>
                <div className="flex gap-4 justify-center">
                    <p className="text-sm text-green-600 sm:text-lg">
                    102,88€</p>      
                    <p className="line-through text-gray-600 sm:text-lg text-sm">195,30€</p>
                </div>
            </div>
            </div>
            </a>

            {/* <!-- End Col --> */}
            <a href="https://www.amazon.fr/Samsung-MZ-V8V500BW-Contr%25C3%25B4le-thermique-intelligent/dp/B08THW4S3T/ref=pd_ybh_a_sccl_12/259-7540989-6113368?pd_rd_w=vBeMt&amp;content-id=amzn1.sym.159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_p=159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_r=2XNYRMZHWPQRXC37AGSG&amp;pd_rd_wg=BpbYA&amp;pd_rd_r=b52df97d-af8c-4d4e-bc26-11536e239bcf&amp;pd_rd_i=B08THW4S3T&amp;psc=1&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=8ccd31280cc5dd265e4db9ca69fe68c0&camp=1642&creative=6746">
            <div className="text-center">
            <img className="rounded-xl w-full h-auto  mx-auto" src="https://m.media-amazon.com/images/I/719mEO3dfzL._AC_SL1500_.jpg" alt="ssd-nvme-samsung-disque-dur"/>
            <div className="mt-2 flex flex-col gap-1 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                SSD Samsung 980 - interne Nvme
                </h3>
                <div className="flex gap-4 justify-center">
                    <p className="text-sm text-green-600 sm:text-lg">
                    39,99€</p>      
                    <p className="line-through text-gray-600 sm:text-lg text-sm">80,60€</p>
                </div>
            </div>
            </div>
            </a>

            {/* <!-- End Col --> */}
            <a href="https://www.amazon.fr/KOORUI-Moniteur-R%25C3%25A9solution-Ultra-Mince-Inclinaison/dp/B0C23M7Y9V/ref=pd_ybh_a_sccl_9/259-7540989-6113368?pd_rd_w=vBeMt&amp;content-id=amzn1.sym.159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_p=159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_r=2XNYRMZHWPQRXC37AGSG&amp;pd_rd_wg=BpbYA&amp;pd_rd_r=b52df97d-af8c-4d4e-bc26-11536e239bcf&amp;pd_rd_i=B0C23M7Y9V&amp;psc=1&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=461484d6b2444934231bb7ff69caf7cf&camp=1642&creative=6746">
            <div className="text-center">
            <img className="rounded-xl w-5/6 h-auto  mx-auto" src="https://m.media-amazon.com/images/I/71m89vLNwiL._AC_SL1500_.jpg" alt="Ecran pc incurvé"/>
            <div className="mt-2 flex flex-col gap-1 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                Ecran pc gaming incurvé - 165Hz
                </h3>
                <div className="flex gap-4 justify-center">
                    <p className="text-sm text-green-600 sm:text-lg">
                    129,99€</p>      
                    <p className="line-through text-gray-600 sm:text-lg text-sm">149,99€</p>
                </div>
            </div>
            </div>
            </a>

            {/* <!-- End Col --> */}
            <a href="https://www.amazon.fr/Samsung-S22C310EAU-Ecran-Bords-R%25C3%25A9solution/dp/B0BQWGCNM8/ref=pd_ybh_a_sccl_8/259-7540989-6113368?pd_rd_w=vBeMt&amp;content-id=amzn1.sym.159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_p=159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_r=2XNYRMZHWPQRXC37AGSG&amp;pd_rd_wg=BpbYA&amp;pd_rd_r=b52df97d-af8c-4d4e-bc26-11536e239bcf&amp;pd_rd_i=B0BQWGCNM8&amp;psc=1&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=5f47ed447e55da46c22f1867176d138f&camp=1642&creative=6746">
            <div className="text-center">
            <img className="rounded-xl w-full h-auto  mx-auto" src="https://m.media-amazon.com/images/I/719Sz2rboqL._AC_SL1500_.jpg" alt="ecran-pc-samsung"/>
            <div className="mt-2 flex flex-col gap-1 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                Ecran Samsung pc gaming - 22"
                </h3>
                <div className="flex gap-4 justify-center">
                    <p className="text-sm text-green-600 sm:text-lg">
                    90,96€</p>      
                    <p className="line-through text-gray-600 sm:text-lg text-sm">130,90€</p>
                </div>
            </div>
            </div>

            </a>
            {/* <!-- End Col --> */}
            <a href="https://www.amazon.fr/Logitech-Casque-Gaming-G%25C3%25A9n%25C3%25A9ration-Headphone/dp/B07TLX61W7/ref=pd_ybh_a_sccl_5/259-7540989-6113368?pd_rd_w=vBeMt&amp;content-id=amzn1.sym.159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_p=159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_r=2XNYRMZHWPQRXC37AGSG&amp;pd_rd_wg=BpbYA&amp;pd_rd_r=b52df97d-af8c-4d4e-bc26-11536e239bcf&amp;pd_rd_i=B07TLX61W7&amp;psc=1&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=60b08c42d279773316677cd73fece530&camp=1642&creative=6746">
            <div className="text-center">
            <img className="rounded-xl w-2/3 h-auto  mx-auto" src="https://m.media-amazon.com/images/I/51y9o94EWkL._AC_SL1000_.jpg" alt="casque-logitech-gaming-x-pro"/>
            <div className="mt-2 flex flex-col gap-1 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                Casque Logitech x Pro
                </h3>
                <div className="flex gap-4 justify-center">
                    <p className="text-sm text-green-600 sm:text-lg">
                    99,99€</p>      
                    <p className="line-through text-gray-600 sm:text-lg text-sm">139,00€</p>
                </div>
            </div>
            </div>
            </a>

            <a href="https://www.amazon.fr/PlayStation-Digital-Manette-DualSense-Couleur/dp/B08H98GVK8/ref=pd_ybh_a_sccl_4/259-7540989-6113368?pd_rd_w=vBeMt&amp;content-id=amzn1.sym.159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_p=159c760c-a9f3-4068-8017-27e5fe81a1dd&amp;pf_rd_r=2XNYRMZHWPQRXC37AGSG&amp;pd_rd_wg=BpbYA&amp;pd_rd_r=b52df97d-af8c-4d4e-bc26-11536e239bcf&amp;pd_rd_i=B08H98GVK8&amp;th=1&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=78b52496499dded574c9cdf2fc40bfbc&camp=1642&creative=6746">
            <div className="text-center">
            <img className="rounded-xl w-3/5 h-auto  mx-auto" src="https://m.media-amazon.com/images/I/51PCx1MUjeL._AC_SL1500_.jpg" alt="ps5-console"/>
            <div className="mt-2 flex flex-col gap-1 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                Playstation 5 - Console Digitale
                </h3>
                <div className="flex gap-4 justify-center">
                    <p className="text-sm text-green-600 sm:text-lg">
                    499€</p>      
                </div>
            </div>
            </div>
            </a>
            {/* <!-- End Col --> */}
        </div>
        </div>
        </>
    )
}