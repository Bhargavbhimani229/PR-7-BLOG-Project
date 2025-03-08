const userAuth = (req, res, next) => {
  const {userId} = req.cookies; 
  console.log("Cookies Received:", req.cookies); 
  if (userId) {
    return next();
  } else {
    console.log("❌ No valid userId found in cookies.");
    res.redirect("/login"); 
  }
};

module.exports = userAuth;