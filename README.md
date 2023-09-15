# Beer Pub Website

> [Working Demo](https://beerpub.raru.dev/)

## Project Description

A styilsh mock website of a beer pub.

## Getting Started

### Prerequisites

- nodejs

  Debian/Ubuntu:

  ```sh
  sudo apt install nodejs
  ```

- npm

  Debian/Ubuntu:

  ```sh
  sudo apt install npm
  ```

- Lighthouse (optional)

  ```sh
  npm install -g lighthouse
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/CozmaRares/beer-pub.git
   cd beer-pub
   ```

2. Install the dependencies

   ```sh
   npm install
   ```

3. Start the development server

   ```sh
   npm run dev
   ```

4. Build for production

   ```sh
   npm run build
   ```

   or build and deploy (configured deploy on GitHub Pages)

   ```sh
   npm run deploy
   ```

   > **Note** By default, the deploy script will push to the current `origin`.
   > If you cloned this repository, the `origin` will be set to **MY** GitHub
   > repository and domain. Be sure to remove the `origin` and set it yoursef,
   > and change the `deploy:domain` script if you plan on deploying to GitHub Pages.

    <!---->

   > Remove origin
   >
   > ```sh
   > git remote remove origin
   > ```

5. (optional) Generate Lighthouse report

   ```sh
   npm run report
   ```

   > **Note** Runs a bash script (`report.sh`) under the hood. Make sure your OS
   > can run bash scripts.

   <!-- -->

   > **Note** `report.sh` requires some additional configuration.

## Reflection

This is a remake of the [original project](https://github.com/CozmaRares/odin-project-restaurant),
included in [The Odin Project](https://www.theodinproject.com/) curriculum, and
uses the design of [this template website](https://beerpub.weblium.site/).

The objective of the original project was to create a homepage for a restaurant
using `JavaScript` to manipulate the DOM and package the code with `Webpack`. I
recreated the site using `React`, as the framework also manipulates the DOM
behind the scenes, and `Vite` as the build tool.

Utilizing the knowledge gained from [the previous project](https://github.com/CozmaRares/nft-landing),
designing the website's responsive layout became significantly more
straightforward. I began by focusing on the mobile view and then adjusted the
layout for larger screens, in alignment with the mobile-first breakpoint system
of `TailwindCSS`.

The sole distinction in this project's tech stack compared to the previous one
lies in the addition of `React Router` and the utilization of the component
library [shadcn/ui](https://ui.shadcn.com/).
