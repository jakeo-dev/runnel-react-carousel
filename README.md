# Runnel React Carousel

### A simple image carousel component for React.

## Why would I use Runnel?

maybe because it has...

- toggleable autoplay
- toggleable looping
- arrow and dot navigation
- ability to change size of controls
- dark and light themes
- fade transitions
- other customizing options that i dont remember
- easy to implement & use

## Ok but how do I start using Runnel right now?

first install it from npm

```bash
npm i runnel-react-carousel
```

after installing it, make sure to import the component and the styles (just copy & paste the code below)

```ts
import RunnelCarousel from "runnel-react-carousel";
import "runnel-react-carousel/dist/runnel-react-carousel.css";
```

then you can use the component however you want. heres an exmaple:

```ts
<RunnelCarousel
  height="500px"
  width="80%"
  controlsColor="dark"
  arrowsPosition="bottom"
  arrowsSize="md"
  imagesDuration={4000}
  images={[
    {
      src: "https://images.unsplash.com/photo-1462143338528-eca9936a4d09?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Bottom-up view of a forest",
      position: "bottom",
    },
    {
      src: "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Tree in the middle of a beach",
      position: "top",
      fit: "scale-down",
      duration: 8000,
    },
    {
      src: "https://images.unsplash.com/photo-1421790500381-fc9b5996f343?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Trees next to a river in the forest",
      position: "top",
    },
  ]}
/>
```

## What are all the different props?

ok here they are:

### `images` (required)

##### `src` (required)

- path to image source
- `string`

##### `alt`

- alt text for image
- `string` (empty by default)

##### `className`

- class name for one image
- `string` (empty by default)

##### `fit`

- css fit of image
- `string`: cover, contain, fill, scale-down, or none (cover by default)

##### `position`

- css positioning of image, useful for cover fit
- `string`: top-left, top, top-right, left, center, right, bottom-left, bottom, bottom-right (center by default)

##### `duration`

- duration that one image is visible
- `number` in milliseconds (uses `imagesDuration` by default if empty)

### `height` (required)

- any valid css height
- `string`

### `width`

- any valid css width (100% by default)
- `string`

### `className`

- class name that applies to the carousel component
- `string` (empty by default)

### `imagesClassName`

- class name that applies to all image elements
- `string` (empty by default)

### `firstImageIndex`

- index of first image to display when the page loads
- `number` (0 by default)

### `autoplay`

- auto cycle through each image when true
- `boolean` (true by default)

### `imagesDuration`

- duration that each image is visible
- `number` in milliseconds (5000 by default)

### `loop`

- go to first image after last image when true
- `boolean` (true by default)

### `transitionDuration`

- duration of fade transition between images
- `number`: 75, 100, 150, 200, 300, 500, 700, or 1000 (500 by default)

### `controlsColor`

- color/theme of arrows and dots navigation
- `string`: dark, light, transparent-dark, or transparent-light (dark by default)

### `arrowsSize`

- size of arrows
- `string`: sm, md, lg, or xl (md by default)

### `arrowsPosition`

- position of arrows
- `string`: middle, bottom, or bottom-center (middle by default)

### `showDots`

- whether to show dot navigation
- `boolean` (true by default)

### `showArrows`

- whether to show arrow navigation
- `boolean` (true by default)

## What does runnel actually mean?

a runnel is like a little river in the ground that allows water to flow
