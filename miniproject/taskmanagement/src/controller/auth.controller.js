export const Login = (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ message: "Username is required" });
    }

    req.session.user = username; // ✅ Corrected
    res.cookie("username", username, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });
    
    res.json({ message: "Login successful", username });
};

export const Logout = (req, res) => {
    res.clearCookie("username");

    req.session.destroy((error) => {  // ✅ Use req.session
        if (error) {
            return res.status(500).json({ message: "Something went wrong" });
        }
        res.json({ message: "Logout successful" });
    });
};
