import Image from "next/image";
import shopping from "../public/images/shopping-cart-solid.svg";
import search from "../public/images/search-solid.svg";

const Search = ()=>{

    return(
        <div className="div-search-market container-fluid">
            <div className="sous-div-search-market container">
                <div className="row justify-content-between">
                    <div className="div-search col-6 row justify-content-between align-items-center">
                        <select name="" id="" className="col-4">
                            <option value="">Vetements</option>
                            <option value="">Chausssures</option>
                            <option value="">Vestes</option>
                            <option value="">Chargeur</option>
                        </select>
                        <input type="text" name="searchText" id=""  className="col-7"/>
                        <button type="submit" className="btn-search col-1"><Image src={search} alt="image de la cart shooping"/></button>
                    </div>
                    <div className="div-panier col-3 justify-content-end align-items-center row">
                        <div className="div-articles-montant col-8">
                            <p>$0 -- O items</p>
                        </div>
                        <div className="col-2">
                            <Image src={shopping} className="img-shopping" alt="image de la cart shooping"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
module.exports = Search;