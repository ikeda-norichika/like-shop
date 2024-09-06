import React, { useState } from "react";
import './index.css';

import pexelsPhoto from './images/pexels-photo-1600727.jpeg';
import publicDomainQ from './images/publicdomainq-0029276ntr.jpg';
import p041152348 from './images/P041152348_480.jpg';


type ItemList = {
  id: number;
  image?: string, 
  name: string;
  address: string;
  price: number;
};

type Item = ItemList[];

const items: Item = [
  {
    id: 1,
    image: pexelsPhoto,
    name: "6th by ORIENTAL HOTEL",
    address: "東京都千代田区有楽町1丁目12-1 新有楽町ビル1F",
    price: 3000,
  },
  {
    id: 2,
    name: "and people ginza",
    address: "東京都中央区銀座6丁目5-15 銀座能楽堂飯島ビル9階",
    price: 2500,
  },
  {
    id: 3,
    name: "apartment.m cafe",
    address: "千葉県千葉市中央区弁天2丁目23-1 弁天プラザ1F",
    price: 1500,
  },
  {
    id: 4,
    image: publicDomainQ,
    name: "ルポ・デ・アンジェリーク",
    address: "千葉県千葉市中央区青葉町1250-2",
    price: 1000,
  },
  {
    id: 5,
    image: p041152348,
    name: "西千葉イタリアン・カフェ＆バル DEAR FROM",
    address: "千葉県千葉市中央区春日2丁目10-8 ラ・ペール春日 1c",
    price: 3000,
  },
];

function Cards() {
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});

  const toggleLiked = (id: number) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [id]: !prevLikedItems[id],
    }));
  };

  return (
    <>
      <div className="card-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-screen-xl mx-auto">
        {items.map(item => {
          const isLiked = likedItems[item.id] || false;
          return (
            <div className="item rounded overflow-hidden shadow-lg flex flex-col max-w-96 group" key={item.id}>
              <div className="store-image relative flex-grow my-0 mx-auto overflow-hidden h-64 w-full">
                {item.image
                  ? <img src={item.image} alt="" className="duration-100 transition-all h-64 w-full object-cover"/>
                  : <img src="https://via.placeholder.com/500x333" alt="" className="duration-100 transition-all h-64 w-full object-cover"/>
                }
                <div className="transition duration-300 absolute inset-0 bg-gray-900 opacity-25 group-hover:bg-transparent">
                </div>
              </div>
              <div className="main p-5">
                <h2 className="mb-3 h-12 text-xl font-bold">{item.name}</h2>
                <p className="my-2 h-10 text-gray-500 text-sm">住所：{item.address}</p>
                <p className="mt-2 text-gray-500 text-sm">価格帯：{item.price}～</p>
              </div>
              <div className="like flex bg-gray-100 py-3 px-5">
                <div
                  className={isLiked ? "btn toggled me-4 cursor-pointer" : "btn me-4 cursor-pointer"}
                  onClick={() => toggleLiked(item.id)}
                    ></div>
                <p>{isLiked ? 1 : 0}</p>
              </div>
            </div>
          );
        })}
      </div>     
    </>
  );
}

export default Cards;