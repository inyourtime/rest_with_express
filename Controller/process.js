const Employee = require("../Models/employee");

const CreateUser = async (req, res) => {
    try {
        const new_user = new Employee(req.body);
        await new_user.save();
        res.json(new_user);
    } catch (err) {
        res.send({
            message: err,
        });
    }
};

const GetUsers = async (req, res) => {
    try {
        const users = await Employee.find({});
        res.json(users);
    } catch (err) {
        res.send({
            message: err,
        });
    }
};

const GetSomeUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Employee.findById(id);
        if (!user) {
            res.status(404).send({
                message: "Not found user with id " + id,
            });
        } else {
            res.json(user);
        }
    } catch (err) {
        res.send({
            message: err,
        });
    }
};

const UpdateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Employee.findByIdAndUpdate(id, {
            $set: req.body,
        });
        if (!user) {
            res.status(404).send({
                message: `Cannot update user with id=${id}. Maybe employee was not found!`,
            });
        } else {
            res.send({
                message: "Employee was updated successfully.",
            });
        }
    } catch (err) {
        res.send({
            message: err,
        });
    }
};

const DeleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Employee.findByIdAndRemove(id);
        if (!user) {
            res.status(404).send({
                message: `Cannot delete user with id=${id}. Maybe employee was not found!`,
            });
        } else {
            res.send({
                message: "Employee was delete successfully.",
            });
        }
    } catch (err) {
        res.send({
            message: err,
        });
    }
};

module.exports = {
    CreateUser,
    GetUsers,
    GetSomeUser,
    UpdateUser,
    DeleteUser,
};

// route.post('/add', (req, res, next) => {
//     User.create(req.body, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             console.log(data)
//             res.json(data)
//         }
//     })
//     // const userModel = new User(req.body)
//     // await userModel.save()
//     // res.json(userModel)
// })

// route.get('/data', async (req, res) => {
//     const data = await User.find()
//     res.json(data)
// })

// module.exports = route;
