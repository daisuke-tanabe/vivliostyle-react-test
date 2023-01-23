import React from "react";

import { Renderer } from "@vivliostyle/react";

export const Viewer = () => {
    const [page, setPage] = React.useState(1);

    function next() {
        setPage((page) => page + 1);
    }

    function prev() {
        setPage((page) => page - 1);
    }

    function onLoad(state) {
        console.log(state.epageCount, state.docTitle);
    }

    const sample =
        "https://vivliostyle.github.io/vivliostyle_doc/samples/gon/index.html";

    return (
        <div>
            <Renderer source={sample} page={page} onLoad={onLoad} />
            <button onClick={next}>Next</button>
            <button onClick={prev}>Prev</button>
        </div>
    );
};