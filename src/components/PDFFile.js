import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
import headshot from '../images/head-shot.jpg'
//PDF resource https://www.youtube.com/watch?v=JU7rfAMpbZA

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});



const PDFFile = () => {

  return (
   <Document>
       <Page style={styles.body}>
           <Text style={styles.header}></Text>
           <Image style={styles.image} src={headshot} />
           <Text style={styles.text}>Lorem ipsum dolor sit amet.</Text>
           <Text
             style={styles.pageNumber}
             render={({pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
             fixed
             />
            
       </Page>
   </Document>
  )
}

export default PDFFile