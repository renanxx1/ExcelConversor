const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const Writer = require('./Writer');
const PDFWriter = require('./PDFWriter');

var leitor = new Reader();
var escritor = new Writer();

async function main() {
    var dados = await leitor.Read('./csvfile.csv');
    var dadosProcessados = Processor.Process(dados)
    var usuarios = new Table(dadosProcessados);
    var html = await HtmlParser.Parser(usuarios);

    PDFWriter.WritePDF(Date.now()+'.pdf', html); //Converter para PDF
    
    //escritor.writer(Date.now()+'.html', html); //Converter para HTML
}

main();