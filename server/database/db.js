import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@clone-whatsapp.4wihl0z.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('Database connected succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;