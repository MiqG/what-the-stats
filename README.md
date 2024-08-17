# What The Stats!? 😲

Welcome to **What The Stats!?** — a fun web application that generates interesting and surprising statistics about various topics based on user preferences. 

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

**What The Stats!?** allows users to generate fun and surprising statistics based on selected filters such as mood, complexity, category, and stat type. The application uses a generative AI model from Hugging Face to create these statistics.

## Features

- **Interactive UI**: Select filters such as mood, category, complexity, and stat type to generate a unique statistic.
- **Surprise Me**: Automatically generate random statistics without selecting filters.
- **Toggle Prompt**: View or hide the prompt used to generate the statistic.
- **Responsive Design**: The application is responsive and works well on all devices.

## Tech Stack

- **Frontend**: React.js
- **API**: Hugging Face Inference API (Mistral-7B model)
- **Deployment**: GitHub Pages / Vercel / Netlify

## Setup

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- A Hugging Face API key

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/what-the-stats.git
    cd what-the-stats
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env` file:**
    ```bash
    touch .env
    ```

4. **Add your Hugging Face API key to the `.env` file:**
    ```
    REACT_APP_HUGGING_FACE_API_KEY=your-hugging-face-api-key
    ```

5. **Start the development server:**
    ```bash
    npm start
    ```

    The application should now be running on `http://localhost:3000`.

## Usage

1. Open the app in your browser.
2. Select your preferences (mood, category, complexity, stat type).
3. Click on "Generate Stat" to generate a statistic.
4. Use the "Surprise Me!" button to generate random statistics.
5. View or hide the prompt used for generation by clicking the "Show Prompt" button.

## Deployment

### Deploying to GitHub Pages

1. **Install the `gh-pages` package:**
    ```bash
    npm install gh-pages --save-dev
    ```

2. **Update the `package.json` file:**

    Add the following to your `package.json`:

    ```json
    "homepage": "https://your-username.github.io/what-the-stats",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```

3. **Deploy the app:**
    ```bash
    npm run deploy
    ```

    Your app will be available at `https://your-username.github.io/what-the-stats`.

### Deploying to Vercel or Netlify

1. **Sign up** for an account on [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. **Link your GitHub repository** to Vercel or Netlify.
3. **Deploy** directly from the dashboard. Both platforms will automatically build and deploy your app.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
