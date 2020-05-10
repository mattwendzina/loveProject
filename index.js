// Get Elements
const carouselContent = document.getElementById('carouselContent');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const mainContent = document.getElementById('mainContent');
const menu = document.getElementById('menu');

// Blog Post Contetn
const blogPostContent = [
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
];

// Set Blog Position
let blogPostPosition = 0;

// Initialise blogPost Content
(function onInit() {
  title.innerText = blogPostContent[blogPostPosition].title;
  subtitle.innerText = blogPostContent[blogPostPosition].subtitle;
  mainContent.innerText = blogPostContent[blogPostPosition].mainContent;

  // Initialise Carousel classes
  carouselContent.classList.add('initial');
  setTimeout(() => {
    carouselContent.classList.toggle('show');
  }, 800);

  // Set up interval cycle for carousel
  setInterval(() => {
    moveRight();
  }, 5000);
})();

// Functions
const updateBlogContent = () => {
  title.innerText = blogPostContent[blogPostPosition].title;
  subtitle.innerText = blogPostContent[blogPostPosition].subtitle;
  mainContent.innerText = blogPostContent[blogPostPosition].mainContent;
};

const contentTransition = () => {
  carouselContent.classList.toggle('show');
  setTimeout(() => {
    carouselContent.classList.toggle('show');
  }, 100);
};

// On Click Listeners
const moveLeft = () => {
  if (blogPostPosition === 0) {
    return;
  }
  blogPostPosition -= 1;
  contentTransition();
  updateBlogContent();
};

const moveRight = () => {
  if (blogPostPosition === blogPostContent.length - 1) {
    blogPostPosition = 0;
    contentTransition();
    updateBlogContent();
    return;
  }
  blogPostPosition += 1;
  updateBlogContent();
  contentTransition();
};

const toggleMenu = () => {
  menu.classList.toggle('menuTogglePosition');
};
