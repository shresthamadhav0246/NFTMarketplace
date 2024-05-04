import React from "react";
import Link from "next/link";

import Style from "./Discover.module.css";

const Discover = () => {
  const discovers = [
    { name: "Art Collection", link: "/collection" },
    { name: "Exclusive Drops", link: "/exclusive-drops" },
    { name: "Virtual Realities", link: "/virtual-realities" },
  ];

  return (
    <div className={Style.container}>
      <h2 className={Style.heading}>Discover</h2>
      <ul className={Style.list}>
        {discovers.map((discover, index) => (
          <li key={index} className={Style.item}>
            <Link href={discover.link} className={Style.link}>
              {discover.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Discover;
