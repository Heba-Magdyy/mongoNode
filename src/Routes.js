const postsRoutes = require("./posts/routes");
const userRoutes = require("./users/routes")
const adsRoutes = require("./ads/routes")

module.exports = (app)=>{
    app.use("/posts", postsRoutes);
    app.use("/users", userRoutes);
    app.use("/ads", adsRoutes);

}