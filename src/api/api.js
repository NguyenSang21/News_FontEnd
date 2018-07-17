import fetch from "isomorphic-fetch";
import { quantity } from '../variables/general';



// fetch Category Tab
export function fetchCTData( ) {
    return fetch( "http://localhost:3001/news_category" )
        .then( res => res.json( ) )
        .then( res => res);
}

// fetch Carousel Data 
export function fetchCSData() {
    return fetch( "http://localhost:3001/news" )
        .then(res => res.json())
        .then(res => res);
}

// fetch Latest News Data
export function fetchLNData() {
    return fetch( "http://localhost:3001/news/nhin-ra-the-gioi/3" )
        .then(res => res.json())
        .then(res => res);
}

// fetch Box 1
export function _1_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/vat-lieu-xay-dung/3" )
        .then(res => res.json())
        .then(res => res)
}

// fetch Box 2
export function _2_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/hoat-dong-doanh-nghiep/4" )
        .then(res => res.json())
        .then(res => res)
}
////////////////////////////////////////////////////////////////////////
// fetch Box 3
export function _3_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/ha-tang/3" )
        .then(res => res.json())
        .then(res => res)
}

// fetch Box 4
export function _4_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/tin-du-an/3" )
        .then(res => res.json())
        .then(res => res)
}
//////////////////////////////////////////////////////////////////////////
// fetch Box 5
export function _5_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/su-kien/4" )
        .then(res => res.json())
        .then(res => res)
}

// fetch Box 6
export function _6_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/chinh-sach-quy-hoach/4" )
        .then(res => res.json())
        .then(res => res)
}

// fetch Box 7
export function _7_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/cao-oc-van-phong/4" )
        .then(res => res.json())
        .then(res => res)
}

//////////////////////////////////////////////////////////////////////////
// fetch Videos
export function _videos_fetch_BoxData_api() {
    return fetch( "http://localhost:3001/news/khu-can-ho-cao-cap/3" )
        .then(res => res.json())
        .then(res => res)
}

//////////////////////////////////////////////////////////////////////////
// fetch Featured Content
export function _fetch_Featured_Content_api(keyCategory) {
    return fetch( "http://localhost:3001/news/"+keyCategory+"/3" )
        .then(res => res.json())
        .then(res => res)
}

//////////////////////////////////////////////////////////////////////////
// fetch Category Box
export function _fetch_Category_Box_api(keyCategory, page) {
    return fetch( `http://localhost:3001/pageNews/${keyCategory}/${page}/${quantity}` )
        .then(res => res.json())
        .then(res => res)
}

//////////////////////////////////////////////////////////////////////////
// fetch Main Category
export function _fetch_Main_Category_api(keyCategory) {
    return fetch( `http://localhost:3001/news/category/key/${keyCategory}` )
        .then(res => res.json())
        .then(res => res)
}

//////////////////////////////////////////////////////////////////////////
// fetch Hentry Post
export function _fetch_Hentry_Post_api(metaKey) {
    return fetch( `http://localhost:3001/news/key/${metaKey}` )
        .then(res => res.json())
        .then(res => res)
}


