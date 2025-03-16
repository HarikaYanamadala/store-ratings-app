exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt received:', email, password);
  
    if (!email || !password) {
      console.log('Missing email or password');
      return res.status(400).json({ message: "Email and password are required" });
    }
  
    console.log('Login success');
    res.json({ token: "your_generated_jwt_token" });
  };
  