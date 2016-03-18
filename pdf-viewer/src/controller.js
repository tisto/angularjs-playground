import png1 from './images/output-1.png';
import png2 from './images/output-2.png';
import png3 from './images/output-3.png';
import png4 from './images/output-4.png';
import png5 from './images/output-5.png';
import png6 from './images/output-6.png';
import png7 from './images/output-7.png';


class PdfViewerController {
  constructor() {
    this.name = 'PDF Viewer';
    this.preview = png1;
    this.slides = [
      png1, png2, png3, png4, png5
    ];
    this.currentIndex = 0;

    this.setCurrentSlideIndex = function (index) {
      this.currentIndex = index;
    };

    this.isCurrentSlideIndex = function (index) {
      return this.currentIndex === index;
    };

    this.prevSlide = function () {
      this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
    };

    this.nextSlide = function () {
      this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
    };

    this.pdfUrl = 'test.pdf';

  }

}

export default PdfViewerController;