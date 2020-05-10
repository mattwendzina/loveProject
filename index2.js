// document.getElementById('submit').addEventListener('click', () => {
//   let speed = document.getElementById('input').value;
//   newCarousel = new Carousel(
//     [
//       {
//         title: 'Blog Post One',
//         subtitle: 'A sustainable future',
//         mainContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//       },
//       {
//         title: 'Blog Post Two',
//         subtitle: 'A New future',
//         mainContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//       },
//       {
//         title: 'Blog Post Three',
//         subtitle: 'A Better future',
//         mainContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//       },
//     ],
//     speed
//   );
//   console.log(newCarousel);
// });

class Carousel {
  content;
  speed;
  contentPosition = 0;

  //Elements
  carouselContent;
  title;
  subtitle;
  mainContent;

  constructor(content, speed) {
    this.content = content;

    this.speed = setInterval(() => {
      this.moveRight();
    }, speed);

    this.carouselContent = document.getElementById('carouselContent');

    this.title = this.getElementById('title', this.content[0].title);
    this.subtitle = this.getElementById('subtitle', this.content[0].subtitle);
    this.mainContent = this.getElementById(
      'mainContent',
      this.content[0].mainContent
    );
  }

  getElementById(id, element) {
    return (document.getElementById(id).innerText = element);
  }

  updateBlogContent() {
    this.title = this.getElementById(
      'title',
      this.content[this.contentPosition].title
    );
    this.subtitle = this.getElementById(
      'subtitle',
      this.content[this.contentPosition].subtitle
    );
    this.mainContent = this.getElementById(
      'mainContent',
      this.content[this.contentPosition].mainContent
    );
  }

  contentTransition() {
    this.carouselContent.classList.toggle('displayBlock');
    this.updateBlogContent();
    setTimeout(() => {
      this.carouselContent.classList.toggle('displayBlock');
    }, 2000);
  }

  setSpeed(newSpeed) {
    setInterval(() => {
      moveRight();
    }, newSpeed);
  }

  moveLeft() {
    if (this.contentPosition === 0) {
      return;
    }
    this.contentPosition -= 1;
    this.contentTransition();
  }

  moveRight() {
    if (this.contentPosition === this.content.length - 1) {
      this.contentPosition = 0;
      this.contentTransition();
      return;
    }
    this.contentPosition += 1;
    this.contentTransition();
  }
}

let newCarousel = new Carousel(
  [
    {
      title: 'Blog Post One',
      subtitle: 'A sustainable future',
      mainContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      title: 'Blog Post Two',
      subtitle: 'A New future',
      mainContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      title: 'Blog Post Three',
      subtitle: 'A Better future',
      mainContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
  ],
  5000
);
