import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function (props) {
  return (
    <article
      className={props.open ? "faq open" : "faq"}
      onClick={props.onclick}
    >
      <button>
        <h2 className="faq__q">{props.q}</h2>
        <FontAwesomeIcon icon={faPlus} className="faq__plus" />
        <FontAwesomeIcon icon={faMinus} className="faq__minus" />
      </button>
      <p className="faq__a">{props.a}</p>
    </article>
  );
}
