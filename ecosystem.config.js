module.exports = {
  apps: [
    {
      name: "readsync",
      script: "npm",
      args: "start",
      env: {
        PORT: 3000,
      },
      output: "./logs/out.log",
      error: "./logs/error.log",
    },
  ],
};
