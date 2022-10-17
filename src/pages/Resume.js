import DocViewer, { DocViewerRenderers, PDFRenderer, PNGRenderer } from "react-doc-viewer";
import headshot from '../images/head-shot.jpg'
//PDF resource https://www.youtube.com/watch?v=JU7rfAMpbZA
import PropTypes from "prop-types";
import jsPDF from "jspdf";
import '../Resume.css';


const Resume = () => {

    const pdfGenerate = () => {
        const doc = new jsPDF('landscape', 'px', 'a4', 'false');
        
        doc.addImage(headshot, 'PNG', 65, 20, 500, 400)
        doc.addPage()
        doc.setFont('Times New Roman', 'bold');
        doc.setTextColor('red', 'black')
        doc.text(300, 60, 'Darnell Eaton');
        doc.setFont('Times New Roman', 'Normal');
        doc.text(260, 80, 'darnelleatonacting@gmail.com');
        doc.text(300, 100, '240-476-2860');
        doc.text(60, 130, 'Height: 5’8 ');
        doc.text(300, 100, 'Weight: 165');
        doc.text(200, 100, 'Hair: Black');
        doc.text(100, 100, 'Eyes: Black');
        doc.save('Darnell-Resume.pdf')
        
    }
    return (
        <div className="Resume-container">
            <h1>resume</h1>
            <img src={headshot} />
            <div className="resume-button">
                <button
                    style={{ width: '50px' }}
                    onClick={pdfGenerate}>Download PDF</button>
            </div>
            

        </div>
    )
}
export default Resume;