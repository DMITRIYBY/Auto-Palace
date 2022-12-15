import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData} from "../store/goodsSlice";
import SalesCard from "./SalesCard";
import './css/goodsList.css'

function GoodsList(props){
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(fetchData())
        },[])
 
    const goods = useSelector((state)=>state.goods.data)
    // goods = goods.sort(function(obj1, obj2) {
    //     // Сортировка по возрастанию
    //     return obj1.price-obj2.price;
    //   });
    // goods = goods.map(item => item.price.sort())
    // console.log(goods);
    


    return(
        <>
            <div className="goods_field">
                {goods.map(item => <SalesCard image = {item.image} mark={item.mark} year={item.year} price={item.price}/>)}
                {console.log("Sucsess render!")}
            </div>
        </>
    )
}
export default GoodsList;