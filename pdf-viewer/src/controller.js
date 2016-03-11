import gif1 from './images/test_1.gif';
import gif2 from './images/test_2.gif';
import gif3 from './images/test_3.gif';
import gif4 from './images/test_4.gif';
import gif5 from './images/test_5.gif';
import gif6 from './images/test_6.gif';
import gif7 from './images/test_7.gif';


class PdfViewerController {
  constructor() {
    this.name = 'PDF Viewer';
    this.preview = gif1;
    this.slides = [
      gif1, gif2, gif3, gif4, gif5
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

    this.pdfUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/149125/material-design-2.pdf';

  }

}

export default PdfViewerController;
