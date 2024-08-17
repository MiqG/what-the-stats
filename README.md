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
- **Environment Management**: Mamba (Conda)

## Setup

To run this project locally, follow these steps:

### Prerequisites

- mamba installed to reproduce the environment
- Node.js and npm installed
- A Hugging Face API key

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/what-the-stats.git
    cd what-the-stats
    ```

2. **Create a conda environment from the `environment.yml` file:**
    ```bash
    conda env create -f environment.yml
    ```

3. **Activate the conda environment:**
    ```bash
    conda activate what-the-stats
    ```

    Replace `what-the-stats` with the name of the environment specified in `environment.yml`.

4. **Install JavaScript dependencies:**
    ```bash
    npm install
    ```

5. **Create a `.env` file:**
    ```bash
    touch .env
    ```

6. **Add your Hugging Face API key to the `.env` file:**
    ```
    REACT_APP_HUGGING_FACE_API_KEY=your-hugging-face-api-key
    ```

7. **Start the development server:**
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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
