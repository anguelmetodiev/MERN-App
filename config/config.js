const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "SEI_rocks",
    mongoUri: process.env.MONGODB_URI ||
      process.env.MONGO_HOST ||
      'Please Enter Your MongoDB URL here'
  }
  
  export default config
  