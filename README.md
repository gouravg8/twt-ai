# Twtai

Welcome to **TwTai**! TwTai is a platform designed to help users create tweets tailored to their selected categories and moods. With an intuitive interface, users can express their thoughts in a fun and engaging way.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create tweets based on user-defined categories.
- Mood-based tweet creation.
- User authentication and session management.
- Intuitive and responsive UI.

## Technologies

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Prisma, PostgreSQL
- **Styling:** Tailwind CSS
- **Deployment:** TBD 

## Setup

To set up TwTai locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

### Steps

1. **Fork the Repository:**

   ```bash
   to-your-account
   ```

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/twt-ai.git
   cd twt-ai
   ```

3. **Install Dependencies:**
   ```bash
    npm install -g pnpm
    pnpm install
    ```

4. **Copy environment variables**
    ```bash
    cp .env.example .env        # copiying env to .env file
    pnpm dlx auth secret        # creating next auth secret
    ```
5. **Change your DB credentials & Nextauth secret in .env file**
    ```bash
    POSTGRES_USER=your-pg-db-username       # change it
    POSTGRES_PASSWORD=your-pg-db-password   #change it
    POSTGRES_DB=twtai                       # Don't change it
    NEXTAUTH_SECRET="AUTH_SECRET" from .env.local
    ```

5. **Set Up PostgreSQL Database with Docker:**
   ```bash
    docker-compose up -d        # up the docker container for psql
    docker exec -it  <container-name> psql -U <dataBaseUserName> <dataBaseName>                 # open docker terminal in intereactive mode
    ```
6. **Migrate the Database**
    ```bash
    pnpm dlx prisma generate
    pnpm dlx prisma migrate deploy
    ```

7. **Seed the Database**
    ```bash
    pnpm exec prisma db seed # this willl add some dummy data in db
    ```

8. **Run server**
    ```bash
    pnpm run dev
    ```
9. **Dummy email and pass to login**
    ```bash
    email: johndoe@example.com
    pass: johndoepass

    email: janesmith@example.com
    pass: janesmithpass
    ```

## Usage
Once the server is running, navigate to the app in your browser. You'll be able to:

- Create and customize your tweets based on category and mood.
- Explore tweet suggestions tailored to your preferences.

## Contributing
Contributions are welcome!  
Please fork the repository and create a pull request for any features or bug fixes.

## Licence
Copyright (c) 2024 Twtai

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to use, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, without any restrictions.

**Conditions:**

**Attribution**: You must give appropriate credit to the original author(s) by including a link to the original repository ([Twtai](https://github.com/gouravg8/twt-ai)) in any copy or substantial portion of the Software.

**No Warranty**: The Software is provided "as is", without warranty of any kind, express or implied. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability arising from the use of the Software.