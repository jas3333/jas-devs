import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Must include title'],
    },
    text: {
        type: String,
        required: [true, 'Must include text'],
    },
});

export default mongoose.model('Blog', blogSchema);
