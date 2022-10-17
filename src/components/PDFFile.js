import DocViewer, { DocViewerRenderers,PDFRenderer, PNGRenderer } from "react-doc-viewer";
import headshot from '../images/head-shot.jpg'
//PDF resource https://www.youtube.com/watch?v=JU7rfAMpbZA
import PropTypes from "prop-types";
import jsPDF from "jspdf";


const PDFFile = () => {

    const pdfGenerate=() => {
        const doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(headshot, 'PNG', 65, 20, 500, 400)
    }
    return (
        <div className='resume'>
            <button onClick={pdfGenerate}>download pdf</button>
            
        </div>
    )
}
export default PDFFile;