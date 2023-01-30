const sendApps = (req, res) => {
    console.log("I'm here");
    res.status(200).json({ message: 'Sending app' });
};

const sendLinux = (req, res) => {
    res.status(200).json({ message: 'Sending Linux' });
};

const sendProgramming = (req, res) => {
    res.status(200).json({ message: 'Sending Programming' });
};

export { sendApps, sendLinux, sendProgramming };
