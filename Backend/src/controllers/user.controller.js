import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        // basic validation
        if(!username || !email|| !password){
            return res.status(400).json({message: "All the fileds are important"})
        }

        // user already exist

        const existing = await User.findOne({email: email.toLowerCase()});
        if(existing){
            return res.status(400).json({message: "User already exist"})
        }

        // create user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
        });
        res.status(201).json({
            message: "User registered",
            user: {id : user._id, email: user.email, username: user.username}
        });
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message});

    }
};

const loginUser = async (req,res) => {
    try {
        
        const {email,password} = req.body;

        const user = await User.findOne({
            email: email.toLowerCase()
        });

        if(!user) return res.status(400).json({
            message: "USer not found"
        });


        // compare password
        const isMatch = await user.comparePassword(password);
        if(!isMatch)return res.status(400).json({
            message: "INvalid credentials"
        })

        res.status(200).json({
            message: "User logged in",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        })
    } catch (error) {
        res.status(500).json({
            message:" Internal server error"
        })
    }
}

export{
    registerUser,
    loginUser
};