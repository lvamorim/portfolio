const carousel = () => {
  new Glider(document.querySelector('.glider'), {
    slidesToShow: '1',
    dots: '.dots',
    draggable: true,
    rewind: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
  }});
}

export default carousel;
