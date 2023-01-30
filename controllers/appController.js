const sendApps = (req, res) => {
    console.log("I'm here");
    res.status(200).json({ message: 'Sending app' });
};

export default sendApps;
