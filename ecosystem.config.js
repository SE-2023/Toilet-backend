module.exports = {
    apps: [
      {
        name: "deploy",
        script: "./dist/index.js",
        env: {
          NODE_ENV: "",
        },
        env_dev: {
          NODE_ENV: "dev",
        },
        env_uat: {
          NODE_ENV: "uat",
        },
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };