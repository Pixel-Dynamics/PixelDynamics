import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TermsNavbar = ({children}) => {
    const [termsPages, setTermsPages] = useState([]);
    const router = useRouter();

    useEffect(() => {
        axios('/api/get-terms-pages-link')
            .then(data => setTermsPages(data.data))
            .catch(err => console.log(err));
    },[])

    return (
        <div className="px-10 pb-10 lg:ps-16 pt-7">
            <ul className="bg-[#e5e5e5] p-5 laptop:py-3 flex flex-wrap gap-x-10 gap-y-5">
                {
                    termsPages.map((p, i) =>
                        <li key={i}
                            className={`hover:text-black duration-300 text-xl laptop:text-lg font-bold ${router.asPath === `/terms/${p.pageLink}` ? 'text-black' : 'text-[rgba(0,0,0,0.4)]'}  cursor-pointer`}
                            onClick={() => router.push(`/terms/${p.pageLink}`)}>
                            {p.pageName}
                        </li>
                    )
                }
            </ul>
            {children}
        </div>
        
    );
}

export default TermsNavbar;