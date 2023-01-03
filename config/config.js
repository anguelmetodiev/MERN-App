const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "SEI_rocks",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'Enter your MongoDB URL here' 
}

export default config

/*
1. Go to https://www.mongodb.com/
2. Click on Sign in
3. Enter your username and password
4. Click on Data Services
5. Next to the Cluster click Connect
6. Connect Your Application
7. mongodb+srv://
*/