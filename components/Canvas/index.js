import { useRef } from "react";

const Canvas = ({ data }) => {
    let svgRef = useRef(null)

    return <svg ref={svgRef} />
}

export default Canvas