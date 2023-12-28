import { createElement, useEffect } from "react";



export default function Termly({ id }: { id: string }) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.termly.io/embed-policy.min.js";
        script.async = true;
        document.body.appendChild(script);
      }, []);

    return createElement('div', {
        name: 'termly-embed',
        'data-id': id,
        'data-type': 'iframe'
      })
}